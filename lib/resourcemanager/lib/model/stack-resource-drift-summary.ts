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
 * Drift status details for the indicated resource and stack. Includes actual and expected (defined) properties.
 *
 */
export interface StackResourceDriftSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the stack.
   */
  "stackId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where the stack is located.
   */
  "compartmentId"?: string;
  /**
   * The name of the resource as defined in the stack.
   */
  "resourceName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the resource provisioned by Terraform.
   */
  "resourceId"?: string;
  /**
   * The provider resource type.
   * Must be supported by the [Oracle Cloud Infrastructure provider](https://www.terraform.io/docs/providers/oci/index.html).
   * Example: `oci_core_instance`
   *
   */
  "resourceType"?: string;
  /**
   * The drift status of the resource.
   * A drift status value indicates whether or not the actual state of the resource differs from the expected (defined) state for that resource.
   *
   */
  "resourceDriftStatus"?: StackResourceDriftSummary.ResourceDriftStatus;
  /**
   * Actual values of properties that the stack defines for the indicated resource.
   * Each property and value is provided as a key-value pair.
   * The following example shows actual values for the resource's display name and server type:
   * `{\"display_name\": \"tf-default-dhcp-options-new\", \"options.0.server_type\": \"VcnLocalPlusInternet\"}`
   *
   */
  "actualProperties"?: { [key: string]: string };
  /**
   * Expected values of properties that the stack defines for the indicated resource.
   * Each property and value is provided as a key-value pair.
   * The following example shows expected (defined) values for the resource's display name and server type:
   * `{\"display_name\": \"tf-default-dhcp-options\", \"options.0.server_type\": \"VcnLocalPlusInternet\"}`
   *
   */
  "expectedProperties"?: { [key: string]: string };
  /**
   * The date and time when the drift detection was executed.
   * Format is defined by RFC3339.
   * Example: `2020-01-25T21:10:29.600Z`
   *
   */
  "timeDriftChecked"?: Date;
}

export namespace StackResourceDriftSummary {
  export enum ResourceDriftStatus {
    NotChecked = "NOT_CHECKED",
    InSync = "IN_SYNC",
    Modified = "MODIFIED",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: StackResourceDriftSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StackResourceDriftSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}