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
 * Response of executeOperationJob.
 */
export interface ExecuteOperationJob {
  /**
   * Status of the operation job for all sets of input.
   */
  "operationStatus": string;
  /**
   * Error message when the whole operation fails.
   */
  "errorMessage"?: string;
  /**
   * Name of the operation.
   */
  "operationName"?: string;
  /**
   * The list of names of OUT/INOUT parameters.
   */
  "outParams"?: Array<string>;
  /**
   * The list of operation execution result for each input set.
   */
  "operationResult": Array<model.OperationExecResult>;
}

export namespace ExecuteOperationJob {
  export function getJsonObj(obj: ExecuteOperationJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "operationResult": obj.operationResult
          ? obj.operationResult.map(item => {
              return model.OperationExecResult.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExecuteOperationJob): object {
    const jsonObj = {
      ...obj,
      ...{
        "operationResult": obj.operationResult
          ? obj.operationResult.map(item => {
              return model.OperationExecResult.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
