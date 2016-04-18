myApp.constant("$modalities",{
"common":{
  "CR":"Computed Radiography",
  "CT":"Computed Tomography",
  "DX":"Digital Radiography",
  "KO":"Key Object Selection",
  "MR":"Magnetic Resonance",
  "MG":"Mammography",
  "NM":"Nuclear Medicine",
  "OT":"Other",
  "PT":"Positron emission tomography (PET)",
  "PR":"Presentation State",
  "US":"Ultrasound",
  "XA":"X-Ray Angiography"
},
"more":{
  "AR":"Autorefraction",
  "AU":"Audio",
  "BDUS":"Bone Densitometry (ultrasound)",
  "BI":"Biomagnetic imaging",
  "BMD":"Bone Densitometry (X-Ray)",
  "DOC":"Document",
  "DG":"Diaphanography",
  "ECG":"Electrocardiography",
  "EPS":"Cardiac Electrophysiology",
  "ES":"Endoscopy",
  "FID":"Fiducials",
  "GM":"General Microscopy",
  "HC":"Hard Copy",
  "HD":"Hemodynamic Waveform",
  "IO":"Intra-Oral Radiography",
  "IOL":"Intraocular Lens Data",
  "IVOCT":"Intravascular Optical Coherence Tomography",
  "IVUS":"Intravascular Ultrasound",
  "KER":"Keratometry",
  "LEN":"Lensometry",
  "LS":"Laser surface scan",
  "OAM":"Ophthalmic Axial Measurements",
  "OCT":"Optical Coherence Tomography (non-Ophthalmic)",
  "OP":"Ophthalmic Photography",
  "OPM":"Ophthalmic Mapping",
  "OPT":"Ophthalmic Tomography",
  "OPV":"Ophthalmic Visual Field",
  "OSS":"Optical Surface Scan",
  "PLAN":"Plan",
  "PX":"Panoramic X-Ray",
  "REG":"Registration",
  "RESP":"Respiratory Waveform",
  "RF":"Radio Fluoroscopy",
  "RG":"Radiographic imaging (conventional film/screen)",
  "RTDOSE":"Radiotherapy Dose",
  "RTIMAGE":"Radiotherapy Image",
  "RTPLAN":"Radiotherapy Plan",
  "RTRECORD":"RT Treatment Record",
  "RTSTRUCT":"Radiotherapy Structure Set",
  "RWV":"Real World Value Map",
  "SEG":"Segmentation",
  "SM":"Slide Microscopy",
  "SMR":"Stereometric Relationship",
  "SR":"SR Document",
  "SRF":"Subjective Refraction",
  "STAIN":"Automated Slide Stainer",
  "TG":"Thermography",
  "VA":"Visual Acuity",
  "XC":"External-camera Photography"
}
});
myApp.constant("$select", 
  {
      "dicomNetworkConnection":{
        "title" : "Network Connection",
        "optionRef" : ["dicomNetworkConnection"],
        "optionValue": "cn",
        "type": "array",
        "required":{
          "cn": "Conneciton name",
          "dicomHostname":"Hostname"
        }
      },
      "dicomNetworkAE":{
        "title" : "Network AE",
        "optionRef" : ["dicomNetworkAE"],
        "optionValue" : "dicomAETitle",
        "type": "array",
        "parentOf" : ["dicomTransferCapability","dcmArchiveNetworkAE","dcmNetworkAE"],
        "required":{
          "dicomAETitle": "AE Title",
          "dicomNetworkConnectionReference": "Network Connection Reference",
          "dicomAssociationInitiator": "Association Initiator",
          "dicomAssociationAcceptor": "Association Acceptor"
        }
      },
      "dicomTransferCapability":{
        "title" : "Transfer Capability",
        "optionRef" : ["dicomNetworkAE","dicomTransferCapability"],
        "optionValue": "cn",
        "type": "array",
        "required":{
          "cn": "Transfare Capability name",
          "dicomSOPClass": "SOP Class",
          "dicomTransferRole": "Transfer Role",
          "dicomTransferSyntax": "Transfer Syntax"
        }
      },
      "dcmArchiveNetworkAE":{
        "title" : "Archive Network AE",
        "optionRef" : ["dicomNetworkAE","dcmArchiveNetworkAE"],
        "optionValue" : "dcmStorageID",
        "type": "object"
      },
      "dcmNetworkAE":{
        "title" : "dcm4che Network AE Attributes",
        "optionRef" : ["dicomNetworkAE","dcmNetworkAE"],
        "optionValue" : "dcmAcceptedCallingAETitle",
        "type": "object"
      },
      "hl7Application":{
        "title" : "HL7 Applications",
        "optionRef" : ["hl7Application"],
        "optionValue": "hl7ApplicationName",
        "type": "array",
        "parentOf" : ["dcmArchiveHL7Application"],
        "required":{
          "hl7ApplicationName": "HL7 Application name",
          "dicomNetworkConnectionReference": "Network Connection Reference"
        }
      
      },
      "dcmArchiveHL7Application":{
        "title" : "Archive HL7 Application",
        "optionRef" : ["hl7Application","dcmArchiveHL7Application"],
        "optionValue": "hl7ApplicationName",
        "type": "object"
      
      },
      "dcmImageWriter":{
        "title" : "Image Writers",
        "optionRef" : ["dcmImageWriter"],
        "optionValue": "dicomTransferSyntax",
        "type": "array",
        "required":{
          "dicomTransferSyntax": "Transfer Syntax",
          "dcmIIOFormatName": "Image IO Writer Format Name"
        }
      
      },
      "dcmImageReader":{
        "title" : "Image Readers",
        "optionRef" : ["dcmImageReader"],
        "optionValue": "dicomTransferSyntax",
        "type": "array",
        "required":{
          "dicomTransferSyntax": "Transfer Syntax",
          "dcmIIOFormatName": "Image IO Reader Format Name"
        }
      
      },
      "dcmAuditLogger":{
        "title" : "Audit Logger",
        "optionRef" : ["dcmAuditLogger"],
        "optionValue": "dicomNetworkConnectionReference",
        "type": "object",
        "parentOf": [
          "dcmAuditSuppressCriteria"
        ]
      },
      "dcmAuditSuppressCriteria":{
        "title" : "Audit Suppress Criteria",
        "optionRef" : ["dcmAuditLogger","dcmAuditSuppressCriteria"],
        "optionValue": "cn",
        "type": "array"
      },
      "dcmAuditRecordRepository":{
        "title" : "Audit Record Repository",
        "optionRef" : ["dcmAuditRecordRepository"],
        "optionValue": "dicomNetworkConnectionReference",
        "type": "object"
      
      },
      "dcmArchiveDevice":{
        "title" : "Archive Device",
        "optionRef" : ["dcmArchiveDevice"],
        "optionValue": "dcmFuzzyAlgorithmClass",
        "type": "object",
        "parentOf": [
          "dcmAttributeFilter",
          "dcmStorage",
          "dcmQueryRetrieveView",
          "dcmQueue",
          "dcmExporter",
          "dcmExportRule",
          "dcmArchiveCompressionRule",
          "dcmArchiveAttributeCoercion",
          "dcmRejectionNote"
        ]
      
      },
      "dcmAttributeFilter":{
        "title" : "Attribute List",
        "optionRef" : ["dcmArchiveDevice","dcmAttributeFilter"],
        "optionValue": "dcmEntity",
        "type": "array",
        "required":{
          "dcmEntity": "Attribute Entity",
          "dcmTag": "Attribute Tag"
        }
      
      },
      "dcmStorage":{
        "title" : "Storage Descriptor",
        "optionRef" : ["dcmArchiveDevice","dcmStorage"],
        "optionValue": "dcmStorageID",
        "type": "array",
        "required":{
          "dcmStorageID": "Storage ID",
          "dcmURI": "Storage URI"
        }
      
      },
      "dcmQueryRetrieveView":{
        "title" : "Query Retrieve View",
        "optionRef" : ["dcmArchiveDevice","dcmQueryRetrieveView"],
        "optionValue": "dcmQueryRetrieveViewID",
        "type": "array",
        "required":{
          "dcmQueryRetrieveViewID": "Query/Retrieve View ID"
        }
      
      },
      "dcmQueue":{
        "title" : "Managed JMS Queue",
        "optionRef" : ["dcmArchiveDevice","dcmQueue"],
        "optionValue": "dcmQueueName",
        "type": "array",
        "required":{
          "dcmQueueName": "Queue Name",
          "dcmJndiName": "JNDI Name"
        }
      },
      "dcmExporter":{
        "title" : "Exporter Descriptor",
        "optionRef" : ["dcmArchiveDevice","dcmExporter"],
        "optionValue": "dcmExporterID",
        "type": "array",
        "required":{
          "dcmExporterID": "Exporter ID",
          "dcmURI": "URI",
          "dcmQueueName": "dcmQueueName"
        }
      
      },
      "dcmExportRule":{
        "title" : "Export Rule",
        "optionRef" : ["dcmArchiveDevice","dcmExportRule"],
        "optionValue": "cn",
        "type": "array",
        "required":{
          "cn": "Name",
          "dcmEntity": "Attribute Entity",
          "dcmExporterID": "Exporter ID"
        }
      
      },
      "dcmArchiveCompressionRule":{
        "title" : "Archive Compression rule",
        "optionRef" : ["dcmArchiveDevice","dcmArchiveCompressionRule"],
        "optionValue": "cn",
        "type": "array",
        "required":{
          "cn": "Name",
          "dicomTransferSyntax": "DICOM Transfer Syntax UID"
        }
      
      },
      "dcmArchiveAttributeCoercion":{
        "title" : "Archive Attribute Coercion",
        "optionRef" : ["dcmArchiveDevice","dcmArchiveAttributeCoercion"],
        "optionValue": "cn",
        "type": "array",
        "required":{
          "cn": "Name",
          "dcmDIMSE": "DIMSE",
          "dicomTransferRole": "DICOM Transfer Role",
          "dcmURI": "dcmURI"
        }
      },
      "dcmRejectionNote":{
        "title" : "Rejection Note",
        "optionRef" : ["dcmArchiveDevice", "dcmRejectionNote"],
        "optionValue": "dcmRejectionNoteLabel",
        "type": "array",
        "required":{
          "dcmRejectionNoteLabel": "Rejection Note Label",
          "dcmRejectionNoteCode": "Rejection Note Code"
        }
      
      }
    }
);
myApp.constant("$schema",
{
  "title": "Device",
  "description": "DICOM Device related information",
  "type": "object",
  "required": ["dicomDeviceName", "dicomInstalled"],
  "groups": {
    "Manufactorer Information": [
      "dicomManufacturer",
      "dicomManufacturerModelName",
      "dicomSoftwareVersion",
      "dicomDeviceSerialNumber"
    ],
    "Organisation": [
      "dicomStationName",
      "dicomInstitutionName",
      "dicomInstitutionCode",
      "dicomInstitutionAddress",
      "dicomInstitutionDepartmentName"
    ],
    "Issuers": [
      "dicomIssuerOfPatientID",
      "dicomIssuerOfAccessionNumber",
      "dicomOrderPlacerIdentifier",
      "dicomOrderFillerIdentifier",
      "dicomIssuerOfAdmissionID",
      "dicomIssuerOfServiceEpisodeID",
      "dicomIssuerOfContainerIdentifier",
      "dicomIssuerOfSpecimenIdentifier"
    ],
    "Certificates": [
      "dicomAuthorizedNodeCertificateReference",
      "dicomThisNodeCertificateReference"
    ]
  },
  "properties": {
    "dicomDeviceName": {
      "title": "Device Name",
      "description": "A unique name for this device",
      "type": "string"
    },
    "dicomDescription": {
      "title": "Device Description",
      "description": "Unconstrained text description of the device",
      "type": "string"
    },
    "dicomManufacturer": {
      "title": "Manufacturer",
      "description": "Should be the same as the value of Manufacturer (0008,0070) in SOP instances created by this device",
      "type": "string"
    },
    "dicomManufacturerModelName": {
      "title": "Manufacturer Model Name",
      "description": "Should be the same as the value of Manufacturer Model Name (0008,1090) in SOP instances created by this device",
      "type": "string"
    },
    "dicomSoftwareVersion": {
      "title": "Software Version",
      "description": "Should be the same as the values of Software Versions (0018,1020) in SOP instances created by this device",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomStationName": {
      "title": "Station Name",
      "description": "Should be the same as the value of Station Name (0008,1010) in SOP instances created by this device",
      "type": "string"
    },
    "dicomDeviceSerialNumber": {
      "title": "Device Serial Number",
      "description": "Should be the same as the value of Device Serial Number (0018,1000) in SOP instances created by this device",
      "type": "string"
    },
    "dicomPrimaryDeviceType": {
      "title": "Primary Device Type",
      "description": "Represents the kind of device and is most applicable for acquisition modalities",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomInstitutionName": {
      "title": "Institution Name",
      "description": "Should be the same as the value of Institution Name (0008,0080) in SOP Instances created by this device",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomInstitutionCode": {
      "title": "Institution Code",
      "description": "Institution Code(s) in format (CV, CSD, \"CM\")",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomInstitutionAddress": {
      "title": "Institution Address",
      "description": "Should be the same as the value of Institution Address (0008,0081) attribute in SOP Instances created by this device",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomInstitutionDepartmentName": {
      "title": "Institution Department Name",
      "description": "Should be the same as the value of Institutional Department Name (0008,1040) in SOP Instances created by this device",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomIssuerOfPatientID": {
      "title": "Issuer of Patient ID",
      "description": "Default value for the Issuer of Patient ID (0010,0021), and optionally also default values for the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Issuer of Patient ID Qualifiers Sequence (0010,0024) for SOP Instances created or queried by this device. Format: <Issuer of Patient ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomIssuerOfAccessionNumber": {
      "title": "Issuer of Accession Number",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Issuer of Accession Number Sequence (0008,0051) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomOrderPlacerIdentifier": {
      "title": "Order Placer Identifier",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Order Placer Identifier Sequence (0040,0026) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomOrderFillerIdentifier": {
      "title": "Order Filler Identifier",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Order Filler Identifier Sequence (0040,0027) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomIssuerOfAdmissionID": {
      "title": "Issuer of Admission ID",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Issuer of Admission ID Sequence (0038,0014) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomIssuerOfServiceEpisodeID": {
      "title": "Issuer of Service Episode ID",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Issuer of Service Episode ID Sequence (0038,0064) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomIssuerOfContainerIdentifier": {
      "title": "Issuer of Container Identifier",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Issuer of Container Identifier Sequence (0040,0513) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomIssuerOfSpecimenIdentifier": {
      "title": "Issuer of Specimen Identifier",
      "description": "Default values for the Local Namespace Entity ID (0040,0031), the Universal Entity ID (0040,0032) and the Universal Entity ID Type (0040,0033) of the Item of the Issuer of Specimen Identifier Sequence (0040,0562) for SOP Instances created or queried by this device. Format: <Local Namespace Entity ID>['&'<Universal Entity ID>'&'<Universal Entity ID Type>]",
      "type": "string"
    },
    "dicomAuthorizedNodeCertificateReference": {
      "title": "Authorized Node Certificate Reference",
      "description": "The DNs for the certificates of nodes that are authorized to connect to this device",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomThisNodeCertificateReference": {
      "title": "This Node Certificate Reference",
      "description": "The DNs of the public certificate(s) for this node",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "dicomInstalled": {
      "title": "installed",
      "description": "Boolean to indicate whether this device is presently installed on the network",
      "type": "boolean",
      "default": false
    },
    "dicomNetworkConnection": {
      "title": "Network Connection",
      "description": "Describes one TCP/UDP port on one network device.",
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "dicomHostname"
        ],
        "properties": {
          "cn": {
            "title": "Name",
            "description": "Arbitrary/Meaningful name for the Network Connection object",
            "type": "string"
          },
          "dicomHostname": {
            "title": "Hostname",
            "description": "DNS name for this particular connection",
            "type": "string"
          },
          "dicomPort": {
            "title": "Port",
            "description": "TCP/UDP port that a service is listening on. May be missing if this network connection is only used for outbound connections",
            "type": "integer",
            "minimum": 0,
            "exclusiveMinimum": true
          },
          "dicomTLSCipherSuite": {
            "title": "TLS CipherSuites",
            "description": "The TLS CipherSuites that are supported on this particular connection. If not present TLS is disabled",
            "type": "array",
            "items": {
              "enum": [
                "SSL_RSA_WITH_NULL_SHA",
                "TLS_RSA_WITH_AES_128_CBC_SHA",
                "SSL_RSA_WITH_3DES_EDE_CBC_SHA"
              ]
            }
          },
          "dicomInstalled": {
            "title": "installed",
            "description": "True if the Network Connection is installed on the network. If not present, information about the installed status of the Network Connection is inherited from the device",
            "type": "boolean"
          }
        }
      }
    },
    "dicomNetworkAE": {
      "title": "Network AE",
      "description": "Application entity that provides services on a network",
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "dicomAETitle",
          "dicomNetworkConnectionReference",
          "dicomAssociationInitiator",
          "dicomAssociationAcceptor"
        ],
        "properties": {
          "dicomAETitle": {
            "title": "AE Title",
            "description": "Unique AE title for this Network AE",
            "type": "string"
          },
          "dicomNetworkConnectionReference": {
            "title": "Network Connection Reference",
            "description": "JSON Pointers to the Network Connection objects for this AE",
            "type": "array",
            "items": { "type": "string" }
          },
          "dicomAssociationInitiator": {
            "title": "Association Initiator",
            "description": "True if the Network AE can initiate associations, false otherwise",
            "type": "boolean"
          },
          "dicomAssociationAcceptor": {
            "title": "Association Acceptor",
            "description": "True if the Network AE can accept associations, false otherwise",
            "type": "boolean"
          },
          "dicomDescription": {
            "title": "AE Description",
            "description": "Unconstrained text description of the application entity",
            "type": "string"
          },
          "dicomApplicationCluster": {
            "title": "Application Cluster",
            "description": "Locally defined names for a subset of related applications",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dicomPreferredCalledAETitle": {
            "title": "Preferred Called AE Title",
            "description": "AE Title(s) that are preferred for initiating associations",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dicomPreferredCallingAETitle": {
            "title": "Preferred Calling AE Title",
            "description": "AE Title(s) that are preferred for accepting associations",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dicomSupportedCharacterSet": {
            "title": "Supported Character Set",
            "description": "Character Set(s) supported by the Network AE for data sets it receives",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dicomInstalled": {
            "title": "installed",
            "description": "True if the AE is installed on network. If not present, information about the installed status of the AE is inherited from the device",
            "type": "boolean"
          },
          "dicomTransferCapability": {
            "title": "Transfer Capability",
            "description": "Each transfer capability specifies the SOP class that the Network AE can support, the mode that it can utilize (SCP or SCU), and the Transfer Syntax(es) that it can utilize",
            "type": "array",
            "items": {
              "type": "object",
              "required": [
                "dicomSOPClass",
                "dicomTransferRole",
                "dicomTransferSyntax"
              ],
              "properties": {
                "cn": {
                  "title": "Name",
                  "description": "Arbitrary/Meaningful name for the Transfer Capability object",
                  "type": "string"
                },
                "dicomSOPClass": {
                  "title": "SOP Class",
                  "description": "SOP Class UID",
                  "type": "string"
                },
                "dicomTransferRole": {
                  "title": "Transfer Role",
                  "description": "Either SCU or SCP",
                  "type": "string",
                  "enum": [ "SCP",  "SCU" ]
                },
                "dicomTransferSyntax": {
                  "title": "Transfer Syntax",
                  "description": "Transfer syntax(es) that may be requested as an SCU or that are offered as an SCP",
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

/*   
To show dropdown list put this on schema
       "dicomNetworkConnectionReference": {
            "title": "Network Connection Reference",
            "description": "JSON Pointers to the Network Connection objects for this AE",
            "type": "string",
            "enum":["/dicomNetworkConnection/0","/dicomNetworkConnection/0"],  
            "options": {
                "enum_titles": ["dicom0","dicom1"]
             }
          },



//OR
          "dicomNetworkConnectionReference": {
            "title": "Network Connection Reference",
            "description": "JSON Pointers to the Network Connection objects for this AE",
            "type": "array",
            "items": { 
              "type": "string",
              "enum":["/dicomNetworkConnection/0","/dicomNetworkConnection/0"],  
              "options": {
                "enum_titles": ["dicom0","dicom1"]
              }
            }
          */