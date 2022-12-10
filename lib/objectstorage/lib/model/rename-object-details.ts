/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * To use any of the API operations, you must be authorized in an IAM policy. If you are not authorized,
 * talk to an administrator. If you are an administrator who needs to write policies to give users access, see
 * [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
 *
 */
export interface RenameObjectDetails {
  /**
   * The name of the source object to be renamed.
   */
  "sourceName": string;
  /**
   * The new name of the source object. Avoid entering confidential information.
   */
  "newName": string;
  /**
   * The if-match entity tag (ETag) of the source object.
   */
  "srcObjIfMatchETag"?: string;
  /**
   * The if-match entity tag (ETag) of the new object.
   */
  "newObjIfMatchETag"?: string;
  /**
   * The if-none-match entity tag (ETag) of the new object. The only valid value is '*', which indicates
   * request should fail if the new object already exists.
   *
   */
  "newObjIfNoneMatchETag"?: string;
}

export namespace RenameObjectDetails {
  export function getJsonObj(obj: RenameObjectDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RenameObjectDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}