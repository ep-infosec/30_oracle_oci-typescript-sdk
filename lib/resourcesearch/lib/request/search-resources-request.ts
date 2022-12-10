/**
 *
 *
 * OpenAPI spec version: 20180409
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/resourcesearch/SearchResources.ts.html |here} to see how to use SearchResourcesRequest.
 */
export interface SearchResourcesRequest extends common.BaseRequest {
  /**
   * Request parameters that describe query criteria. For more information, see {@link #searchDetails(SearchDetailsRequest) searchDetails}.
   *
   */
  "searchDetails": model.StructuredSearchDetails | model.FreeTextSearchDetails;
  /**
   * The maximum number of items to return. The value must be between 1 and 1000.
   */
  "limit"?: number;
  /**
   * The page at which to start retrieving results.
   */
  "page"?: string;
  /**
   * The tenancy ID, which can be used to specify a different tenancy (for cross-tenancy authorization) when searching for resources in a different tenancy.
   *
   */
  "tenantId"?: string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular
   * request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
}