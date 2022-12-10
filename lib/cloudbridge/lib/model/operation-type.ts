/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Possible operation types.
 **/
export enum OperationType {
  CreateEnvironment = "CREATE_ENVIRONMENT",
  UpdateEnvironment = "UPDATE_ENVIRONMENT",
  DeleteEnvironment = "DELETE_ENVIRONMENT",
  MoveEnvironment = "MOVE_ENVIRONMENT",
  CreateOcbAgent = "CREATE_OCB_AGENT",
  UpdateOcbAgent = "UPDATE_OCB_AGENT",
  DeleteOcbAgent = "DELETE_OCB_AGENT",
  MoveOcbAgent = "MOVE_OCB_AGENT",
  CreateAgentDependency = "CREATE_AGENT_DEPENDENCY",
  UpdateAgentDependency = "UPDATE_AGENT_DEPENDENCY",
  DeleteAgentDependency = "DELETE_AGENT_DEPENDENCY",
  MoveAgentDependency = "MOVE_AGENT_DEPENDENCY",
  CreateInventory = "CREATE_INVENTORY",
  DeleteInventory = "DELETE_INVENTORY",
  ImportInventory = "IMPORT_INVENTORY",
  DeleteAssetSource = "DELETE_ASSET_SOURCE",
  RefreshAssetSource = "REFRESH_ASSET_SOURCE",
  CreateAssetSource = "CREATE_ASSET_SOURCE",
  UpdateAssetSource = "UPDATE_ASSET_SOURCE",

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