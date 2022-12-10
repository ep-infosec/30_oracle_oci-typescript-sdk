/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The summary of Pluggable Databases (PDBs) and their resource usage metrics, within a specific Container Database (CDB).
 */
export interface PdbMetrics {
  /**
   * A summary of PDBs and their resource usage metrics such as CPU, User I/O, and Storage, within a specific CDB.
   */
  "databaseUsageMetrics": Array<model.DatabaseUsageMetrics>;
}

export namespace PdbMetrics {
  export function getJsonObj(obj: PdbMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseUsageMetrics": obj.databaseUsageMetrics
          ? obj.databaseUsageMetrics.map(item => {
              return model.DatabaseUsageMetrics.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PdbMetrics): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseUsageMetrics": obj.databaseUsageMetrics
          ? obj.databaseUsageMetrics.map(item => {
              return model.DatabaseUsageMetrics.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}