/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Log of a specific job
 */
export interface DiscoveryJobLogSummary {
  /**
   * The OCID of Discovery job
   */
  "id": string;
  /**
   * Type of log (INFO, WARNING, ERROR or SUCCESS)
   */
  "logType": DiscoveryJobLogSummary.LogType;
  /**
   * Log message
   */
  "logMessage": string;
  /**
   * Time the Job log was created
   */
  "timeCreated": Date;
}

export namespace DiscoveryJobLogSummary {
  export enum LogType {
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Success = "SUCCESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DiscoveryJobLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryJobLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}