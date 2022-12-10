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
* For a flexible shape, the amount of networking bandwidth available for instances that use this shape.
* <p>
If this field is null, then this shape has a fixed amount of bandwidth equivalent to `networkingBandwidthInGbps`.
* 
*/
export interface ShapeNetworkingBandwidthOptions {
  /**
   * The minimum amount of networking bandwidth, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minInGbps"?: number;
  /**
   * The maximum amount of networking bandwidth, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxInGbps"?: number;
  /**
   * The default amount of networking bandwidth per OCPU, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "defaultPerOcpuInGbps"?: number;
}

export namespace ShapeNetworkingBandwidthOptions {
  export function getJsonObj(obj: ShapeNetworkingBandwidthOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeNetworkingBandwidthOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
