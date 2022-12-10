/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20210930
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
 * Rule for routing incoming ingress gateway traffic with HTTP protocol
 */
export interface HttpIngressGatewayTrafficRouteRule extends model.IngressGatewayTrafficRouteRule {
  /**
   * Route to match
   */
  "path"?: string;
  /**
   * Match type for the route
   */
  "pathType"?: HttpIngressGatewayTrafficRouteRule.PathType;
  /**
   * If true, the rule will check that the content-type header has a application/grpc
   * or one of the various application/grpc+ values.
   *
   */
  "isGrpc"?: boolean;
  /**
   * If true, the hostname will be rewritten to the target virtual deployment's DNS hostname.
   *
   */
  "isHostRewriteEnabled"?: boolean;
  /**
   * If true, the matched path prefix will be rewritten to '/' before being directed to the target virtual deployment.
   *
   */
  "isPathRewriteEnabled"?: boolean;

  "type": string;
}

export namespace HttpIngressGatewayTrafficRouteRule {
  export enum PathType {
    Prefix = "PREFIX",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: HttpIngressGatewayTrafficRouteRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IngressGatewayTrafficRouteRule.getJsonObj(
            obj
          ) as HttpIngressGatewayTrafficRouteRule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "HTTP";
  export function getDeserializedJsonObj(
    obj: HttpIngressGatewayTrafficRouteRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.IngressGatewayTrafficRouteRule.getDeserializedJsonObj(
            obj
          ) as HttpIngressGatewayTrafficRouteRule)),
      ...{}
    };

    return jsonObj;
  }
}