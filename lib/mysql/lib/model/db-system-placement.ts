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
 * The availability domain and fault domain a DB System is placed in.
 */
export interface DbSystemPlacement {
  /**
   * The availability domain in which the DB System is placed.
   */
  "availabilityDomain"?: string;
  /**
   * The fault domain in which the DB System is placed.
   */
  "faultDomain"?: string;
}

export namespace DbSystemPlacement {
  export function getJsonObj(obj: DbSystemPlacement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemPlacement): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
