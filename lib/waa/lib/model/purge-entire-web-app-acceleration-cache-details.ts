/**
 * Web Application Acceleration (WAA) API
 * API for the Web Application Acceleration service.
Use this API to manage regional Web App Acceleration policies such as Caching and Compression
for accelerating HTTP services.

 * OpenAPI spec version: 20211230
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
 * Clears all resources from the cache of the WebAppAcceleration.
 */
export interface PurgeEntireWebAppAccelerationCacheDetails
  extends model.PurgeWebAppAccelerationCacheDetails {
  "purgeType": string;
}

export namespace PurgeEntireWebAppAccelerationCacheDetails {
  export function getJsonObj(
    obj: PurgeEntireWebAppAccelerationCacheDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PurgeWebAppAccelerationCacheDetails.getJsonObj(
            obj
          ) as PurgeEntireWebAppAccelerationCacheDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const purgeType = "ENTIRE_CACHE";
  export function getDeserializedJsonObj(
    obj: PurgeEntireWebAppAccelerationCacheDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PurgeWebAppAccelerationCacheDetails.getDeserializedJsonObj(
            obj
          ) as PurgeEntireWebAppAccelerationCacheDetails)),
      ...{}
    };

    return jsonObj;
  }
}