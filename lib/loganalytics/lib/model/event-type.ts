/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * The event type.
 */
export interface EventType {
  /**
   * The name of the event type.
   */
  "eventTypeName"?: string;
  /**
   * The version.
   */
  "specVersion"?: string;
  /**
   * A flag indicating whether or not the event type is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * A flag indicating whether or not the event type is user defined.
   *
   */
  "isSystem"?: boolean;
  /**
   * The last updated time.
   */
  "timeUpdated"?: Date;
}

export namespace EventType {
  export function getJsonObj(obj: EventType): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EventType): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}