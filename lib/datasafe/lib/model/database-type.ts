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
 * The type of the database. Allowed values are
 *   - DATABASE_CLOUD_SERVICE - Represents Oracle Database Cloud Services.
 *   - AUTONOMOUS_DATABASE - Represents Oracle Autonomous Databases.
 *   - INSTALLED_DATABASE - Represents databases running on-premises or on compute instances.
 *
 **/
export enum DatabaseType {
  DatabaseCloudService = "DATABASE_CLOUD_SERVICE",
  AutonomousDatabase = "AUTONOMOUS_DATABASE",
  InstalledDatabase = "INSTALLED_DATABASE",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DatabaseType {
  export function getJsonObj(obj: DatabaseType): DatabaseType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DatabaseType): DatabaseType {
    return obj;
  }
}
