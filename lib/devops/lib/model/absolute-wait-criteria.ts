/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Specifies the absolute wait criteria. You can specify fixed length of wait duration.
 */
export interface AbsoluteWaitCriteria extends model.WaitCriteria {
  /**
   * The absolute wait duration. An ISO 8601 formatted duration string. Minimum waitDuration should be 5 seconds. Maximum waitDuration can be up to 2 days.
   */
  "waitDuration": string;

  "waitType": string;
}

export namespace AbsoluteWaitCriteria {
  export function getJsonObj(obj: AbsoluteWaitCriteria, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.WaitCriteria.getJsonObj(obj) as AbsoluteWaitCriteria)),
      ...{}
    };

    return jsonObj;
  }
  export const waitType = "ABSOLUTE_WAIT";
  export function getDeserializedJsonObj(
    obj: AbsoluteWaitCriteria,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WaitCriteria.getDeserializedJsonObj(obj) as AbsoluteWaitCriteria)),
      ...{}
    };

    return jsonObj;
  }
}
