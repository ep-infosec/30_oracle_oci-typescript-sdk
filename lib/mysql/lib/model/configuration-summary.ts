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
 * The general details of a Configuration such as its id, displayName, type, and shape association.
 *
 */
export interface ConfigurationSummary {
  /**
   * The OCID of the Configuration.
   */
  "id": string;
  /**
   * OCID of the Compartment the Configuration exists in.
   */
  "compartmentId": string;
  /**
   * User-provided data about the Configuration.
   */
  "description"?: string;
  /**
   * The display name of the Configuration.
   */
  "displayName"?: string;
  /**
   * The name of the associated Shape.
   */
  "shapeName": string;
  /**
   * The Configuration type, DEFAULT or CUSTOM
   */
  "type": string;
  /**
   * The current state of the Configuration.
   */
  "lifecycleState": string;
  /**
   * The date and time the Configuration was created, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The date and time the Configuration was last updated, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ConfigurationSummary {
  export function getJsonObj(obj: ConfigurationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigurationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}