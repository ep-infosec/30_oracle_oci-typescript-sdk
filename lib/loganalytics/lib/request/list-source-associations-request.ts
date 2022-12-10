/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListSourceAssociations.ts.html |here} to see how to use ListSourceAssociationsRequest.
 */
export interface ListSourceAssociationsRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The souce name used for filtering associations.
   */
  "sourceName": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The entity OCID.
   *
   */
  "entityId"?: string;
  /**
   * The life cycle state used for filtering.  Only associations with the specified
   * life cycle state will be returned.
   *
   */
  "lifeCycleState"?: ListSourceAssociationsRequest.LifeCycleState;
  /**
   * A flag indicating whether or not to return the total number of items returned.
   */
  "isShowTotal"?: boolean;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListSourceAssociationsRequest.SortOrder;
  /**
   * The attribute used to sort the returned associations
   */
  "sortBy"?: ListSourceAssociationsRequest.SortBy;
}

export namespace ListSourceAssociationsRequest {
  export enum LifeCycleState {
    All = "ALL",
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    EntityName = "entityName",
    TimeLastAttempted = "timeLastAttempted",
    Status = "status"
  }
}
