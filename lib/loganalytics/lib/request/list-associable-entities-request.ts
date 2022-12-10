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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListAssociableEntities.ts.html |here} to see how to use ListAssociableEntitiesRequest.
 */
export interface ListAssociableEntitiesRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The source name.
   */
  "sourceName": string;
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The entity type - either eligible or ineligible for association.
   */
  "type"?: ListAssociableEntitiesRequest.Type;
  /**
   * The text used for filtering returned entities.  Search text is applicable to the
   * entity name and the entity description.
   *
   */
  "searchText"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The attribute used to sort the returned entities
   */
  "sortBy"?: ListAssociableEntitiesRequest.SortBy;
  /**
   * The sort order to use, either ascending (`ASC`) or descending (`DESC`).
   *
   */
  "sortOrder"?: ListAssociableEntitiesRequest.SortOrder;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListAssociableEntitiesRequest {
  export enum Type {
    Eligible = "ELIGIBLE",
    Ineligible = "INELIGIBLE"
  }

  export enum SortBy {
    EntityName = "entityName",
    EntityTypeName = "entityTypeName",
    Host = "host",
    AgentId = "agentId"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}