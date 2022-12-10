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
 * Purge action for scheduled task.
 */
export interface PurgeAction extends model.Action {
  /**
   * Purge query string.
   */
  "queryString": string;
  /**
   * the type of the log data to be purged
   */
  "dataType": model.StorageDataType;
  /**
   * The duration of data to be retained, which is used to
   * calculate the timeDataEnded when the task fires.
   * The value should be negative.
   * Purge duration in ISO 8601 extended format as described in
   * https://en.wikipedia.org/wiki/ISO_8601#Durations.
   * The largest supported unit is D, e.g. -P365D (not -P1Y) or -P14D (not -P2W).
   *
   */
  "purgeDuration": string;
  /**
   * the compartment OCID under which the data will be purged
   */
  "purgeCompartmentId": string;
  /**
   * if true, purge child compartments data
   */
  "compartmentIdInSubtree"?: boolean;

  "type": string;
}

export namespace PurgeAction {
  export function getJsonObj(obj: PurgeAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getJsonObj(obj) as PurgeAction)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "PURGE";
  export function getDeserializedJsonObj(obj: PurgeAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Action.getDeserializedJsonObj(obj) as PurgeAction)),
      ...{}
    };

    return jsonObj;
  }
}