/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Status of the migration plan.
 */
export interface MigrationPlanStats {
  "totalEstimatedCost"?: model.CostEstimation;
  /**
   * The time when the migration plan was calculated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The total count of VMs in migration Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vmCount"?: number;
}

export namespace MigrationPlanStats {
  export function getJsonObj(obj: MigrationPlanStats): object {
    const jsonObj = {
      ...obj,
      ...{
        "totalEstimatedCost": obj.totalEstimatedCost
          ? model.CostEstimation.getJsonObj(obj.totalEstimatedCost)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MigrationPlanStats): object {
    const jsonObj = {
      ...obj,
      ...{
        "totalEstimatedCost": obj.totalEstimatedCost
          ? model.CostEstimation.getDeserializedJsonObj(obj.totalEstimatedCost)
          : undefined
      }
    };

    return jsonObj;
  }
}
