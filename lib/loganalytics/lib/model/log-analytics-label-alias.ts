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
 * Label alias mapping view
 */
export interface LogAnalyticsLabelAlias {
  /**
   * The alias.
   */
  "alias"?: string;
  /**
   * The alias display name.
   */
  "aliasDisplayName"?: string;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The label display name.
   */
  "displayName"?: string;
  /**
   * The label name.
   */
  "name"?: string;
  /**
   * The label priority. Default value is NONE.
   */
  "priority"?: LogAnalyticsLabelAlias.Priority;
}

export namespace LogAnalyticsLabelAlias {
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

  export function getJsonObj(obj: LogAnalyticsLabelAlias): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsLabelAlias): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}