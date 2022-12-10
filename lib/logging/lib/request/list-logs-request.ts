/**
 *
 *
 * OpenAPI spec version: 20200531
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/logging/ListLogs.ts.html |here} to see how to use ListLogsRequest.
 */
export interface ListLogsRequest extends common.BaseRequest {
  /**
   * OCID of a log group to work with.
   */
  "logGroupId": string;
  /**
   * The logType that the log object is for, whether custom or service.
   */
  "logType"?: ListLogsRequest.LogType;
  /**
   * Service that created the log object.
   */
  "sourceService"?: string;
  /**
   * Log object resource.
   */
  "sourceResource"?: string;
  /**
   * Resource name
   */
  "displayName"?: string;
  /**
   * Lifecycle state of the log object
   */
  "lifecycleState"?: model.LogLifecycleState;
  /**
   * For list pagination. The value of the `opc-next-page` or `opc-previous-page` response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The field to sort by (one column only). Default sort order is
   * ascending exception of `timeCreated` and `timeLastModified` columns (descending).
   *
   */
  "sortBy"?: ListLogsRequest.SortBy;
  /**
   * The sort order to use, whether 'asc' or 'desc'.
   *
   */
  "sortOrder"?: ListLogsRequest.SortOrder;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListLogsRequest {
  export enum LogType {
    Custom = "CUSTOM",
    Service = "SERVICE"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
