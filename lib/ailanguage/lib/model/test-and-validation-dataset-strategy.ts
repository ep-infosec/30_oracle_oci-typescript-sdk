/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * This information will be used capture training, testing and validation dataset.
 */
export interface TestAndValidationDatasetStrategy extends model.TestStrategy {
  "testingDataset": model.DataScienceLabelingDataset | model.ObjectStorageDataset;
  "validationDataset"?: model.DataScienceLabelingDataset | model.ObjectStorageDataset;

  "strategyType": string;
}

export namespace TestAndValidationDatasetStrategy {
  export function getJsonObj(
    obj: TestAndValidationDatasetStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestStrategy.getJsonObj(obj) as TestAndValidationDatasetStrategy)),
      ...{
        "testingDataset": obj.testingDataset
          ? model.DatasetDetails.getJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.DatasetDetails.getJsonObj(obj.validationDataset)
          : undefined
      }
    };

    return jsonObj;
  }
  export const strategyType = "TEST_AND_VALIDATION_DATASET";
  export function getDeserializedJsonObj(
    obj: TestAndValidationDatasetStrategy,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestStrategy.getDeserializedJsonObj(obj) as TestAndValidationDatasetStrategy)),
      ...{
        "testingDataset": obj.testingDataset
          ? model.DatasetDetails.getDeserializedJsonObj(obj.testingDataset)
          : undefined,
        "validationDataset": obj.validationDataset
          ? model.DatasetDetails.getDeserializedJsonObj(obj.validationDataset)
          : undefined
      }
    };

    return jsonObj;
  }
}
