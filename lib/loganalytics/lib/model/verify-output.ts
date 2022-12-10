/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Verify acceleration output.
 */
export interface VerifyOutput {
  /**
   * Acceleration task identifier.
   */
  "scheduledTaskId": string;
  /**
   * Response time in ms. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "responseTimeInMs": number;
  /**
   * Total match count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalMatchedCount": number;
  /**
   * Total count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCount": number;
  /**
   * Acceleration result columns, included if requested (shouldIncludeResults).
   */
  "columns"?: Array<model.ResultColumn>;
  /**
   * Acceleration result values, included if requested (shouldIncludeResults).
   */
  "results"?: Array<{ [key: string]: any }>;
}

export namespace VerifyOutput {
  export function getJsonObj(obj: VerifyOutput): object {
    const jsonObj = {
      ...obj,
      ...{
        "columns": obj.columns
          ? obj.columns.map(item => {
              return model.ResultColumn.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VerifyOutput): object {
    const jsonObj = {
      ...obj,
      ...{
        "columns": obj.columns
          ? obj.columns.map(item => {
              return model.ResultColumn.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
