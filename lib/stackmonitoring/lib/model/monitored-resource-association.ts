/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
 *
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
 * Association between two monitored resources.
 */
export interface MonitoredResourceAssociation {
  /**
   * Association Type
   */
  "associationType": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * Tenancy Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "tenantId": string;
  /**
   * Source Monitored Resource Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "sourceResourceId": string;
  /**
   * Destination Monitored Resource Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "destinationResourceId": string;
  "sourceResourceDetails"?: model.AssociationResourceDetails;
  "destinationResourceDetails"?: model.AssociationResourceDetails;
  /**
   * The time when the association was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MonitoredResourceAssociation {
  export function getJsonObj(obj: MonitoredResourceAssociation): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceResourceDetails": obj.sourceResourceDetails
          ? model.AssociationResourceDetails.getJsonObj(obj.sourceResourceDetails)
          : undefined,
        "destinationResourceDetails": obj.destinationResourceDetails
          ? model.AssociationResourceDetails.getJsonObj(obj.destinationResourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceAssociation): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceResourceDetails": obj.sourceResourceDetails
          ? model.AssociationResourceDetails.getDeserializedJsonObj(obj.sourceResourceDetails)
          : undefined,
        "destinationResourceDetails": obj.destinationResourceDetails
          ? model.AssociationResourceDetails.getDeserializedJsonObj(obj.destinationResourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
