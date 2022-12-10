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
 * An extension of the existing record resource, describing either a
 * precondition, an add, or a remove. Preconditions check all fields,
 * including read-only data like `recordHash` and `rrsetVersion`.
 *
 */
export interface RecordOperation {
  /**
   * The fully qualified domain name where the record can be located.
   *
   */
  "domain"?: string;
  /**
   * A unique identifier for the record within its zone.
   *
   */
  "recordHash"?: string;
  /**
   * A Boolean flag indicating whether or not parts of the record
   * are unable to be explicitly managed.
   *
   */
  "isProtected"?: boolean;
  /**
   * The record's data, as whitespace-delimited tokens in
   * type-specific presentation format. All RDATA is normalized and the
   * returned presentation of your RDATA may differ from its initial input.
   * For more information about RDATA, see [Supported DNS Resource Record Types](https://docs.cloud.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm)
   *
   */
  "rdata"?: string;
  /**
   * The latest version of the record's zone in which its RRSet differs
   * from the preceding version.
   *
   */
  "rrsetVersion"?: string;
  /**
   * The type of DNS record, such as A or CNAME. For more information, see [Resource Record (RR) TYPEs](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).
   *
   */
  "rtype"?: string;
  /**
   * The Time To Live for the record, in seconds. Using a TTL lower than 30 seconds is not recommended.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ttl"?: number;
  /**
    * A description of how a record relates to a PATCH operation.
* <p>

* - `REQUIRE` indicates a precondition that record data **must** already exist.
* - `PROHIBIT` indicates a precondition that record data **must not** already exist.
* - `ADD` indicates that record data **must** exist after successful application.
* - `REMOVE` indicates that record data **must not** exist after successful application.
* <p>

*   **Note:** `ADD` and `REMOVE` operations can succeed even if
*   they require no changes when applied, such as when the described
*   records are already present or absent.
* <p>

*   **Note:** `ADD` and `REMOVE` operations can describe changes for
*   more than one record.
* <p>

*   **Example:** `{ \"domain\": \"www.example.com\", \"rtype\": \"AAAA\", \"ttl\": 60 }`
*   specifies a new TTL for every record in the www.example.com AAAA RRSet.
* 
    */
  "operation"?: RecordOperation.Operation;
}

export namespace RecordOperation {
  export enum Operation {
    Require = "REQUIRE",
    Prohibit = "PROHIBIT",
    Add = "ADD",
    Remove = "REMOVE"
  }

  export function getJsonObj(obj: RecordOperation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecordOperation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
