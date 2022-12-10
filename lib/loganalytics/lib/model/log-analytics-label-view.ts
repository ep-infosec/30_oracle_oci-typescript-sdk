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
 * LogAnalyticsLabelView
 */
export interface LogAnalyticsLabelView {
  /**
   * An arrya of label aliases.
   */
  "aliases"?: Array<model.LogAnalyticsLabelAlias>;
  /**
   * The label alert rule usage count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "countUsageInAlertRule"?: number;
  /**
   * The label source usage count. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "countUsageInSource"?: number;
  /**
   * The label unique identifier.
   */
  "id"?: any;
  /**
   * The label suggestion type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "suggestType"?: number;
  /**
   * The label description.
   */
  "description"?: string;
  /**
   * The label display name.
   */
  "displayName"?: string;
  /**
   * The label edit version. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "editVersion"?: number;
  /**
   * The label impact.
   */
  "impact"?: string;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The label name.
   */
  "name"?: string;
  /**
   * The label priority.  Default value is NONE.
   */
  "priority"?: LogAnalyticsLabelView.Priority;
  /**
   * The label recommendation.
   */
  "recommendation"?: string;
  /**
   * The label type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "type"?: number;
  /**
   * A flag indicating whether or not the label has been deleted.
   *
   */
  "isUserDeleted"?: boolean;
}

export namespace LogAnalyticsLabelView {
  export enum Priority {
    None = "NONE",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsLabelView): object {
    const jsonObj = {
      ...obj,
      ...{
        "aliases": obj.aliases
          ? obj.aliases.map(item => {
              return model.LogAnalyticsLabelAlias.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsLabelView): object {
    const jsonObj = {
      ...obj,
      ...{
        "aliases": obj.aliases
          ? obj.aliases.map(item => {
              return model.LogAnalyticsLabelAlias.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}