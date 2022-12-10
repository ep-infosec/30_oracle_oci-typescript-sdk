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
 * LogAnalyticsSourcePatternCollection
 */
export interface LogAnalyticsSourcePatternCollection {
  /**
   * An array of source patterns.
   */
  "items"?: Array<model.LogAnalyticsSourcePattern>;
}

export namespace LogAnalyticsSourcePatternCollection {
  export function getJsonObj(obj: LogAnalyticsSourcePatternCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.LogAnalyticsSourcePattern.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsSourcePatternCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.LogAnalyticsSourcePattern.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}