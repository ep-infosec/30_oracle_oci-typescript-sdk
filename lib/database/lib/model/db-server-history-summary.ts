/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of a database server maintenance history.
 */
export interface DbServerHistorySummary {
  /**
   * The OCID of the database server.
   */
  "id": string;
  /**
   * The user-friendly name for the database server. The name does not need to be unique.
   */
  "displayName"?: string;
  "dbServerPatchingDetails"?: model.DbServerPatchingDetails;
}

export namespace DbServerHistorySummary {
  export function getJsonObj(obj: DbServerHistorySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServerPatchingDetails": obj.dbServerPatchingDetails
          ? model.DbServerPatchingDetails.getJsonObj(obj.dbServerPatchingDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbServerHistorySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServerPatchingDetails": obj.dbServerPatchingDetails
          ? model.DbServerPatchingDetails.getDeserializedJsonObj(obj.dbServerPatchingDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
