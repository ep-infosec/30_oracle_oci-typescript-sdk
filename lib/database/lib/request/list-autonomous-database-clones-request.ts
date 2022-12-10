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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListAutonomousDatabaseClones.ts.html |here} to see how to use ListAutonomousDatabaseClonesRequest.
 */
export interface ListAutonomousDatabaseClonesRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The database [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "autonomousDatabaseId": string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
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
  "sortOrder"?: ListAutonomousDatabaseClonesRequest.SortOrder;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * The field to sort by.  You can provide one sort order (`sortOrder`).  Default order for TIMECREATED is descending.  Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.
   * <p>
   **Note:** If you do not include the availability domain filter, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListAutonomousDatabaseClonesRequest.SortBy;
  /**
   * A filter to return only resources that match the given clone type exactly.
   */
  "cloneType"?: ListAutonomousDatabaseClonesRequest.CloneType;
}

export namespace ListAutonomousDatabaseClonesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    None = "NONE",
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum CloneType {
    RefreshableClone = "REFRESHABLE_CLONE"
  }
}