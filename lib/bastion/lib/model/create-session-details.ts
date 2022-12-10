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
 * The configuration details for a new bastion session. A session lets authorized users connect to a target resource for a predetermined amount of time. The Bastion service recognizes two types of sessions, managed SSH sessions and SSH port forwarding sessions. Managed SSH sessions require that the target resource has an OpenSSH server and the Oracle Cloud Agent both running.
 */
export interface CreateSessionDetails {
  /**
   * The name of the session.
   */
  "displayName"?: string;
  /**
   * The unique identifier (OCID) of the bastion on which to create this session.
   */
  "bastionId": string;
  "targetResourceDetails":
    | model.CreateManagedSshSessionTargetResourceDetails
    | model.CreateDynamicPortForwardingSessionTargetResourceDetails
    | model.CreatePortForwardingSessionTargetResourceDetails;
  /**
   * The type of the key used to connect to the session. PUB is a standard public key in OpenSSH format.
   */
  "keyType"?: CreateSessionDetails.KeyType;
  "keyDetails": model.PublicKeyDetails;
  /**
   * The amount of time the session can remain active. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sessionTtlInSeconds"?: number;
}

export namespace CreateSessionDetails {
  export enum KeyType {
    Pub = "PUB"
  }

  export function getJsonObj(obj: CreateSessionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetResourceDetails": obj.targetResourceDetails
          ? model.CreateSessionTargetResourceDetails.getJsonObj(obj.targetResourceDetails)
          : undefined,

        "keyDetails": obj.keyDetails ? model.PublicKeyDetails.getJsonObj(obj.keyDetails) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSessionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetResourceDetails": obj.targetResourceDetails
          ? model.CreateSessionTargetResourceDetails.getDeserializedJsonObj(
              obj.targetResourceDetails
            )
          : undefined,

        "keyDetails": obj.keyDetails
          ? model.PublicKeyDetails.getDeserializedJsonObj(obj.keyDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
