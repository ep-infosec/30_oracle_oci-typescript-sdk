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
 * The call attributes impl.
 */
export interface BipCallAttribute extends model.AbstractCallAttribute {
  "stagingBucket"?: model.Schema;
  /**
   * The parameter to set offset.
   */
  "offsetParameter"?: string;
  /**
   * The parameter to fetch the next set of rows.
   */
  "fetchNextRowsParameter"?: string;
  "stagingDataAsset"?: model.DataAsset;
  "stagingConnection"?: model.Connection;
  /**
   * The prefix for the staging DataAsset.
   */
  "stagingPrefix"?: string;

  "modelType": string;
}

export namespace BipCallAttribute {
  export function getJsonObj(obj: BipCallAttribute, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCallAttribute.getJsonObj(obj) as BipCallAttribute)),
      ...{
        "stagingBucket": obj.stagingBucket ? model.Schema.getJsonObj(obj.stagingBucket) : undefined,

        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getJsonObj(obj.stagingConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "BIPCALLATTRIBUTE";
  export function getDeserializedJsonObj(obj: BipCallAttribute, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCallAttribute.getDeserializedJsonObj(obj) as BipCallAttribute)),
      ...{
        "stagingBucket": obj.stagingBucket
          ? model.Schema.getDeserializedJsonObj(obj.stagingBucket)
          : undefined,

        "stagingDataAsset": obj.stagingDataAsset
          ? model.DataAsset.getDeserializedJsonObj(obj.stagingDataAsset)
          : undefined,
        "stagingConnection": obj.stagingConnection
          ? model.Connection.getDeserializedJsonObj(obj.stagingConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
