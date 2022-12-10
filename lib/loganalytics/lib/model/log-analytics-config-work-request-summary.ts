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
 * LogAnalyticsConfigWorkRequestSummary
 */
export interface LogAnalyticsConfigWorkRequestSummary {
  /**
   * The workrequest unique identifier.
   */
  "id"?: string;
  /**
   * The compartment unique identifier.
   */
  "compartmentId"?: string;
  /**
   * The operation type
   */
  "operationType"?: LogAnalyticsConfigWorkRequestSummary.OperationType;
  /**
   * The completion percentage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * The time at which the work request finished.
   */
  "timeFinished"?: Date;
  /**
   * The time at which the work request was accepted.
   */
  "timeAccepted"?: Date;
  /**
   * The lifecycle status.  Valid values are ACCEPTED, IN_PROGRESS, SUCCEEDED
   * or FAILED.
   *
   */
  "lifecycleState"?: LogAnalyticsConfigWorkRequestSummary.LifecycleState;
}

export namespace LogAnalyticsConfigWorkRequestSummary {
  export enum OperationType {
    CreateAssociations = "CREATE_ASSOCIATIONS",
    DeleteAssociations = "DELETE_ASSOCIATIONS",
    AppendLookupData = "APPEND_LOOKUP_DATA",
    UpdateLookupData = "UPDATE_LOOKUP_DATA",
    DeleteLookup = "DELETE_LOOKUP",
    EnableIngestTimeRule = "ENABLE_INGEST_TIME_RULE",
    DisableIngestTimeRule = "DISABLE_INGEST_TIME_RULE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsConfigWorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsConfigWorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
