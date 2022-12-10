/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details about the support ticket.
 */
export interface IncidentSummary {
  /**
   * Unique identifier of the incident.
   */
  "key": string;
  /**
   * The OCID of the tenancy.
   */
  "compartmentId"?: string;
  "contactList"?: model.ContactList;
  "tenancyInformation"?: model.TenancyInformation;
  "ticket"?: model.Ticket;
  "incidentType"?: model.IncidentResourceType;
  /**
   * The kind of support ticket, such as a technical support request.
   */
  "problemType": model.ProblemType;
}

export namespace IncidentSummary {
  export function getJsonObj(obj: IncidentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contactList": obj.contactList ? model.ContactList.getJsonObj(obj.contactList) : undefined,
        "tenancyInformation": obj.tenancyInformation
          ? model.TenancyInformation.getJsonObj(obj.tenancyInformation)
          : undefined,
        "ticket": obj.ticket ? model.Ticket.getJsonObj(obj.ticket) : undefined,
        "incidentType": obj.incidentType
          ? model.IncidentResourceType.getJsonObj(obj.incidentType)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IncidentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "contactList": obj.contactList
          ? model.ContactList.getDeserializedJsonObj(obj.contactList)
          : undefined,
        "tenancyInformation": obj.tenancyInformation
          ? model.TenancyInformation.getDeserializedJsonObj(obj.tenancyInformation)
          : undefined,
        "ticket": obj.ticket ? model.Ticket.getDeserializedJsonObj(obj.ticket) : undefined,
        "incidentType": obj.incidentType
          ? model.IncidentResourceType.getDeserializedJsonObj(obj.incidentType)
          : undefined
      }
    };

    return jsonObj;
  }
}