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
 * From which backup this DB System was created.
 *
 */
export interface DbSystemSourceFromBackup extends model.DbSystemSource {
  /**
   * The OCID of the backup to be used as the source for the new DB System.
   *
   */
  "backupId": string;

  "sourceType": string;
}

export namespace DbSystemSourceFromBackup {
  export function getJsonObj(obj: DbSystemSourceFromBackup, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbSystemSource.getJsonObj(obj) as DbSystemSourceFromBackup)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "BACKUP";
  export function getDeserializedJsonObj(
    obj: DbSystemSourceFromBackup,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DbSystemSource.getDeserializedJsonObj(obj) as DbSystemSourceFromBackup)),
      ...{}
    };

    return jsonObj;
  }
}
