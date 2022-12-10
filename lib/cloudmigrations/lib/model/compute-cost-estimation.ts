/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Cost estimation for compute
 */
export interface ComputeCostEstimation {
  /**
   * OCPU per hour Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuPerHour": number;
  /**
   * OCPU per hour by subscription Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuPerHourBySubscription"?: number;
  /**
   * Gigabyte per hour Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryGbPerHour": number;
  /**
   * Gigabyte per hour by subscription Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryGbPerHourBySubscription"?: number;
  /**
   * GPU per hour Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gpuPerHour": number;
  /**
   * GPU per hour by subscription Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gpuPerHourBySubscription"?: number;
  /**
   * Total per hour Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalPerHour": number;
  /**
   * Total usage per hour by subscription Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalPerHourBySubscription"?: number;
  /**
   * Total number of OCPUs Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuCount"?: number;
  /**
   * Total usage of memory Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryAmountGb"?: number;
  /**
   * Total number of GPU Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gpuCount"?: number;
}

export namespace ComputeCostEstimation {
  export function getJsonObj(obj: ComputeCostEstimation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeCostEstimation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
