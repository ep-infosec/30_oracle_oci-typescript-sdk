/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * The properties that define a stack.
 * A stack is the collection of Oracle Cloud Infrastructure resources corresponding to a given Terraform configuration.
 * For instructions on managing stacks, see
 * [Managing Stacks](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Tasks/stacks.htm).
 * For more information about stacks, see
 * [Key Concepts](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__stackdefinition).
 *
 */
export interface Stack {
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) for the stack.
   */
  "id"?: string;
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) for the compartment where the stack is located.
   */
  "compartmentId"?: string;
  /**
   * Human-readable name of the stack.
   */
  "displayName"?: string;
  /**
   * Description of the stack.
   */
  "description"?: string;
  /**
   * The date and time at which the stack was created.
   * Format is defined by RFC3339.
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  /**
   * The current lifecycle state of the stack.
   * For more information about stack lifecycle states in Resource Manager, see
   * [Key Concepts](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/resourcemanager.htm#concepts__StackStates).
   *
   */
  "lifecycleState"?: Stack.LifecycleState;
  "configSource"?:
    | model.GitConfigSource
    | model.DevOpsConfigSource
    | model.ObjectStorageConfigSource
    | model.BitbucketServerConfigSource
    | model.BitbucketCloudConfigSource
    | model.CompartmentConfigSource
    | model.ZipUploadConfigSource;
  "customTerraformProvider"?: model.CustomTerraformProvider;
  /**
   * When `true`, the stack sources third-party Terraform providers from
   * [Terraform Registry](https://registry.terraform.io/browse/providers) and allows
   * {@link #customTerraformProvider(CustomTerraformProviderRequest) customTerraformProvider}.
   * For more information about stack sourcing of third-party Terraform providers, see
   * [Third-party Provider Configuration](https://docs.cloud.oracle.com/iaas/Content/ResourceManager/Concepts/terraformconfigresourcemanager.htm#third-party-providers).
   *
   */
  "isThirdPartyProviderExperienceEnabled"?: boolean;
  /**
   * Terraform variables associated with this resource.
   * Maximum number of variables supported is 250.
   * The maximum size of each variable, including both name and value, is 8192 bytes.
   * Example: `{\"CompartmentId\": \"compartment-id-value\"}`
   *
   */
  "variables"?: { [key: string]: string };
  /**
   * The version of Terraform specified for the stack. Example: `0.12.x`
   *
   */
  "terraformVersion"?: string;
  /**
   * Drift status of the stack.
   * Drift refers to differences between the actual (current) state of the stack and the expected (defined) state of the stack.
   *
   */
  "stackDriftStatus"?: Stack.StackDriftStatus;
  /**
   * The date and time when the drift detection was last executed.
   * Format is defined by RFC3339.
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeDriftLastChecked"?: Date;
  /**
   * Free-form tags associated with the resource. Each tag is a key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Stack {
  export enum LifecycleState {
    Creating = "CREATING",
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

  export enum StackDriftStatus {
    NotChecked = "NOT_CHECKED",
    InSync = "IN_SYNC",
    Drifted = "DRIFTED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Stack): object {
    const jsonObj = {
      ...obj,
      ...{
        "configSource": obj.configSource
          ? model.ConfigSource.getJsonObj(obj.configSource)
          : undefined,
        "customTerraformProvider": obj.customTerraformProvider
          ? model.CustomTerraformProvider.getJsonObj(obj.customTerraformProvider)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Stack): object {
    const jsonObj = {
      ...obj,
      ...{
        "configSource": obj.configSource
          ? model.ConfigSource.getDeserializedJsonObj(obj.configSource)
          : undefined,
        "customTerraformProvider": obj.customTerraformProvider
          ? model.CustomTerraformProvider.getDeserializedJsonObj(obj.customTerraformProvider)
          : undefined
      }
    };

    return jsonObj;
  }
}