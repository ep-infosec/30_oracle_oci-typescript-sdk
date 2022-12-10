/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * Properties to configure reading from an Oracle Database.
 */
export interface BiccReadAttributes extends model.AbstractReadAttribute {
  /**
   * The fetch size for reading. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "fetchSize"?: number;
  /**
   * Extraction Strategy - FULL|INCREMENTAL
   */
  "extractStrategy"?: BiccReadAttributes.ExtractStrategy;
  "externalStorage"?: model.ExternalStorage;
  /**
   * Date from where extract should start.
   */
  "initialExtractDate"?: Date;
  /**
   * Date last extracted
   */
  "lastExtractDate"?: Date;

  "modelType": string;
}

export namespace BiccReadAttributes {
  export enum ExtractStrategy {
    Full = "FULL",
    Incremental = "INCREMENTAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BiccReadAttributes, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractReadAttribute.getJsonObj(obj) as BiccReadAttributes)),
      ...{
        "externalStorage": obj.externalStorage
          ? model.ExternalStorage.getJsonObj(obj.externalStorage)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "BICC_READ_ATTRIBUTE";
  export function getDeserializedJsonObj(
    obj: BiccReadAttributes,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractReadAttribute.getDeserializedJsonObj(obj) as BiccReadAttributes)),
      ...{
        "externalStorage": obj.externalStorage
          ? model.ExternalStorage.getDeserializedJsonObj(obj.externalStorage)
          : undefined
      }
    };

    return jsonObj;
  }
}
