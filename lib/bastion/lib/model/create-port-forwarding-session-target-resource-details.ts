/**
 * Bastion API
 * Use the Bastion API to provide restricted and time-limited access to target resources that don't have public endpoints. Bastions let authorized users connect from specific IP addresses to target resources using Secure Shell (SSH) sessions. For more information, see [the Bastion documentation](/iaas/Content/Bastion/home.htm).
 * OpenAPI spec version: 20210331
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
 * Details about a port forwarding session for a target resource.
 */
export interface CreatePortForwardingSessionTargetResourceDetails
  extends model.CreateSessionTargetResourceDetails {
  /**
   * The unique identifier (OCID) of the target resource (a Compute instance, for example) that the session connects to.
   */
  "targetResourceId"?: string;
  /**
   * The private IP address of the target resource that the session connects to.
   */
  "targetResourcePrivateIpAddress"?: string;
  /**
   * The Fully Qualified Domain Name of the target resource that the session connects to.
   */
  "targetResourceFqdn"?: string;
  /**
   * The port number to connect to on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "targetResourcePort"?: number;

  "sessionType": string;
}

export namespace CreatePortForwardingSessionTargetResourceDetails {
  export function getJsonObj(
    obj: CreatePortForwardingSessionTargetResourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSessionTargetResourceDetails.getJsonObj(
            obj
          ) as CreatePortForwardingSessionTargetResourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sessionType = "PORT_FORWARDING";
  export function getDeserializedJsonObj(
    obj: CreatePortForwardingSessionTargetResourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSessionTargetResourceDetails.getDeserializedJsonObj(
            obj
          ) as CreatePortForwardingSessionTargetResourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
