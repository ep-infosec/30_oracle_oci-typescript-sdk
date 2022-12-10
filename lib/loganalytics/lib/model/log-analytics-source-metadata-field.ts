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
 * LogAnalyticsSourceMetadataField
 */
export interface LogAnalyticsSourceMetadataField {
  /**
   * The field internal name.
   */
  "fieldName"?: string;
  /**
   * A flag inidcating whether or not the source metadata field is enabled.
   *
   */
  "isEnabled"?: boolean;
  /**
   * The system flag.  A value of false denotes a custom, or user
   * defined object.  A value of true denotes a built in object.
   *
   */
  "isSystem"?: boolean;
  /**
   * The key.
   */
  "key"?: string;
  /**
   * The source internal name.
   */
  "sourceName"?: string;
}

export namespace LogAnalyticsSourceMetadataField {
  export function getJsonObj(obj: LogAnalyticsSourceMetadataField): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSourceMetadataField): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}