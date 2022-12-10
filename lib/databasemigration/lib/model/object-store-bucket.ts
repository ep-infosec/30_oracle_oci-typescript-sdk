/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * In lieu of a network database link, OCI Object Storage bucket will be used to store Data Pump dump files for the migration.
 * Additionally, it can be specified alongside a database link data transfer medium.
 *
 */
export interface ObjectStoreBucket {
  /**
   * Namespace name of the object store bucket.
   *
   */
  "namespaceName": string;
  /**
   * Bucket name.
   *
   */
  "bucketName": string;
}

export namespace ObjectStoreBucket {
  export function getJsonObj(obj: ObjectStoreBucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectStoreBucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
