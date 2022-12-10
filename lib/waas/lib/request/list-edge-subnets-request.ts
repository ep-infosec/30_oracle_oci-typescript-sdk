/**
 *
 *
 * OpenAPI spec version: 20181116
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/waas/ListEdgeSubnets.ts.html |here} to see how to use ListEdgeSubnetsRequest.
 */
export interface ListEdgeSubnetsRequest extends common.BaseRequest {
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a paginated call. If unspecified, defaults to `10`.
   */
  "limit"?: number;
  /**
   * The value of the `opc-next-page` response header from the previous paginated call.
   */
  "page"?: string;
  /**
   * The value by which edge node subnets are sorted in a paginated 'List' call. If unspecified, defaults to `timeModified`.
   */
  "sortBy"?: ListEdgeSubnetsRequest.SortBy;
  /**
   * The value of the sorting direction of resources in a paginated 'List' call. If unspecified, defaults to `DESC`.
   */
  "sortOrder"?: ListEdgeSubnetsRequest.SortOrder;
}

export namespace ListEdgeSubnetsRequest {
  export enum SortBy {
    Cidr = "cidr",
    Region = "region",
    TimeModified = "timeModified"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}