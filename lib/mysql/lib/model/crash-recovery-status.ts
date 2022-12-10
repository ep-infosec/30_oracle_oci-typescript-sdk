/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Whether to run the DB System with InnoDB Redo Logs and the Double Write Buffer enabled or disabled,
 * and whether to enable or disable syncing of the Binary Logs.
 *
 **/
export enum CrashRecoveryStatus {
  Enabled = "ENABLED",
  Disabled = "DISABLED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace CrashRecoveryStatus {
  export function getJsonObj(obj: CrashRecoveryStatus): CrashRecoveryStatus {
    return obj;
  }
  export function getDeserializedJsonObj(obj: CrashRecoveryStatus): CrashRecoveryStatus {
    return obj;
  }
}