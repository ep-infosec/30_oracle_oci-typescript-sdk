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
 * Time filters to be applied in the data object query.
 */
export interface DataObjectQueryTimeFilters {
  /**
   * Specify time period in ISO 8601 format with respect to current time.
   * Default is last 30 days represented by P30D.
   * If timePeriod is specified, then timeStart and timeEnd will be ignored.
   * Examples: P90D (last 90 days), P4W (last 4 weeks), P2M (last 2 months), P1Y (last 12 months).
   *
   */
  "timePeriod"?: string;
  /**
   * Start time in UTC in RFC3339 formatted datetime string. Example: 2021-10-30T00:00:00.000Z.
   * timeStart and timeEnd are used together. If timePeriod is specified, this parameter is ignored.
   *
   */
  "timeStart"?: Date;
  /**
   * End time in UTC in RFC3339 formatted datetime string. Example: 2021-10-30T00:00:00.000Z.
   * timeStart and timeEnd are used together. If timePeriod is specified, this parameter is ignored.
   * If timeEnd is not specified, current time is used as timeEnd.
   *
   */
  "timeEnd"?: Date;
}

export namespace DataObjectQueryTimeFilters {
  export function getJsonObj(obj: DataObjectQueryTimeFilters): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataObjectQueryTimeFilters): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
