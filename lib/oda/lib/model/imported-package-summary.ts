/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * A summary of an imported/instantiated package within an instance.
 */
export interface ImportedPackageSummary {
  /**
   * ID of the host instance.
   */
  "odaInstanceId": string;
  /**
   * ID of the package.
   */
  "currentPackageId": string;
  /**
   * Stable name of the package (the same across versions).
   */
  "name": string;
  /**
   * Display name of the package (can change across versions).
   */
  "displayName": string;
  /**
   * version of the package.
   */
  "version": string;
  /**
   * Status of the imported package.
   */
  "status": string;
  /**
   * When the imported package was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated": Date;
  /**
   * When the imported package was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ImportedPackageSummary {
  export function getJsonObj(obj: ImportedPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportedPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
