/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ons/ListTopics.ts.html |here} to see how to use ListTopicsRequest.
 */
export interface ListTopicsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * A filter to only return resources that match the given id exactly.
   *
   */
  "id"?: string;
  /**
   * A filter to only return resources that match the given name exactly.
   *
   */
  "name"?: string;
  /**
   * For list pagination. The value of the opc-next-page response header from the previous \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
   * For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * The field to sort by. Only one field can be selected for sorting.
   *
   */
  "sortBy"?: ListTopicsRequest.SortBy;
  /**
   * The sort order to use (ascending or descending).
   *
   */
  "sortOrder"?: ListTopicsRequest.SortOrder;
  /**
   * Filter returned list by specified lifecycle state. This parameter is case-insensitive.
   *
   */
  "lifecycleState"?: string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListTopicsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Lifecyclestate = "LIFECYCLESTATE"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}