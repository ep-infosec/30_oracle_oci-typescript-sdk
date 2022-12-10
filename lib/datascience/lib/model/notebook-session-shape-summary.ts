/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The compute shape used to launch a notebook session compute instance.
 *
 */
export interface NotebookSessionShapeSummary {
  /**
   * The name of the notebook session shape.
   *
   */
  "name": string;
  /**
   * The number of cores associated with this notebook session shape.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "coreCount": number;
  /**
   * The amount of memory in GBs associated with this notebook session shape.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInGBs": number;
  /**
   * The family that the compute shape belongs to.
   *
   */
  "shapeSeries": model.NotebookSessionShapeSeries;
}

export namespace NotebookSessionShapeSummary {
  export function getJsonObj(obj: NotebookSessionShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NotebookSessionShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}