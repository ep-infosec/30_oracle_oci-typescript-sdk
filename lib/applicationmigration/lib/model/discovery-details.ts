/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * Base model for different application discovery requirements.
 */
export interface DiscoveryDetails {
  "type": string;
}

export namespace DiscoveryDetails {
  export function getJsonObj(obj: DiscoveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OIC":
          return model.OicDiscoveryDetails.getJsonObj(
            <model.OicDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "PCS":
          return model.PcsDiscoveryDetails.getJsonObj(
            <model.PcsDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "ICS":
          return model.IcsDiscoveryDetails.getJsonObj(
            <model.IcsDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "OAC":
          return model.OacDiscoveryDetails.getJsonObj(
            <model.OacDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "JCS":
          return model.JcsDiscoveryDetails.getJsonObj(
            <model.JcsDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "SOACS":
          return model.SoacsDiscoveryDetails.getJsonObj(
            <model.SoacsDiscoveryDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiscoveryDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OIC":
          return model.OicDiscoveryDetails.getDeserializedJsonObj(
            <model.OicDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "PCS":
          return model.PcsDiscoveryDetails.getDeserializedJsonObj(
            <model.PcsDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "ICS":
          return model.IcsDiscoveryDetails.getDeserializedJsonObj(
            <model.IcsDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "OAC":
          return model.OacDiscoveryDetails.getDeserializedJsonObj(
            <model.OacDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "JCS":
          return model.JcsDiscoveryDetails.getDeserializedJsonObj(
            <model.JcsDiscoveryDetails>(<object>jsonObj),
            true
          );
        case "SOACS":
          return model.SoacsDiscoveryDetails.getDeserializedJsonObj(
            <model.SoacsDiscoveryDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}