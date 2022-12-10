/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The details of the request to schedule the deletion of the specified certificate authority (CA) version.
 */
export interface ScheduleCertificateAuthorityVersionDeletionDetails {
  /**
   * An optional property indicating when to delete the CA version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
}

export namespace ScheduleCertificateAuthorityVersionDeletionDetails {
  export function getJsonObj(obj: ScheduleCertificateAuthorityVersionDeletionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ScheduleCertificateAuthorityVersionDeletionDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
