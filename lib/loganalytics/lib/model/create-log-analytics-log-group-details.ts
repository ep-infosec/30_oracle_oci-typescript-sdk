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
 * Information about a new log group.
 *
 */
export interface CreateLogAnalyticsLogGroupDetails {
  /**
   * A user-friendly name that is changeable and that does not have to be unique.
   * Format: a leading alphanumeric, followed by zero or more
   * alphanumerics, underscores, spaces, backslashes, or hyphens in any order).
   * No trailing spaces allowed.
   *
   */
  "displayName": string;
  /**
   * Description for this resource.
   *
   */
  "description"?: string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateLogAnalyticsLogGroupDetails {
  export function getJsonObj(obj: CreateLogAnalyticsLogGroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateLogAnalyticsLogGroupDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}