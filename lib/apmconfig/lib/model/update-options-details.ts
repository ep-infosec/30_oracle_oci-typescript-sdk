/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
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
 * An Options object represents configuration options.
 */
export interface UpdateOptionsDetails extends model.UpdateConfigDetails {
  /**
   * The name by which a configuration entity is displayed to the end user.
   */
  "displayName"?: string;
  /**
   * The options are stored here as JSON.
   */
  "options"?: any;
  /**
   * A string that specifies the group that an OPTIONS item belongs to.
   *
   */
  "group"?: string;
  /**
   * An optional string that describes what the options are intended or used for.
   */
  "description"?: string;

  "configType": string;
}

export namespace UpdateOptionsDetails {
  export function getJsonObj(obj: UpdateOptionsDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigDetails.getJsonObj(obj) as UpdateOptionsDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configType = "OPTIONS";
  export function getDeserializedJsonObj(
    obj: UpdateOptionsDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConfigDetails.getDeserializedJsonObj(obj) as UpdateOptionsDetails)),
      ...{}
    };

    return jsonObj;
  }
}
