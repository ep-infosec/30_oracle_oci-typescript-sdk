/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Replication filter rule for a channel.
 */
export interface ChannelFilter {
  /**
    * The type of the filter rule.
* <p>
For details on each type, see
* [Replication Filtering Rules](https://dev.mysql.com/doc/refman/8.0/en/replication-rules.html)
* 
    */
  "type": ChannelFilter.Type;
  /**
   * The body of the filter rule. This can represent a database, a table, or a database pair (represented as
   * \"db1->db2\"). For more information, see
   * [Replication Filtering Rules](https://dev.mysql.com/doc/refman/8.0/en/replication-rules.html).
   *
   */
  "value": string;
}

export namespace ChannelFilter {
  export enum Type {
    ReplicateDoDb = "REPLICATE_DO_DB",
    ReplicateIgnoreDb = "REPLICATE_IGNORE_DB",
    ReplicateDoTable = "REPLICATE_DO_TABLE",
    ReplicateIgnoreTable = "REPLICATE_IGNORE_TABLE",
    ReplicateWildDoTable = "REPLICATE_WILD_DO_TABLE",
    ReplicateWildIgnoreTable = "REPLICATE_WILD_IGNORE_TABLE",
    ReplicateRewriteDb = "REPLICATE_REWRITE_DB",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ChannelFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChannelFilter): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
