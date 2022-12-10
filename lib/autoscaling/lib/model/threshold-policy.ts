/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
 * An autoscaling policy that defines threshold-based rules for an autoscaling configuration.
 */
export interface ThresholdPolicy extends model.AutoScalingPolicy {
  "rules": Array<model.Condition>;

  "policyType": string;
}

export namespace ThresholdPolicy {
  export function getJsonObj(obj: ThresholdPolicy, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.AutoScalingPolicy.getJsonObj(obj) as ThresholdPolicy)),
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.Condition.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const policyType = "threshold";
  export function getDeserializedJsonObj(obj: ThresholdPolicy, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutoScalingPolicy.getDeserializedJsonObj(obj) as ThresholdPolicy)),
      ...{
        "rules": obj.rules
          ? obj.rules.map(item => {
              return model.Condition.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
