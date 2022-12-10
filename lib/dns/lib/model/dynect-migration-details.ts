/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * Details specific to performing a DynECT zone migration.
 *
 */
export interface DynectMigrationDetails {
  /**
   * DynECT customer name the zone belongs to.
   *
   */
  "customerName": string;
  /**
   * DynECT API username to perform the migration with.
   *
   */
  "username": string;
  /**
   * DynECT API password for the provided username.
   *
   */
  "password": string;
  /**
   * A map of fully-qualified domain names (FQDNs) to an array of `MigrationReplacement` objects.
   *
   */
  "httpRedirectReplacements"?: { [key: string]: Array<model.MigrationReplacement> };
}

export namespace DynectMigrationDetails {
  export function getJsonObj(obj: DynectMigrationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DynectMigrationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
