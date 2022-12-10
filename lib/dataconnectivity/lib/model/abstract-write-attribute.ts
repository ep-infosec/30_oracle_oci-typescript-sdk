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
 * The abstract write attribute.
 */
export interface AbstractWriteAttribute {
  "modelType": string;
}

export namespace AbstractWriteAttribute {
  export function getJsonObj(obj: AbstractWriteAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_ATP_WRITE_ATTRIBUTE":
          return model.OracleAtpWriteAttributes.getJsonObj(
            <model.OracleAtpWriteAttributes>(<object>jsonObj),
            true
          );
        case "HDFS_WRITE_ATTRIBUTE":
          return model.HdfsWriteAttributes.getJsonObj(
            <model.HdfsWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLE_WRITE_ATTRIBUTE":
          return model.OracleWriteAttributes.getJsonObj(
            <model.OracleWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_WRITE_ATTRIBUTE":
          return model.OracleAdwcWriteAttributes.getJsonObj(
            <model.OracleAdwcWriteAttributes>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_WRITE_ATTRIBUTE":
          return model.ObjectStorageWriteAttributes.getJsonObj(
            <model.ObjectStorageWriteAttributes>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AbstractWriteAttribute): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "ORACLE_ATP_WRITE_ATTRIBUTE":
          return model.OracleAtpWriteAttributes.getDeserializedJsonObj(
            <model.OracleAtpWriteAttributes>(<object>jsonObj),
            true
          );
        case "HDFS_WRITE_ATTRIBUTE":
          return model.HdfsWriteAttributes.getDeserializedJsonObj(
            <model.HdfsWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLE_WRITE_ATTRIBUTE":
          return model.OracleWriteAttributes.getDeserializedJsonObj(
            <model.OracleWriteAttributes>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_WRITE_ATTRIBUTE":
          return model.OracleAdwcWriteAttributes.getDeserializedJsonObj(
            <model.OracleAdwcWriteAttributes>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_WRITE_ATTRIBUTE":
          return model.ObjectStorageWriteAttributes.getDeserializedJsonObj(
            <model.ObjectStorageWriteAttributes>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}