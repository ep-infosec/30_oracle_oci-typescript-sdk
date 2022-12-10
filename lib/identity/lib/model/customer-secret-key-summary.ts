/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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
 * As the name suggests, a `CustomerSecretKeySummary` object contains information about a `CustomerSecretKey`.
 * A `CustomerSecretKey` is an Oracle-provided key for using the Object Storage Service's Amazon S3 compatible API.
 *
 */
export interface CustomerSecretKeySummary {
  /**
   * The OCID of the secret key.
   */
  "id"?: string;
  /**
   * The OCID of the user the password belongs to.
   */
  "userId"?: string;
  /**
   * The displayName you assign to the secret key. Does not have to be unique, and it's changeable.
   */
  "displayName"?: string;
  /**
    * Date and time the `CustomerSecretKey` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * Date and time when this password will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeExpires"?: Date;
  /**
   * The secret key's current state. After creating a secret key, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState"?: CustomerSecretKeySummary.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
}

export namespace CustomerSecretKeySummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CustomerSecretKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomerSecretKeySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}