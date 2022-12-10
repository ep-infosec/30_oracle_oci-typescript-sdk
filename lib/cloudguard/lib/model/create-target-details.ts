/**
 * Cloud Guard and Security Zones API
 * Use the Cloud Guard and Security Zones API to automate processes that you would otherwise perform through the Cloud Guard Console or the Security Zones Console. For more information on these services, see the [Cloud Guard](/iaas/cloud-guard/home.htm) and [Security Zones](/iaas/security-zone/home.htm) documentation.

**Note:** For Cloud Guard, you can perform Create, Update, and Delete operations only from the reporting region of your Cloud Guard tenancy. You can perform Read operations from any region.

 * OpenAPI spec version: 20200131
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
 * The information about new Target.
 */
export interface CreateTargetDetails {
  /**
    * DetectorTemplate identifier.
* <p>
Avoid entering confidential information.
* 
    */
  "displayName": string;
  /**
   * Compartment Identifier where the resource is created
   */
  "compartmentId": string;
  /**
    * The target description.
* <p>
Avoid entering confidential information.
* 
    */
  "description"?: string;
  /**
   * possible type of targets(COMPARTMENT/FACLOUD)
   */
  "targetResourceType": model.TargetResourceType;
  /**
   * Resource ID which the target uses to monitor
   */
  "targetResourceId": string;
  /**
   * List of detector recipes to associate with target
   */
  "targetDetectorRecipes"?: Array<model.CreateTargetDetectorRecipeDetails>;
  /**
   * List of responder recipes to associate with target
   */
  "targetResponderRecipes"?: Array<model.CreateTargetResponderRecipeDetails>;
  /**
   * The current state of the DetectorRule.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* Example: `{\"bar-key\": \"value\"}`
* <p>
Avoid entering confidential information.
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

export namespace CreateTargetDetails {
  export function getJsonObj(obj: CreateTargetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetDetectorRecipes": obj.targetDetectorRecipes
          ? obj.targetDetectorRecipes.map(item => {
              return model.CreateTargetDetectorRecipeDetails.getJsonObj(item);
            })
          : undefined,
        "targetResponderRecipes": obj.targetResponderRecipes
          ? obj.targetResponderRecipes.map(item => {
              return model.CreateTargetResponderRecipeDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateTargetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targetDetectorRecipes": obj.targetDetectorRecipes
          ? obj.targetDetectorRecipes.map(item => {
              return model.CreateTargetDetectorRecipeDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "targetResponderRecipes": obj.targetResponderRecipes
          ? obj.targetResponderRecipes.map(item => {
              return model.CreateTargetResponderRecipeDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
