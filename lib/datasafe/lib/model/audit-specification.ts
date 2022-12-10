/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Represents an audit policy relevant for the target database.The audit policy could be in any one of the following 3 states in the target database
 * 1) Created and enabled
 * 2) Created but not enabled
 * 3) Not created
 * For more details on relevant audit policies for the target database, refer to [documentation](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/audit-policies.html#GUID-361A9A9A-7C21-4F5A-8945-9B3A0C472827).
 *
 */
export interface AuditSpecification {
  /**
   * Indicates the audit policy name. Refer to the [documentation](https://docs.oracle.com/en/cloud/paas/data-safe/udscs/audit-policies.html#GUID-361A9A9A-7C21-4F5A-8945-9B3A0C472827) for seeded audit policy names. For custom policies, refer to the user-defined policy name created in the target database.
   *
   */
  "auditPolicyName": string;
  /**
   * Indicates the names of corresponding database policy ( or policies) in the target database.
   */
  "databasePolicyNames": Array<string>;
  /**
   * The category to which the audit policy belongs.
   */
  "auditPolicyCategory": model.AuditPolicyCategory;
  /**
   * Indicates whether the policy has been enabled, disabled or partially enabled in the target database. The status is PARTIALLY_ENABLED if any of the constituent database audit policies is not enabled.
   */
  "enableStatus": AuditSpecification.EnableStatus;
  /**
   * Provides information about the policy that has been only partially enabled.
   */
  "partiallyEnabledMsg"?: string;
  /**
   * Indicates whether the policy by default is enabled for all users with no flexibility to alter the enablement conditions.
   */
  "isEnabledForAllUsers": boolean;
  /**
   * Indicates whether the audit policy is available for provisioning/ de-provisioning from Oracle Data Safe, or is only available for displaying the current provisioning status from the target.
   */
  "isViewOnly": boolean;
  /**
   * Indicates whether the audit policy is one of the predefined policies provided by Oracle Database.
   */
  "isSeededInTarget": boolean;
  /**
   * Indicates whether the audit policy is one of the seeded policies provided by Oracle Data Safe.
   */
  "isSeededInDataSafe": boolean;
  /**
   * Indicates whether the policy is already created on the target database.
   */
  "isCreated": boolean;
  /**
   * Indicates on whom the audit policy is enabled.
   */
  "enabledEntities": AuditSpecification.EnabledEntities;
}

export namespace AuditSpecification {
  export enum EnableStatus {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    PartiallyEnabled = "PARTIALLY_ENABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum EnabledEntities {
    AllUsers = "ALL_USERS",
    IncludeUsers = "INCLUDE_USERS",
    IncludeRoles = "INCLUDE_ROLES",
    ExcludeUsers = "EXCLUDE_USERS",
    IncludeUsersRoles = "INCLUDE_USERS_ROLES",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AuditSpecification): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuditSpecification): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
