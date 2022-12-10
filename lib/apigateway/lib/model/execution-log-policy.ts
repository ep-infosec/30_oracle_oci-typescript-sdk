/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * Configures the logging policies for the execution logs of an API Deployment.
 *
 */
export interface ExecutionLogPolicy {
  /**
    * Enables pushing of execution logs to the legacy OCI Object Storage log archival bucket.
* <p>
Oracle recommends using the OCI Logging service to enable, retrieve, and query execution logs
* for an API Deployment. If there is an active log object for the API Deployment and its
* category is set to 'execution' in OCI Logging service, the logs will not be uploaded to the legacy
* OCI Object Storage log archival bucket.
* <p>
Please note that the functionality to push to the legacy OCI Object Storage log
* archival bucket has been deprecated and will be removed in the future.
* 
    */
  "isEnabled"?: boolean;
  /**
   * Specifies the log level used to control logging output of execution logs.
   * Enabling logging at a given level also enables logging at all higher levels.
   *
   */
  "logLevel"?: ExecutionLogPolicy.LogLevel;
}

export namespace ExecutionLogPolicy {
  export enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExecutionLogPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExecutionLogPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}