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
 * The size and placement configuration of nodes in the node pool.
 */
export interface NodePoolNodeConfigDetails {
  /**
   * The number of nodes in the node pool.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
  /**
   * The OCIDs of the Network Security Group(s) to associate nodes for this node pool with. For more information about NSGs, see {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The OCID of the Key Management Service key assigned to the boot volume.
   */
  "kmsKeyId"?: string;
  /**
   * Whether to enable in-transit encryption for the data volume's paravirtualized attachment. This field applies to both block volumes and boot volumes. The default value is false.
   */
  "isPvEncryptionInTransitEnabled"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The placement configurations for the node pool. Provide one placement
* configuration for each availability domain in which you intend to launch a node.
* <p>
To use the node pool with a regional subnet, provide a placement configuration for
* each availability domain, and include the regional subnet in each placement
* configuration.
* 
    */
  "placementConfigs"?: Array<model.NodePoolPlacementConfigDetails>;
  /**
   * The CNI related configuration of pods in the node pool.
   *
   */
  "nodePoolPodNetworkOptionDetails"?:
    | model.OciVcnIpNativeNodePoolPodNetworkOptionDetails
    | model.FlannelOverlayNodePoolPodNetworkOptionDetails;
}

export namespace NodePoolNodeConfigDetails {
  export function getJsonObj(obj: NodePoolNodeConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "placementConfigs": obj.placementConfigs
          ? obj.placementConfigs.map(item => {
              return model.NodePoolPlacementConfigDetails.getJsonObj(item);
            })
          : undefined,
        "nodePoolPodNetworkOptionDetails": obj.nodePoolPodNetworkOptionDetails
          ? model.NodePoolPodNetworkOptionDetails.getJsonObj(obj.nodePoolPodNetworkOptionDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NodePoolNodeConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "placementConfigs": obj.placementConfigs
          ? obj.placementConfigs.map(item => {
              return model.NodePoolPlacementConfigDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "nodePoolPodNetworkOptionDetails": obj.nodePoolPodNetworkOptionDetails
          ? model.NodePoolPodNetworkOptionDetails.getDeserializedJsonObj(
              obj.nodePoolPodNetworkOptionDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
