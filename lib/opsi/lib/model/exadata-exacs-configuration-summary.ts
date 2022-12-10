/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Configuration summary of a Exacs exadata machine.
 */
export interface ExadataExacsConfigurationSummary extends model.ExadataConfigurationSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the OPSI private endpoint
   */
  "opsiPrivateEndpointId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "parentId": string;

  "entitySource": string;
}

export namespace ExadataExacsConfigurationSummary {
  export function getJsonObj(
    obj: ExadataExacsConfigurationSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataConfigurationSummary.getJsonObj(obj) as ExadataExacsConfigurationSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "PE_COMANAGED_EXADATA";
  export function getDeserializedJsonObj(
    obj: ExadataExacsConfigurationSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataConfigurationSummary.getDeserializedJsonObj(
            obj
          ) as ExadataExacsConfigurationSummary)),
      ...{}
    };

    return jsonObj;
  }
}
