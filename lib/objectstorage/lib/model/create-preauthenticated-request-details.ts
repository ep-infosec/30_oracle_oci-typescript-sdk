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

export interface CreatePreauthenticatedRequestDetails {
  /**
   * A user-specified name for the pre-authenticated request. Names can be helpful in managing pre-authenticated requests.
   * Avoid entering confidential information.
   *
   */
  "name": string;
  /**
   * Specifies whether a list operation is allowed on a PAR with accessType \"AnyObjectRead\" or \"AnyObjectReadWrite\".
   * Deny: Prevents the user from performing a list operation.
   * ListObjects: Authorizes the user to perform a list operation.
   *
   */
  "bucketListingAction"?: string;
  /**
   * The name of the object that is being granted access to by the pre-authenticated request. Avoid entering confidential
   * information. The object name can be null and if so, the pre-authenticated request grants access to the entire bucket
   * if the access type allows that. The object name can be a prefix as well, in that case pre-authenticated request
   * grants access to all the objects within the bucket starting with that prefix provided that we have the correct access type.
   *
   */
  "objectName"?: string;
  /**
   * The operation that can be performed on this resource.
   */
  "accessType": CreatePreauthenticatedRequestDetails.AccessType;
  /**
   * The expiration date for the pre-authenticated request as per [RFC 3339](https://tools.ietf.org/html/rfc3339).
   * After this date the pre-authenticated request will no longer be valid.
   *
   */
  "timeExpires": Date;
}

export namespace CreatePreauthenticatedRequestDetails {
  export enum AccessType {
    ObjectRead = "ObjectRead",
    ObjectWrite = "ObjectWrite",
    ObjectReadWrite = "ObjectReadWrite",
    AnyObjectWrite = "AnyObjectWrite",
    AnyObjectRead = "AnyObjectRead",
    AnyObjectReadWrite = "AnyObjectReadWrite"
  }

  export function getJsonObj(obj: CreatePreauthenticatedRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePreauthenticatedRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}