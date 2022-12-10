/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * Defines the configuration for the [ICMP](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml) protocol parameters.
 *
 */
export interface IcmpProtocolParameters extends model.ProtocolParameters {
  /**
   * The [ICMP](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml) code. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "icmpCode"?: number;
  /**
   * The [ICMP](https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml) type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "icmpType": number;

  "type": string;
}

export namespace IcmpProtocolParameters {
  export function getJsonObj(obj: IcmpProtocolParameters, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ProtocolParameters.getJsonObj(obj) as IcmpProtocolParameters)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "ICMP";
  export function getDeserializedJsonObj(
    obj: IcmpProtocolParameters,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ProtocolParameters.getDeserializedJsonObj(obj) as IcmpProtocolParameters)),
      ...{}
    };

    return jsonObj;
  }
}
