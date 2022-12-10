/**
 * Oracle Cloud AI Services API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * An object to hold value information for each anomaly point
 */
export interface Anomaly {
  /**
   * Name of a signal where current anomaly point belongs to
   */
  "signalName": string;
  /**
   * The actual value for the anomaly point at given signal and timestamp/row Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "actualValue": number;
  /**
   * The estimated value for the anomaly point at given signal and timestamp/row Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedValue": number;
  /**
   * The value imputed by one of IDP step for missing values in origin data Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "imputedValue"?: number;
  /**
   * A significant score ranged from 0 to 1 to each anomaly point Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "anomalyScore": number;
}

export namespace Anomaly {
  export function getJsonObj(obj: Anomaly): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Anomaly): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}