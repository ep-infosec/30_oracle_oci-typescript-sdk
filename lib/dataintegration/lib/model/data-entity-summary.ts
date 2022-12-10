/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The data entity summary object.
 */
export interface DataEntitySummary {
  "metadata"?: model.ObjectMetadata;

  "modelType": string;
}

export namespace DataEntitySummary {
  export function getJsonObj(obj: DataEntitySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "FILE_ENTITY":
          return model.DataEntitySummaryFromFile.getJsonObj(
            <model.DataEntitySummaryFromFile>(<object>jsonObj),
            true
          );
        case "TABLE_ENTITY":
          return model.DataEntitySummaryFromTable.getJsonObj(
            <model.DataEntitySummaryFromTable>(<object>jsonObj),
            true
          );
        case "DATA_STORE_ENTITY":
          return model.DataEntitySummaryFromDataStore.getJsonObj(
            <model.DataEntitySummaryFromDataStore>(<object>jsonObj),
            true
          );
        case "SQL_ENTITY":
          return model.DataEntitySummaryFromSql.getJsonObj(
            <model.DataEntitySummaryFromSql>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.DataEntitySummaryFromView.getJsonObj(
            <model.DataEntitySummaryFromView>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataEntitySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "FILE_ENTITY":
          return model.DataEntitySummaryFromFile.getDeserializedJsonObj(
            <model.DataEntitySummaryFromFile>(<object>jsonObj),
            true
          );
        case "TABLE_ENTITY":
          return model.DataEntitySummaryFromTable.getDeserializedJsonObj(
            <model.DataEntitySummaryFromTable>(<object>jsonObj),
            true
          );
        case "DATA_STORE_ENTITY":
          return model.DataEntitySummaryFromDataStore.getDeserializedJsonObj(
            <model.DataEntitySummaryFromDataStore>(<object>jsonObj),
            true
          );
        case "SQL_ENTITY":
          return model.DataEntitySummaryFromSql.getDeserializedJsonObj(
            <model.DataEntitySummaryFromSql>(<object>jsonObj),
            true
          );
        case "VIEW_ENTITY":
          return model.DataEntitySummaryFromView.getDeserializedJsonObj(
            <model.DataEntitySummaryFromView>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}