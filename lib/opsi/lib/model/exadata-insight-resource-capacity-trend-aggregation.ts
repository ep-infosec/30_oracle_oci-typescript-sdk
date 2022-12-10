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
 * Resource Capacity samples
 */
export interface ExadataInsightResourceCapacityTrendAggregation {
  /**
   * The timestamp in which the current sampling period ends in RFC 3339 format.
   */
  "endTimestamp": Date;
  /**
   * The maximum allocated amount of the resource metric type  (CPU, STORAGE) for a set of databases.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "capacity": number;
  /**
   * The maximum host CPUs (cores x threads/core) on the underlying infrastructure. This only applies to CPU and does not not apply for Autonomous Databases.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalHostCapacity"?: number;
}

export namespace ExadataInsightResourceCapacityTrendAggregation {
  export function getJsonObj(obj: ExadataInsightResourceCapacityTrendAggregation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ExadataInsightResourceCapacityTrendAggregation
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
