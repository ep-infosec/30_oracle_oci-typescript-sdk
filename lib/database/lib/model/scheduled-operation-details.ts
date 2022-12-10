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
 * Details of scheduled operation.
 *
 */
export interface ScheduledOperationDetails {
  "dayOfWeek": model.DayOfWeek;
  /**
   * auto start time. value must be of ISO-8601 format \"HH:mm\"
   */
  "scheduledStartTime"?: string;
  /**
   * auto stop time. value must be of ISO-8601 format \"HH:mm\"
   */
  "scheduledStopTime"?: string;
}

export namespace ScheduledOperationDetails {
  export function getJsonObj(obj: ScheduledOperationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dayOfWeek": obj.dayOfWeek ? model.DayOfWeek.getJsonObj(obj.dayOfWeek) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduledOperationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "dayOfWeek": obj.dayOfWeek
          ? model.DayOfWeek.getDeserializedJsonObj(obj.dayOfWeek)
          : undefined
      }
    };

    return jsonObj;
  }
}
