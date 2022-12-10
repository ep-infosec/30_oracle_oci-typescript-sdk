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
 * LogAnalyticsLookupFields
 */
export interface LogAnalyticsLookupFields {
  /**
   * The common field name.
   */
  "commonFieldName"?: string;
  /**
   * The default match value.
   */
  "defaultMatchValue"?: string;
  /**
   * The display name.
   */
  "displayName"?: string;
  /**
   * A flag indicating whether or not the field is a common field.
   *
   */
  "isCommonField"?: boolean;
  /**
   * The match operator.
   */
  "matchOperator"?: string;
  /**
   * The field name.
   */
  "name"?: string;
  /**
   * The position. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "position"?: number;
}

export namespace LogAnalyticsLookupFields {
  export function getJsonObj(obj: LogAnalyticsLookupFields): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsLookupFields): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
