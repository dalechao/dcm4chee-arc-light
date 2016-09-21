/*
 * *** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is part of dcm4che, an implementation of DICOM(TM) in
 * Java(TM), hosted at https://github.com/gunterze/dcm4che.
 *
 * The Initial Developer of the Original Code is
 * J4Care.
 * Portions created by the Initial Developer are Copyright (C) 2016
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 * See @authors listed below
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * *** END LICENSE BLOCK *****
 */

package org.dcm4chee.arc.stgcmt.impl;

import org.dcm4che3.data.Attributes;
import org.dcm4che3.data.Sequence;
import org.dcm4che3.data.Tag;
import org.dcm4che3.net.Device;
import org.dcm4chee.arc.conf.ArchiveDeviceExtension;
import org.dcm4chee.arc.conf.ExporterDescriptor;
import org.dcm4chee.arc.entity.ExternalRetrieveAETitle;
import org.dcm4chee.arc.entity.Instance;
import org.dcm4chee.arc.entity.StgCmtResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.HashSet;
import java.util.List;

/**
 * @author Gunter Zeilinger <gunterze@gmail.com>
 * @author Vrinda Nayak <vrinda.nayak@j4care.com>
 * @since Sep 2016
 */
@Stateless
public class StgCmtEJB {

    private final Logger LOG = LoggerFactory.getLogger(StgCmtEJB.class);

    @PersistenceContext(unitName="dcm4chee-arc")
    private EntityManager em;

    public void addExternalRetrieveAETs(Attributes eventInfo, Device device) {
        String transactionUID = eventInfo.getString(Tag.TransactionUID);
        try {
            StgCmtResult result = em.createNamedQuery(StgCmtResult.FIND_BY_TRANSACTION_UID, StgCmtResult.class)
                    .setParameter(1, transactionUID).getSingleResult();
            addExternalRetrieveAETsToInstances(eventInfo,
                    device.getDeviceExtension(ArchiveDeviceExtension.class)
                            .getExporterDescriptorNotNull(result.getExporterID()),
                    result.getStudyInstanceUID());
            result.setStgCmtResult(eventInfo);
        } catch (NoResultException e) {
            LOG.warn("No Storage Commitment result found with transaction UID : " + transactionUID);
        }
    }

    private void addExternalRetrieveAETsToInstances(Attributes eventInfo, ExporterDescriptor ed, String suid) {
        String[] configRetrieveAETs = ed.getRetrieveAETitles();
        String defRetrieveAET = eventInfo.getString(Tag.RetrieveAETitle, ed.getStgCmtSCPAETitle());
        Sequence sopSeq = eventInfo.getSequence(Tag.ReferencedSOPSequence);
        List<Instance> instances = em.createNamedQuery(Instance.FIND_BY_STUDY_IUID, Instance.class)
                                .setParameter(1, suid).getResultList();
        HashSet<String> disjoin = new HashSet<>();
        for (Instance inst : instances) {
            Attributes sopRef = sopRefOf(inst.getSopInstanceUID(), sopSeq);
            if (sopRef != null) {
                if (configRetrieveAETs != null && configRetrieveAETs.length > 0) {
                    for (String retrieveAET : configRetrieveAETs) {
                        inst.addExternalRetrieveAET(retrieveAET);
                    }
                } else {
                    inst.addExternalRetrieveAET(sopRef.getString(Tag.RetrieveAETitle, defRetrieveAET));
                }
            }
        }
        boolean allInstancesWithExtRetrAET = false;
        for (Instance i : instances) {
            allInstancesWithExtRetrAET = !i.getExternalRetrieveAETs().isEmpty();
            for (ExternalRetrieveAETitle aet : i.getExternalRetrieveAETs())
                disjoin.add(aet.getRetrieveAET());
            if (!allInstancesWithExtRetrAET)
                break;
        }
        if (allInstancesWithExtRetrAET && !disjoin.isEmpty() && disjoin.size() == 1)
            instances.get(0).getSeries().getStudy().addExternalRetrieveAET(disjoin.iterator().next());
    }

    private Attributes sopRefOf(String iuid, Sequence seq) {
        for (Attributes item : seq) {
            if (iuid.equals(item.getString(Tag.ReferencedSOPInstanceUID)))
                return item;
        }
        return null;
    }

    public void persistStgCmtResult(
            String studyInstanceUID, String seriesInstanceUID, String sopInstanceUID, String exporterID,
            Attributes actionInfo, String deviceName) {
        StgCmtResult result = new StgCmtResult();
        result.setStgCmtRequest(actionInfo);
        result.setStudyInstanceUID(studyInstanceUID);
        result.setSeriesInstanceUID(seriesInstanceUID);
        result.setSopInstanceUID(sopInstanceUID);
        result.setExporterID(exporterID);
        result.setDeviceName(deviceName);
        em.persist(result);
    }
}