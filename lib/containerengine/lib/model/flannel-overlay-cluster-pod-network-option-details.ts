/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * Network options specific to using the flannel (FLANNEL_OVERLAY) CNI
 */
export interface FlannelOverlayClusterPodNetworkOptionDetails
  extends model.ClusterPodNetworkOptionDetails {
  "cniType": string;
}

export namespace FlannelOverlayClusterPodNetworkOptionDetails {
  export function getJsonObj(
    obj: FlannelOverlayClusterPodNetworkOptionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ClusterPodNetworkOptionDetails.getJsonObj(
            obj
          ) as FlannelOverlayClusterPodNetworkOptionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const cniType = "FLANNEL_OVERLAY";
  export function getDeserializedJsonObj(
    obj: FlannelOverlayClusterPodNetworkOptionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ClusterPodNetworkOptionDetails.getDeserializedJsonObj(
            obj
          ) as FlannelOverlayClusterPodNetworkOptionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
