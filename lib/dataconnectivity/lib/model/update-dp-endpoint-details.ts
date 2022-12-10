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
 * Properties used in the update operations of the endpoint.
 */
export interface UpdateDpEndpointDetails {
  /**
   * Generated key that can be used in API calls to identify the endpoint. In scenarios where reference to the endpoint is required, a value can be passed in create.
   */
  "key": string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on the permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * User-defined description of the endpoint.
   */
  "description"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion": number;
  /**
   * Value can only contain upper case letters, underscore, and numbers. It should begin with an upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  /**
   * The list of data assets that belong to the endpoint.
   */
  "dataAssets"?: Array<model.DataAsset>;

  "modelType": string;
}

export namespace UpdateDpEndpointDetails {
  export function getJsonObj(obj: UpdateDpEndpointDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "dataAssets": obj.dataAssets
          ? obj.dataAssets.map(item => {
              return model.DataAsset.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PUBLIC_END_POINT":
          return model.UpdateDpEndpointFromPublic.getJsonObj(
            <model.UpdateDpEndpointFromPublic>(<object>jsonObj),
            true
          );
        case "PRIVATE_END_POINT":
          return model.UpdateDpEndpointFromPrivate.getJsonObj(
            <model.UpdateDpEndpointFromPrivate>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDpEndpointDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "dataAssets": obj.dataAssets
          ? obj.dataAssets.map(item => {
              return model.DataAsset.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PUBLIC_END_POINT":
          return model.UpdateDpEndpointFromPublic.getDeserializedJsonObj(
            <model.UpdateDpEndpointFromPublic>(<object>jsonObj),
            true
          );
        case "PRIVATE_END_POINT":
          return model.UpdateDpEndpointFromPrivate.getDeserializedJsonObj(
            <model.UpdateDpEndpointFromPrivate>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}