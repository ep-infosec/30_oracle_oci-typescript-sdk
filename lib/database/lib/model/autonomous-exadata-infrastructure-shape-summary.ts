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
* The shape of the Autonomous Exadata Infrastructure. The shape determines resources to allocate to the Autonomous Exadata Infrastructure (CPU cores, memory and storage).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator.
* If you're an administrator who needs to write policies to give users access,
* see [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface AutonomousExadataInfrastructureShapeSummary {
  /**
   * The name of the shape used for the Autonomous Exadata Infrastructure.
   */
  "name": string;
  /**
   * The maximum number of CPU cores that can be enabled on the Autonomous Exadata Infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCoreCount": number;
  /**
   * The minimum number of CPU cores that can be enabled on the Autonomous Exadata Infrastructure. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minimumCoreCount"?: number;
  /**
   * The increment in which core count can be increased or decreased. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "coreCountIncrement"?: number;
  /**
   * The minimum number of nodes available for the shape. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minimumNodeCount"?: number;
  /**
   * The maximum number of nodes available for the shape. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maximumNodeCount"?: number;
}

export namespace AutonomousExadataInfrastructureShapeSummary {
  export function getJsonObj(obj: AutonomousExadataInfrastructureShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousExadataInfrastructureShapeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
