/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * Operation types for resources.
 **/
export enum OperationType {
  CreateDrProtectionGroup = "CREATE_DR_PROTECTION_GROUP",
  UpdateDrProtectionGroup = "UPDATE_DR_PROTECTION_GROUP",
  DeleteDrProtectionGroup = "DELETE_DR_PROTECTION_GROUP",
  MoveDrProtectionGroup = "MOVE_DR_PROTECTION_GROUP",
  AssociateDrProtectionGroup = "ASSOCIATE_DR_PROTECTION_GROUP",
  DisassociateDrProtectionGroup = "DISASSOCIATE_DR_PROTECTION_GROUP",
  UpdateRoleDrProtectionGroup = "UPDATE_ROLE_DR_PROTECTION_GROUP",
  CreateDrPlan = "CREATE_DR_PLAN",
  UpdateDrPlan = "UPDATE_DR_PLAN",
  DeleteDrPlan = "DELETE_DR_PLAN",
  CreateDrPlanExecution = "CREATE_DR_PLAN_EXECUTION",
  UpdateDrPlanExecution = "UPDATE_DR_PLAN_EXECUTION",
  DeleteDrPlanExecution = "DELETE_DR_PLAN_EXECUTION",
  RetryDrPlanExecution = "RETRY_DR_PLAN_EXECUTION",
  IgnoreDrPlanExecution = "IGNORE_DR_PLAN_EXECUTION",
  CancelDrPlanExecution = "CANCEL_DR_PLAN_EXECUTION",
  PauseDrPlanExecution = "PAUSE_DR_PLAN_EXECUTION",
  ResumeDrPlanExecution = "RESUME_DR_PLAN_EXECUTION",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}