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
 * The properties that define a template. A template is a pre-built Terraform configuration that provisions a set of resources used in a common scenario.
 *
 */
export interface Template {
  /**
   * Unique identifier ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)) for the template.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing this template.
   */
  "compartmentId"?: string;
  /**
   * Unique identifier for the category where the template is located.
   * Possible values are `0` (Quick Starts), `1` (Service), `2` (Architecture), and `3` (Private).
   *
   */
  "categoryId"?: string;
  /**
   * Human-readable name of the template.
   */
  "displayName"?: string;
  /**
   * Brief description of the template.
   */
  "description"?: string;
  /**
   * Detailed description of the template. This description is displayed in the Console page listing templates when the template is expanded. Avoid entering confidential information.
   */
  "longDescription"?: string;
  /**
   * whether the template will work for free tier tenancy.
   */
  "isFreeTier"?: boolean;
  /**
   * The date and time at which the template was created.
   * Format is defined by RFC3339.
   * Example: `2020-11-25T21:10:29.600Z`
   *
   */
  "timeCreated"?: Date;
  "templateConfigSource"?: model.TemplateZipUploadConfigSource;
  /**
   * The current lifecycle state of the template.
   *
   */
  "lifecycleState"?: Template.LifecycleState;
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

export namespace Template {
  export enum LifecycleState {
    Active = "ACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Template): object {
    const jsonObj = {
      ...obj,
      ...{
        "templateConfigSource": obj.templateConfigSource
          ? model.TemplateConfigSource.getJsonObj(obj.templateConfigSource)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Template): object {
    const jsonObj = {
      ...obj,
      ...{
        "templateConfigSource": obj.templateConfigSource
          ? model.TemplateConfigSource.getDeserializedJsonObj(obj.templateConfigSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
