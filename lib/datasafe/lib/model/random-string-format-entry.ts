/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The Random String masking format generates random and unique strings of length
 * within a range. The length range is defined by the startLength and endLength
 * attributes. The start length must be less than or equal to the end length. When
 * masking columns with uniqueness constraint, ensure that the length range is
 * sufficient enough to generate unique values. To learn more, check Random String
 * in the Data Safe documentation.
 *
 */
export interface RandomStringFormatEntry extends model.FormatEntry {
  /**
   * The minimum number of characters the generated strings should have. It can
   * be any integer greater than zero, but it must be less than or equal to the
   * end length.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startLength": number;
  /**
   * The maximum number of characters the generated strings should have. It can
   * be any integer greater than zero, but it must be greater than or equal to
   * the start length.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endLength": number;

  "type": string;
}

export namespace RandomStringFormatEntry {
  export function getJsonObj(obj: RandomStringFormatEntry, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.FormatEntry.getJsonObj(obj) as RandomStringFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "RANDOM_STRING";
  export function getDeserializedJsonObj(
    obj: RandomStringFormatEntry,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.FormatEntry.getDeserializedJsonObj(obj) as RandomStringFormatEntry)),
      ...{}
    };

    return jsonObj;
  }
}
