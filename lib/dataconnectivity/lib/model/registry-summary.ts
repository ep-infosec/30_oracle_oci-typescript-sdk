/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
 * The summary of a registry.
 */
export interface RegistrySummary {
  /**
   * A unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Registry description.
   */
  "description"?: string;
  /**
   * The Data Connectivity Management registry display name; registries can be renamed.
   */
  "displayName": string;
  /**
   * Compartment Identifier
   */
  "compartmentId"?: string;
  /**
   * Time when the Data Connectivity Management registry was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * Time when the Data Connectivity Management registry was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists only for cross-compatibility.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Name of the user who updated the DCMS Registry.
   */
  "updatedBy"?: string;
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current state of the registry.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "stateMessage"?: string;
}

export namespace RegistrySummary {
  export function getJsonObj(obj: RegistrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RegistrySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}