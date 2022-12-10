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
 * The information about the sort operator.
 */
export interface SortOper extends model.Operator {
  "sortKey"?: model.SortKey;

  "modelType": string;
}

export namespace SortOper {
  export function getJsonObj(obj: SortOper, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as SortOper)),
      ...{
        "sortKey": obj.sortKey ? model.SortKey.getJsonObj(obj.sortKey) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "SORT_OPERATOR";
  export function getDeserializedJsonObj(obj: SortOper, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getDeserializedJsonObj(obj) as SortOper)),
      ...{
        "sortKey": obj.sortKey ? model.SortKey.getDeserializedJsonObj(obj.sortKey) : undefined
      }
    };

    return jsonObj;
  }
}
