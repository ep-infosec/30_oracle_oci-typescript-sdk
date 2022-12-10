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
 * The input port details.
 */
export interface InputPort extends model.TypedObject {
  /**
   * The port details of the data asset type.
   */
  "portType"?: InputPort.PortType;
  /**
   * An array of fields.
   */
  "fields"?: Array<model.TypedObject>;

  "modelType": string;
}

export namespace InputPort {
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

  export function getJsonObj(obj: InputPort, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getJsonObj(obj) as InputPort)),
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
  export const modelType = "INPUT_PORT";
  export function getDeserializedJsonObj(obj: InputPort, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TypedObject.getDeserializedJsonObj(obj) as InputPort)),
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