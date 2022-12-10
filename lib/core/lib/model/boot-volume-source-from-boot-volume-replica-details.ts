/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * Specifies the source boot volume replica which the boot volume will be created from.
 * The boot volume replica shoulbe be in the same availability domain as the boot volume.
 * Only one volume can be created from a replica at the same time.
 *
 */
export interface BootVolumeSourceFromBootVolumeReplicaDetails
  extends model.BootVolumeSourceDetails {
  /**
   * The OCID of the boot volume replica.
   */
  "id": string;

  "type": string;
}

export namespace BootVolumeSourceFromBootVolumeReplicaDetails {
  export function getJsonObj(
    obj: BootVolumeSourceFromBootVolumeReplicaDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BootVolumeSourceDetails.getJsonObj(
            obj
          ) as BootVolumeSourceFromBootVolumeReplicaDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "bootVolumeReplica";
  export function getDeserializedJsonObj(
    obj: BootVolumeSourceFromBootVolumeReplicaDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BootVolumeSourceDetails.getDeserializedJsonObj(
            obj
          ) as BootVolumeSourceFromBootVolumeReplicaDetails)),
      ...{}
    };

    return jsonObj;
  }
}