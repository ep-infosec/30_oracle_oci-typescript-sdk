/**
 * Resource Discovery and Monitoring Control API
 * Use the Resource Discovery and Monitoring Control API to get details about monitored instances and perform actions. For more information, see [Resource Discovery and Monitoring](https://docs.oracle.com/iaas/os-management/osms/osms-resource-discovery-monitoring.htm).

 * OpenAPI spec version: 20210330
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
 * Summary of the monitored instance.
 */
export interface MonitoredInstanceSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of monitored instance.
   */
  "instanceId": string;
  /**
   * Compartment Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   */
  "compartmentId": string;
  /**
   * A user-friendly name of the monitored instance. It is binded to [Compute Instance](https://docs.cloud.oracle.com/Content/Compute/Concepts/computeoverview.htm).
   * DisplayName is fetched from [Core Service API](https://docs.cloud.oracle.com/api/#/en/iaas/20160918/Instance/).
   *
   */
  "displayName"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * The current state of the monitored instance.
   */
  "lifecycleState"?: string;
  /**
   * Monitoring status. Can be either enabled or disabled.
   */
  "monitoringState"?: string;
}

export namespace MonitoredInstanceSummary {
  export function getJsonObj(obj: MonitoredInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredInstanceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}