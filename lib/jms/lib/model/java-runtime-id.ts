/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * The essential properties to identify a Java Runtime.
 */
export interface JavaRuntimeId {
  /**
   * The version of the Java Runtime.
   */
  "version": string;
  /**
   * The vendor of the Java Runtime.
   */
  "vendor": string;
  /**
   * The distribution of a Java Runtime is the name of the lineage of product to which it belongs, for example _Java(TM) SE Runtime Environment_.
   */
  "distribution": string;
  /**
   * The unique identifier for a Java Runtime.
   */
  "jreKey"?: string;
}

export namespace JavaRuntimeId {
  export function getJsonObj(obj: JavaRuntimeId): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaRuntimeId): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}