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
 * A category into which resources can be placed.
 */
export interface LogAnalyticsCategory {
  /**
   * The unique name that identifies the category.
   */
  "name"?: string;
  /**
   * The category description.
   */
  "description"?: string;
  /**
   * The category display name.
   */
  "displayName"?: string;
  /**
   * The category type. Values include \"PRODUCT\", \"TIER\", \"VENDOR\" and \"GENERIC\".
   */
  "type"?: string;
  /**
   * The system flag. A value of false denotes a user-created
   * category. A value of true denotes an Oracle-defined category.
   *
   */
  "isSystem"?: boolean;
}

export namespace LogAnalyticsCategory {
  export function getJsonObj(obj: LogAnalyticsCategory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsCategory): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}