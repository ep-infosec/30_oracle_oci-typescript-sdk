/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
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
 * Password policy, currently set for the given compartment.
 *
 */
export interface PasswordPolicy {
  /**
   * Minimum password length required. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minimumPasswordLength"?: number;
  /**
   * At least one uppercase character required.
   */
  "isUppercaseCharactersRequired"?: boolean;
  /**
   * At least one lower case character required.
   */
  "isLowercaseCharactersRequired"?: boolean;
  /**
   * At least one numeric character required.
   */
  "isNumericCharactersRequired"?: boolean;
  /**
   * At least one special character required.
   */
  "isSpecialCharactersRequired"?: boolean;
  /**
   * User name is allowed to be part of the password.
   */
  "isUsernameContainmentAllowed"?: boolean;
}

export namespace PasswordPolicy {
  export function getJsonObj(obj: PasswordPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PasswordPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
