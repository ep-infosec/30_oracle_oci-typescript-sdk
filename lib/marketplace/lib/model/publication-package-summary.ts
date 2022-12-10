/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for a summary of a publication package.
 */
export interface PublicationPackageSummary {
  /**
   * The ID of the listing that the specified package belongs to.
   */
  "listingId": string;
  /**
   * The version of the specified package.
   */
  "packageVersion": string;
  /**
   * The specified package's type.
   */
  "packageType": model.PackageTypeEnum;
  /**
   * The unique identifier for the package resource.
   */
  "resourceId": string;
  /**
    * The date and time the publication package was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace PublicationPackageSummary {
  export function getJsonObj(obj: PublicationPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PublicationPackageSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}