/**
 *
 *
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loggingingestion/PutLogs.ts.html |here} to see how to use PutLogsRequest.
 */
export interface PutLogsRequest extends common.BaseRequest {
  /**
   * OCID of a log to work with.
   */
  "logId": string;
  /**
   * The logs to emit.
   */
  "putLogsDetails": model.PutLogsDetails;
  /**
   * Effective timestamp, for when the agent started processing the log
   * segment being sent. An RFC3339-formatted date-time string with milliseconds precision.
   *
   */
  "timestampOpcAgentProcessing"?: Date;
  /**
   * Version of the agent sending the request.
   */
  "opcAgentVersion"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}