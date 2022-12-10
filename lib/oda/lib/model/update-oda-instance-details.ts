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
 * The Digital Assistant instance information to be updated.
 */
export interface UpdateOdaInstanceDetails {
  /**
   * User-friendly name for the Digital Assistant instance.
   */
  "displayName"?: string;
  /**
   * Description of the Digital Assistant instance.
   */
  "description"?: string;
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

export namespace UpdateOdaInstanceDetails {
  export function getJsonObj(obj: UpdateOdaInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateOdaInstanceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
