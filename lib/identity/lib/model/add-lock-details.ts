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
 * Request payload to add lock to the resource.
 *
 */
export interface AddLockDetails {
  /**
   * Type of the lock.
   */
  "type": AddLockDetails.Type;
  /**
   * The ID of the resource that is locking this resource. Indicates that deleting this resource will remove the lock.
   *
   */
  "relatedResourceId"?: string;
  /**
   * A message added by the creator of the lock. This is typically used to give an
   * indication of why the resource is locked.
   *
   */
  "message"?: string;
}

export namespace AddLockDetails {
  export enum Type {
    Full = "FULL",
    Delete = "DELETE"
  }

  export function getJsonObj(obj: AddLockDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddLockDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
