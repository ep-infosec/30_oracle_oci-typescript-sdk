/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * A summary of the usage plan.
 */
export interface UsagePlanSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a usage plan
   * resource.
   *
   */
  "id": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: `My new resource`
* 
    */
  "displayName"?: string;
  /**
   * A collection of entitlements applied by the usage plan.
   *
   */
  "entitlements": Array<model.EntitlementSummary>;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the
   * resource is created.
   *
   */
  "compartmentId": string;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time this resource was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated": Date;
  /**
   * The current state of the usage plan.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair
* with no predefined name, type, or namespace. For more information, see
* [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see
* [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UsagePlanSummary {
  export function getJsonObj(obj: UsagePlanSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "entitlements": obj.entitlements
          ? obj.entitlements.map(item => {
              return model.EntitlementSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UsagePlanSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "entitlements": obj.entitlements
          ? obj.entitlements.map(item => {
              return model.EntitlementSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}