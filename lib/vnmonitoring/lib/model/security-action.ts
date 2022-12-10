/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * Defines the security action details taken on the traffic.
 */
export interface SecurityAction {
  /**
   * Type of the `SecurityAction`.
   */
  "actionType": SecurityAction.ActionType;

  "action": string;
}

export namespace SecurityAction {
  export enum ActionType {
    Explicit = "EXPLICIT",
    Implicit = "IMPLICIT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecurityAction): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "action" in obj && obj.action) {
      switch (obj.action) {
        case "ALLOWED":
          return model.AllowedSecurityAction.getJsonObj(
            <model.AllowedSecurityAction>(<object>jsonObj),
            true
          );
        case "DENIED":
          return model.DeniedSecurityAction.getJsonObj(
            <model.DeniedSecurityAction>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.action}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityAction): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "action" in obj && obj.action) {
      switch (obj.action) {
        case "ALLOWED":
          return model.AllowedSecurityAction.getDeserializedJsonObj(
            <model.AllowedSecurityAction>(<object>jsonObj),
            true
          );
        case "DENIED":
          return model.DeniedSecurityAction.getDeserializedJsonObj(
            <model.DeniedSecurityAction>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.action}`);
      }
    }
    return jsonObj;
  }
}