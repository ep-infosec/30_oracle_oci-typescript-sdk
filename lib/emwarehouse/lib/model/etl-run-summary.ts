/**
 * EM Warehouse API
 * Use the EM Warehouse API to manage EM Warehouse data collection.
 * OpenAPI spec version: 20180828
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
 * Contains summary of a run.
 */
export interface EtlRunSummary {
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * Data read by the dataflow run Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataReadInBytes"?: number;
  /**
   * Data written by the dataflow run Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataWritten"?: number;
  /**
   * The current state of the etlRun.
   */
  "lifecycleState"?: EtlRunSummary.LifecycleState;
  /**
   * The name of the ETLRun.
   */
  "displayName"?: string;
  /**
   * Details of the lifecycle state
   */
  "lifecycleDetails"?: string;
  /**
   * Dataflow run duration Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "runDurationInMilliseconds"?: number;
  /**
   * Time when the dataflow run was created
   */
  "timeCreated"?: Date;
  /**
   * Time when the dataflow run was updated
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

export namespace EtlRunSummary {
  export enum LifecycleState {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: EtlRunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EtlRunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}