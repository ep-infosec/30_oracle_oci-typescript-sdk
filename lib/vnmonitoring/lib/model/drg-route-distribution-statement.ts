/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * A single statement within a route distribution. All match criteria in a statement must be met
 * for the action to take place.
 *
 */
export interface DrgRouteDistributionStatement {
  /**
   * The action is applied only if all of the match criteria is met.
   * If there are no match criteria in a statement, any input is considered a match and the action is applied.
   *
   */
  "matchCriteria": Array<model.DrgRouteDistributionMatchCriteria>;
  /**
   * `ACCEPT` indicates the route should be imported or exported as-is.
   *
   */
  "action": DrgRouteDistributionStatement.Action;
  /**
   * This field specifies the priority of each statement in a route distribution.
   * Priorities must be unique within a particular route distribution.
   * The priority will be represented as a number between 0 and 65535 where a lower number
   * indicates a higher priority. When a route is processed, statements are applied in the order
   * defined by their priority. The first matching rule dictates the action that will be taken
   * on the route.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority": number;
  /**
   * The Oracle-assigned ID of the route distribution statement.
   *
   */
  "id": string;
}

export namespace DrgRouteDistributionStatement {
  export enum Action {
    Accept = "ACCEPT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DrgRouteDistributionStatement): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchCriteria": obj.matchCriteria
          ? obj.matchCriteria.map(item => {
              return model.DrgRouteDistributionMatchCriteria.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrgRouteDistributionStatement): object {
    const jsonObj = {
      ...obj,
      ...{
        "matchCriteria": obj.matchCriteria
          ? obj.matchCriteria.map(item => {
              return model.DrgRouteDistributionMatchCriteria.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
