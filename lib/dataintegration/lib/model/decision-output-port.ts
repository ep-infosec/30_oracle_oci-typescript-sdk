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
 * The conditional output port details, used in operators such as decision operator.
 */
export interface DecisionOutputPort extends model.TypedObject {
  /**
   * The port details for the data asset.Type.
   */
  "portType": DecisionOutputPort.PortType;
  /**
   * An array of fields.
   */
  "fields"?: Array<model.TypedObject>;
  /**
   * The port based on what decision expression evaluates to.
   */
  "decisionOutputPortType": DecisionOutputPort.DecisionOutputPortType;

  "modelType": string;
}

export namespace DecisionOutputPort {
  export enum PortType {
    Data = "DATA",
    Control = "CONTROL",
    Model = "MODEL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DecisionOutputPortType {
    EvalError = "EVAL_ERROR",
    EvalTrue = "EVAL_TRUE",
    EvalFalse = "EVAL_FALSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DecisionOutputPort, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as DecisionOutputPort)),
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.TypedObject.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "DECISION_OUTPUT_PORT";
  export function getDeserializedJsonObj(
    obj: DecisionOutputPort,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TypedObject.getDeserializedJsonObj(obj) as DecisionOutputPort)),
      ...{
        "fields": obj.fields
          ? obj.fields.map(item => {
              return model.TypedObject.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
