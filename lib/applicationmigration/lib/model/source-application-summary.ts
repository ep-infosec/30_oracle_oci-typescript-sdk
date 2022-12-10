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
 * The properties that define an application, that is running in the source environment and which can be migrated to Oracle
 * Cloud Infrastructure.
 *
 */
export interface SourceApplicationSummary {
  /**
   * The name of the application.
   */
  "name"?: string;
  /**
   * The type of the application.
   */
  "type"?: model.MigrationTypes;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the source to which the application belongs.
   */
  "sourceId"?: string;
  /**
   * The version of the application.
   */
  "version"?: string;
  /**
   * The current state of the application.
   */
  "state"?: string;
}

export namespace SourceApplicationSummary {
  export function getJsonObj(obj: SourceApplicationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceApplicationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}