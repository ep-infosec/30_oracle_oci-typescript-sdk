/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Describes a refresh of a fusion environment
 */
export interface RefreshDetails {
  /**
   * The source environment id for the last refresh
   */
  "sourceFusionEnvironmentId": string;
  /**
   * The time of when the last refresh finish
   */
  "timeFinished": Date;
  /**
   * The point of time of the latest DB backup for the last refresh
   */
  "timeOfRestorationPoint": Date;
}

export namespace RefreshDetails {
  export function getJsonObj(obj: RefreshDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RefreshDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
