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
 * Details of the database for the registration in Data Safe.
 * To choose applicable database type and infrastructure type refer to
 * https://confluence.oci.oraclecorp.com/display/DATASAFE/Target+V2+Design
 *
 */
export interface DatabaseDetails {
  /**
   * The infrastructure type the database is running on.
   */
  "infrastructureType": model.InfrastructureType;

  "databaseType": string;
}

export namespace DatabaseDetails {
  export function getJsonObj(obj: DatabaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "databaseType" in obj && obj.databaseType) {
      switch (obj.databaseType) {
        case "INSTALLED_DATABASE":
          return model.InstalledDatabaseDetails.getJsonObj(
            <model.InstalledDatabaseDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseDetails.getJsonObj(
            <model.AutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        case "DATABASE_CLOUD_SERVICE":
          return model.DatabaseCloudServiceDetails.getJsonObj(
            <model.DatabaseCloudServiceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.databaseType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "databaseType" in obj && obj.databaseType) {
      switch (obj.databaseType) {
        case "INSTALLED_DATABASE":
          return model.InstalledDatabaseDetails.getDeserializedJsonObj(
            <model.InstalledDatabaseDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseDetails.getDeserializedJsonObj(
            <model.AutonomousDatabaseDetails>(<object>jsonObj),
            true
          );
        case "DATABASE_CLOUD_SERVICE":
          return model.DatabaseCloudServiceDetails.getDeserializedJsonObj(
            <model.DatabaseCloudServiceDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.databaseType}`);
      }
    }
    return jsonObj;
  }
}
