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
 * The collection of the counts of different level or type of alert logs.
 */
export interface AlertLogCountsCollection {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * An array of the counts of different urgency or type of alert logs.
   */
  "items": Array<model.AlertLogCountSummary>;
}

export namespace AlertLogCountsCollection {
  export function getJsonObj(obj: AlertLogCountsCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AlertLogCountSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlertLogCountsCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.AlertLogCountSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
