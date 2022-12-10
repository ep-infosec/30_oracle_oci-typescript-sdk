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
 * Summary of the WebAppAccelerationLoadBalancer.
 */
export interface WebAppAccelerationLoadBalancerSummary extends model.WebAppAccelerationSummary {
  /**
   * LoadBalancer [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) to which the WebAppAccelerationPolicy is attached to.
   */
  "loadBalancerId": string;

  "backendType": string;
}

export namespace WebAppAccelerationLoadBalancerSummary {
  export function getJsonObj(
    obj: WebAppAccelerationLoadBalancerSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WebAppAccelerationSummary.getJsonObj(
            obj
          ) as WebAppAccelerationLoadBalancerSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const backendType = "LOAD_BALANCER";
  export function getDeserializedJsonObj(
    obj: WebAppAccelerationLoadBalancerSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WebAppAccelerationSummary.getDeserializedJsonObj(
            obj
          ) as WebAppAccelerationLoadBalancerSummary)),
      ...{}
    };

    return jsonObj;
  }
}