/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary of a host insight resource.
 */
export interface HostInsightSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the host insight resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * The host name. The host name is unique amongst the hosts managed by the same management agent.
   */
  "hostName": string;
  /**
   * The user-friendly name for the host. The name does not have to be unique.
   */
  "hostDisplayName"?: string;
  /**
   * Operations Insights internal representation of the host type. Possible value is EXTERNAL-HOST.
   */
  "hostType"?: string;
  /**
   * Processor count. This is the OCPU count for Autonomous Database and CPU core count for other database types. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "processorCount"?: number;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the OPSI private endpoint
   */
  "opsiPrivateEndpointId"?: string;
  /**
   * Indicates the status of a host insight in Operations Insights
   */
  "status"?: model.ResourceStatus;
  /**
   * The time the the host insight was first enabled. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the host insight was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the host.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;

  "entitySource": string;
}

export namespace HostInsightSummary {
  export function getJsonObj(obj: HostInsightSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.MacsManagedExternalHostInsightSummary.getJsonObj(
            <model.MacsManagedExternalHostInsightSummary>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_HOST":
          return model.EmManagedExternalHostInsightSummary.getJsonObj(
            <model.EmManagedExternalHostInsightSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_CLOUD_HOST":
          return model.MacsManagedCloudHostInsightSummary.getJsonObj(
            <model.MacsManagedCloudHostInsightSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HostInsightSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.MacsManagedExternalHostInsightSummary.getDeserializedJsonObj(
            <model.MacsManagedExternalHostInsightSummary>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_HOST":
          return model.EmManagedExternalHostInsightSummary.getDeserializedJsonObj(
            <model.EmManagedExternalHostInsightSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_CLOUD_HOST":
          return model.MacsManagedCloudHostInsightSummary.getDeserializedJsonObj(
            <model.MacsManagedCloudHostInsightSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
}