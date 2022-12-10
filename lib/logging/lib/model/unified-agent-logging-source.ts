/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, and delete log groups, log objects, and agent configurations.
 * OpenAPI spec version: 20200531
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
 * Logging source object.
 */
export interface UnifiedAgentLoggingSource {
  /**
   * unique name for the source
   */
  "name": string;

  "sourceType": string;
}

export namespace UnifiedAgentLoggingSource {
  export function getJsonObj(obj: UnifiedAgentLoggingSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "WINDOWS_EVENT_LOG":
          return model.UnifiedAgentWindowsEventSource.getJsonObj(
            <model.UnifiedAgentWindowsEventSource>(<object>jsonObj),
            true
          );
        case "LOG_TAIL":
          return model.UnifiedAgentTailLogSource.getJsonObj(
            <model.UnifiedAgentTailLogSource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UnifiedAgentLoggingSource): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "WINDOWS_EVENT_LOG":
          return model.UnifiedAgentWindowsEventSource.getDeserializedJsonObj(
            <model.UnifiedAgentWindowsEventSource>(<object>jsonObj),
            true
          );
        case "LOG_TAIL":
          return model.UnifiedAgentTailLogSource.getDeserializedJsonObj(
            <model.UnifiedAgentTailLogSource>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.sourceType}`);
      }
    }
    return jsonObj;
  }
}