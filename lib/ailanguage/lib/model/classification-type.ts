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
 * possible text classification modes
 */
export interface ClassificationType {
  "classificationMode": string;
}

export namespace ClassificationType {
  export function getJsonObj(obj: ClassificationType): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "classificationMode" in obj && obj.classificationMode) {
      switch (obj.classificationMode) {
        case "MULTI_CLASS":
          return model.ClassificationMultiClassModeDetails.getJsonObj(
            <model.ClassificationMultiClassModeDetails>(<object>jsonObj),
            true
          );
        case "MULTI_LABEL":
          return model.ClassificationMultiLabelModeDetails.getJsonObj(
            <model.ClassificationMultiLabelModeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.classificationMode}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ClassificationType): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "classificationMode" in obj && obj.classificationMode) {
      switch (obj.classificationMode) {
        case "MULTI_CLASS":
          return model.ClassificationMultiClassModeDetails.getDeserializedJsonObj(
            <model.ClassificationMultiClassModeDetails>(<object>jsonObj),
            true
          );
        case "MULTI_LABEL":
          return model.ClassificationMultiLabelModeDetails.getDeserializedJsonObj(
            <model.ClassificationMultiLabelModeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.classificationMode}`);
      }
    }
    return jsonObj;
  }
}
