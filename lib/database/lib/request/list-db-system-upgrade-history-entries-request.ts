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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListDbSystemUpgradeHistoryEntries.ts.html |here} to see how to use ListDbSystemUpgradeHistoryEntriesRequest.
 */
export interface ListDbSystemUpgradeHistoryEntriesRequest extends common.BaseRequest {
  /**
   * The DB system [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "dbSystemId": string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   */
  "sortOrder"?: ListDbSystemUpgradeHistoryEntriesRequest.SortOrder;
  /**
   * The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is ascending.
   *
   */
  "sortBy"?: ListDbSystemUpgradeHistoryEntriesRequest.SortBy;
  /**
   * A filter to return only upgradeHistoryEntries that match the specified Upgrade Action.
   */
  "upgradeAction"?: string;
  /**
   * A filter to return only upgrade history entries that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListDbSystemUpgradeHistoryEntriesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timestarted = "TIMESTARTED"
  }
}
