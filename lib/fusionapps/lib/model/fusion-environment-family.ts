/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](/iaas/Content/Identity/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Details of a Fusion environment family. An environment family is a logical grouping of environments. The environment family defines a set of characteristics that are shared across the environments to allow consistent management and maintenance across your production, test, and development environments. For more information, see [Planning an Environment Family](https://docs.cloud.oracle.com/iaas/Content/fusion-applications/plan-environment-family.htm).
 */
export interface FusionEnvironmentFamily {
  /**
   * The unique identifier (OCID) of the environment family. Can't be changed after creation.
   */
  "id": string;
  /**
   * A friendly name for the environment family. The name must contain only letters, numbers, dashes, and underscores. Can be changed later.
   */
  "displayName": string;
  "familyMaintenancePolicy"?: model.FamilyMaintenancePolicy;
  /**
   * The OCID of the compartment where the environment family is located.
   */
  "compartmentId": string;
  /**
   * The list of the IDs of the applications subscriptions that are associated with the environment family.
   */
  "subscriptionIds": Array<string>;
  /**
   * When set to True, a subscription update is required for the environment family.
   */
  "isSubscriptionUpdateNeeded"?: boolean;
  /**
   * The time the the FusionEnvironmentFamily was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The current state of the FusionEnvironmentFamily.
   */
  "lifecycleState": FusionEnvironmentFamily.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Environment Specific Guid/ System Name
   */
  "systemName"?: string;
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
}

export namespace FusionEnvironmentFamily {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: FusionEnvironmentFamily): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyMaintenancePolicy": obj.familyMaintenancePolicy
          ? model.FamilyMaintenancePolicy.getJsonObj(obj.familyMaintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FusionEnvironmentFamily): object {
    const jsonObj = {
      ...obj,
      ...{
        "familyMaintenancePolicy": obj.familyMaintenancePolicy
          ? model.FamilyMaintenancePolicy.getDeserializedJsonObj(obj.familyMaintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
