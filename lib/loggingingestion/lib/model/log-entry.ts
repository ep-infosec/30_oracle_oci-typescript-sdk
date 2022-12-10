/**
 * Logging Ingestion API
 * Use the Logging Ingestion API to ingest your application logs.
 * OpenAPI spec version: 20200831
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
 * Contains the log content with the associated timestamp and ID. Each
 * entry should be less than 1 MB size.
 *
 */
export interface LogEntry {
  /**
   * The log entry content.
   */
  "data": string;
  /**
   * UUID uniquely representing this logEntry. This is not an OCID related
   * to any oracle resource.
   *
   */
  "id": string;
  /**
   * Optional. The timestamp associated with the log entry. An RFC3339-formatted date-time string with milliseconds precision.
   * If unspecified, defaults to PutLogsDetails.defaultlogentrytime.
   *
   */
  "time"?: Date;
}

export namespace LogEntry {
  export function getJsonObj(obj: LogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}