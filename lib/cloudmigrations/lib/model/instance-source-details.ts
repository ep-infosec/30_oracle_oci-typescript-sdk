/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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

export interface InstanceSourceDetails {
  "sourceType": string;
}

export namespace InstanceSourceDetails {
  export function getJsonObj(obj: InstanceSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "image":
          return model.InstanceSourceViaImageDetails.getJsonObj(
            <model.InstanceSourceViaImageDetails>(<object>jsonObj),
            true
          );
        case "bootVolume":
          return model.InstanceSourceViaBootVolumeDetails.getJsonObj(
            <model.InstanceSourceViaBootVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "image":
          return model.InstanceSourceViaImageDetails.getDeserializedJsonObj(
            <model.InstanceSourceViaImageDetails>(<object>jsonObj),
            true
          );
        case "bootVolume":
          return model.InstanceSourceViaBootVolumeDetails.getDeserializedJsonObj(
            <model.InstanceSourceViaBootVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
}
