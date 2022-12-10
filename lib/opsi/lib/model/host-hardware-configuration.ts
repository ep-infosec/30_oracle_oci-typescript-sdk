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
 * Hardware Configuration metric for the host
 *
 */
export interface HostHardwareConfiguration extends model.HostConfigurationMetricGroup {
  /**
   * Processor architecture used by the platform
   */
  "cpuArchitecture": string;

  "metricName": string;
}

export namespace HostHardwareConfiguration {
  export function getJsonObj(obj: HostHardwareConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getJsonObj(obj) as HostHardwareConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_HARDWARE_CONFIGURATION";
  export function getDeserializedJsonObj(
    obj: HostHardwareConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getDeserializedJsonObj(
            obj
          ) as HostHardwareConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}