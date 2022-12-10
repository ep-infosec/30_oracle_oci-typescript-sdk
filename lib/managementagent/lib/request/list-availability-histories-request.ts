/**
 *
 *
 * OpenAPI spec version: 20200202
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/managementagent/ListAvailabilityHistories.ts.html |here} to see how to use ListAvailabilityHistoriesRequest.
 */
export interface ListAvailabilityHistoriesRequest extends common.BaseRequest {
  /**
   * Unique Management Agent identifier
   */
  "managementAgentId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * Filter to limit the availability history results to that of time after the input time including the boundary record.
   * Defaulted to current date minus one year.
   * The date and time to be given as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAvailabilityStatusEndedGreaterThan"?: Date;
  /**
   * Filter to limit the availability history results to that of time before the input time including the boundary record
   * Defaulted to current date.
   * The date and time to be given as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAvailabilityStatusStartedLessThan"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: ListAvailabilityHistoriesRequest.SortOrder;
  /**
   * The field to sort by. Default order for timeAvailabilityStatusStarted is descending.
   *
   */
  "sortBy"?: ListAvailabilityHistoriesRequest.SortBy;
}

export namespace ListAvailabilityHistoriesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeAvailabilityStatusStarted = "timeAvailabilityStatusStarted"
  }
}
