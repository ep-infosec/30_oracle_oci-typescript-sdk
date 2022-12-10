/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListMaintenanceRuns.ts.html |here} to see how to use ListMaintenanceRunsRequest.
 */
export interface ListMaintenanceRunsRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The target resource ID.
   */
  "targetResourceId"?: string;
  /**
   * The type of the target resource.
   */
  "targetResourceType"?: string;
  /**
   * The maintenance type.
   */
  "maintenanceType"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIME_SCHEDULED and TIME_ENDED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.
   * <p>
   **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListMaintenanceRunsRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: ListMaintenanceRunsRequest.SortOrder;
  /**
   * A filter to return only resources that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the given availability domain exactly.
   */
  "availabilityDomain"?: string;
  /**
   * The sub-type of the maintenance run.
   */
  "maintenanceSubtype"?: string;
}

export namespace ListMaintenanceRunsRequest {
  export enum SortBy {
    TimeScheduled = "TIME_SCHEDULED",
    TimeEnded = "TIME_ENDED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
