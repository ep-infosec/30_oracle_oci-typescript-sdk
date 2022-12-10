/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage FIELDSUMMARY command.
 *
 */
export interface FieldSummaryCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * Limit on number of distinct values to process for each field specified in the field summary command in the query string.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxValues"?: number;

  "name": string;
}

export namespace FieldSummaryCommandDescriptor {
  export function getJsonObj(
    obj: FieldSummaryCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as FieldSummaryCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
  export const name = "FIELD_SUMMARY";
  export function getDeserializedJsonObj(
    obj: FieldSummaryCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(
            obj
          ) as FieldSummaryCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
}