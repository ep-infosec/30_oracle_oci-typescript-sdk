/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * A base object for creating a publication package.
 */
export interface CreatePublicationPackage {
  /**
   * The package version.
   */
  "packageVersion": string;
  "operatingSystem": model.OperatingSystem;
  /**
   * The end user license agreeement (EULA) that consumers of this listing must accept.
   */
  "eula": Array<model.Eula>;

  "packageType": string;
}

export namespace CreatePublicationPackage {
  export function getJsonObj(obj: CreatePublicationPackage): object {
    const jsonObj = {
      ...obj,
      ...{
        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getJsonObj(obj.operatingSystem)
          : undefined,
        "eula": obj.eula
          ? obj.eula.map(item => {
              return model.Eula.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "IMAGE":
          return model.CreateImagePublicationPackage.getJsonObj(
            <model.CreateImagePublicationPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePublicationPackage): object {
    const jsonObj = {
      ...obj,
      ...{
        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getDeserializedJsonObj(obj.operatingSystem)
          : undefined,
        "eula": obj.eula
          ? obj.eula.map(item => {
              return model.Eula.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "IMAGE":
          return model.CreateImagePublicationPackage.getDeserializedJsonObj(
            <model.CreateImagePublicationPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
}