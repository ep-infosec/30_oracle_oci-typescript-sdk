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
 * Summary of the ResponderRule.
 */
export interface ResponderRuleSummary {
  /**
   * Identifier for ResponderRule.
   */
  "id": string;
  /**
   * ResponderRule Display Name
   */
  "displayName": string;
  /**
   * ResponderRule Description
   */
  "description": string;
  /**
   * Type of Responder
   */
  "type": model.ResponderType;
  /**
   * List of Policy
   */
  "policies"?: Array<string>;
  /**
   * Supported Execution Modes
   */
  "supportedModes"?: Array<ResponderRuleSummary.SupportedModes>;
  "details"?: model.ResponderRuleDetails;
  /**
   * The date and time the responder rule was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the responder rule was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the ResponderRule.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace ResponderRuleSummary {
  export enum SupportedModes {
    Autoaction = "AUTOACTION",
    Useraction = "USERACTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResponderRuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details ? model.ResponderRuleDetails.getJsonObj(obj.details) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponderRuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.ResponderRuleDetails.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}