/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.cloud.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
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
 * The summary of Management Agent Plugin count items
 */
export interface ManagementAgentPluginAggregationCollection {
  /**
   * List in which each item describes an aggregation of Managment Agent Plugins
   */
  "items": Array<model.ManagementAgentPluginAggregation>;
}

export namespace ManagementAgentPluginAggregationCollection {
  export function getJsonObj(obj: ManagementAgentPluginAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ManagementAgentPluginAggregation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ManagementAgentPluginAggregationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ManagementAgentPluginAggregation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
