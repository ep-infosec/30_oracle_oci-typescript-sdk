/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The health check policy configuration.
 * For more information, see [Editing Health Check Policies](https://docs.cloud.oracle.com/Content/Balance/Tasks/editinghealthcheck.htm).
 *
 */
export interface HealthChecker {
  /**
    * The protocol the health check must use; either HTTP or TCP.
* <p>
Example: `HTTP`
* 
    */
  "protocol": string;
  /**
    * The path against which to run the health check.
* <p>
Example: `/healthcheck`
* 
    */
  "urlPath"?: string;
  /**
    * The backend server port against which to run the health check. If the port is not specified, the load balancer uses the
* port information from the `Backend` object.
* <p>
Example: `8080`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "port": number;
  /**
    * The status code a healthy backend server should return. If you configure the health check policy to use the HTTP protocol,
* you can use common HTTP status codes such as \"200\".
* <p>
Example: `200`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "returnCode": number;
  /**
    * The number of retries to attempt before a backend server is considered \"unhealthy\". This number also applies
* when recovering a server to the \"healthy\" state. Defaults to 3.
* <p>
Example: `3`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "retries"?: number;
  /**
    * The maximum time, in milliseconds, to wait for a reply to a health check. A health check is successful only if a reply
* returns within this timeout period. Defaults to 3000 (3 seconds).
* <p>
Example: `3000`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "timeoutInMillis"?: number;
  /**
    * The interval between health checks, in milliseconds. The default is 10000 (10 seconds).
* <p>
Example: `10000`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "intervalInMillis"?: number;
  /**
    * A regular expression for parsing the response body from the backend server.
* <p>
Example: `^((?!false).|\\s)*$`
* 
    */
  "responseBodyRegex": string;
}

export namespace HealthChecker {
  export function getJsonObj(obj: HealthChecker): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HealthChecker): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
