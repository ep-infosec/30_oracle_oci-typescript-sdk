/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Unit details of a data object column.
 */
export interface DataObjectColumnUnit {
  /**
   * Display name of the column's unit.
   */
  "displayName"?: string;

  "unitCategory": string;
}

export namespace DataObjectColumnUnit {
  export function getJsonObj(obj: DataObjectColumnUnit): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "unitCategory" in obj && obj.unitCategory) {
      switch (obj.unitCategory) {
        case "CORE":
          return model.DataObjectCoreColumnUnit.getJsonObj(
            <model.DataObjectCoreColumnUnit>(<object>jsonObj),
            true
          );
        case "TIME":
          return model.DataObjectTimeColumnUnit.getJsonObj(
            <model.DataObjectTimeColumnUnit>(<object>jsonObj),
            true
          );
        case "OTHER_STANDARD":
          return model.DataObjectOtherStandardColumnUnit.getJsonObj(
            <model.DataObjectOtherStandardColumnUnit>(<object>jsonObj),
            true
          );
        case "CUSTOM":
          return model.DataObjectCustomColumnUnit.getJsonObj(
            <model.DataObjectCustomColumnUnit>(<object>jsonObj),
            true
          );
        case "TEMPERATURE":
          return model.DataObjectTemperatureColumnUnit.getJsonObj(
            <model.DataObjectTemperatureColumnUnit>(<object>jsonObj),
            true
          );
        case "POWER":
          return model.DataObjectPowerColumnUnit.getJsonObj(
            <model.DataObjectPowerColumnUnit>(<object>jsonObj),
            true
          );
        case "RATE":
          return model.DataObjectRateColumnUnit.getJsonObj(
            <model.DataObjectRateColumnUnit>(<object>jsonObj),
            true
          );
        case "FREQUENCY":
          return model.DataObjectFrequencyColumnUnit.getJsonObj(
            <model.DataObjectFrequencyColumnUnit>(<object>jsonObj),
            true
          );
        case "DATA_SIZE":
          return model.DataObjectDataSizeColumnUnit.getJsonObj(
            <model.DataObjectDataSizeColumnUnit>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.unitCategory}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataObjectColumnUnit): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "unitCategory" in obj && obj.unitCategory) {
      switch (obj.unitCategory) {
        case "CORE":
          return model.DataObjectCoreColumnUnit.getDeserializedJsonObj(
            <model.DataObjectCoreColumnUnit>(<object>jsonObj),
            true
          );
        case "TIME":
          return model.DataObjectTimeColumnUnit.getDeserializedJsonObj(
            <model.DataObjectTimeColumnUnit>(<object>jsonObj),
            true
          );
        case "OTHER_STANDARD":
          return model.DataObjectOtherStandardColumnUnit.getDeserializedJsonObj(
            <model.DataObjectOtherStandardColumnUnit>(<object>jsonObj),
            true
          );
        case "CUSTOM":
          return model.DataObjectCustomColumnUnit.getDeserializedJsonObj(
            <model.DataObjectCustomColumnUnit>(<object>jsonObj),
            true
          );
        case "TEMPERATURE":
          return model.DataObjectTemperatureColumnUnit.getDeserializedJsonObj(
            <model.DataObjectTemperatureColumnUnit>(<object>jsonObj),
            true
          );
        case "POWER":
          return model.DataObjectPowerColumnUnit.getDeserializedJsonObj(
            <model.DataObjectPowerColumnUnit>(<object>jsonObj),
            true
          );
        case "RATE":
          return model.DataObjectRateColumnUnit.getDeserializedJsonObj(
            <model.DataObjectRateColumnUnit>(<object>jsonObj),
            true
          );
        case "FREQUENCY":
          return model.DataObjectFrequencyColumnUnit.getDeserializedJsonObj(
            <model.DataObjectFrequencyColumnUnit>(<object>jsonObj),
            true
          );
        case "DATA_SIZE":
          return model.DataObjectDataSizeColumnUnit.getDeserializedJsonObj(
            <model.DataObjectDataSizeColumnUnit>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.unitCategory}`);
      }
    }
    return jsonObj;
  }
}