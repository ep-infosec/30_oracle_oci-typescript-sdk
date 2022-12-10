/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * Information about the public key and the algorithm used by the public key.
 */
export interface CertificatePublicKeyInfo {
  /**
   * The algorithm identifier and parameters for the public key.
   */
  "algorithm"?: string;
  /**
   * The private key exponent. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "exponent"?: number;
  /**
   * The number of bits in a key used by a cryptographic algorithm. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "keySize"?: number;
}

export namespace CertificatePublicKeyInfo {
  export function getJsonObj(obj: CertificatePublicKeyInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificatePublicKeyInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}