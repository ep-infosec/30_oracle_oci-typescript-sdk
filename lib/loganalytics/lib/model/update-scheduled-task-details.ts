/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The details for updating a schedule task.
 *
 */
export interface UpdateScheduledTaskDetails {
  /**
   * A user-friendly name that is changeable and that does not have to be unique.
   * Format: a leading alphanumeric, followed by zero or more
   * alphanumerics, underscores, spaces, backslashes, or hyphens in any order).
   * No trailing spaces allowed.
   *
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Schedules may be updated for task types SAVED_SEARCH and PURGE.
   * Note there may only be a single schedule for SAVED_SEARCH and PURGE scheduled tasks.
   *
   */
  "schedules"?: Array<model.Schedule>;

  "kind": string;
}

export namespace UpdateScheduledTaskDetails {
  export function getJsonObj(obj: UpdateScheduledTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.Schedule.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "STANDARD":
          return model.UpdateStandardTaskDetails.getJsonObj(
            <model.UpdateStandardTaskDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateScheduledTaskDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "schedules": obj.schedules
          ? obj.schedules.map(item => {
              return model.Schedule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "kind" in obj && obj.kind) {
      switch (obj.kind) {
        case "STANDARD":
          return model.UpdateStandardTaskDetails.getDeserializedJsonObj(
            <model.UpdateStandardTaskDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.kind}`);
      }
    }
    return jsonObj;
  }
}