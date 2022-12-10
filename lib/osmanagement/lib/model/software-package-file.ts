/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * A file associated with a package
 */
export interface SoftwarePackageFile {
  /**
   * file path
   */
  "path"?: string;
  /**
   * type of the file
   */
  "type"?: string;
  /**
   * The date and time of the last modification to this file, as described
   * in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeModified"?: Date;
  /**
   * checksum of the file
   */
  "checksum"?: string;
  /**
   * type of the checksum
   */
  "checksumType"?: string;
  /**
   * size of the file in bytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes"?: number;
}

export namespace SoftwarePackageFile {
  export function getJsonObj(obj: SoftwarePackageFile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SoftwarePackageFile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}