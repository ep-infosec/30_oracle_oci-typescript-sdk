/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Description of log analytics entity type.
 *
 */
export interface LogAnalyticsEntityType {
  /**
   * Log analytics entity type name.
   *
   */
  "name": string;
  /**
   * Internal name for the log analytics entity type.
   *
   */
  "internalName": string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId"?: string;
  /**
   * Log analytics entity type category. Category will be used for grouping and filtering.
   *
   */
  "category": string;
  /**
   * Log analytics entity type group. That can be CLOUD (OCI) or NON_CLOUD otherwise.
   *
   */
  "cloudType": model.EntityCloudType;
  /**
   * The parameters used in file patterns specified in log sources for this log analytics entity type.
   *
   */
  "properties"?: Array<model.EntityTypeProperty>;
  /**
   * The current lifecycle state of the log analytics entity.
   *
   */
  "lifecycleState": model.EntityLifecycleStates;
  /**
   * Time the log analytics entity type was created. An RFC3339 formatted datetime string.
   *
   */
  "timeCreated": Date;
  /**
   * Time the log analytics entity type was updated. An RFC3339 formatted datetime string.
   *
   */
  "timeUpdated": Date;
  /**
   * This field indicates whether logs for entities of this type can be collected using a management agent.
   *
   */
  "managementAgentEligibilityStatus"?: LogAnalyticsEntityType.ManagementAgentEligibilityStatus;
}

export namespace LogAnalyticsEntityType {
  export enum ManagementAgentEligibilityStatus {
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: LogAnalyticsEntityType): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.EntityTypeProperty.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsEntityType): object {
    const jsonObj = {
      ...obj,
      ...{
        "properties": obj.properties
          ? obj.properties.map(item => {
              return model.EntityTypeProperty.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}