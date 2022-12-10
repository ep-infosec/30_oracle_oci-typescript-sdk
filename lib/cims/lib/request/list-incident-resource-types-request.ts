/**
 *
 *
 * OpenAPI spec version: 20181231
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/ListIncidentResourceTypes.ts.html |here} to see how to use ListIncidentResourceTypesRequest.
 */
export interface ListIncidentResourceTypesRequest extends common.BaseRequest {
  /**
   * The kind of support request.
   */
  "problemType": string;
  /**
   * The OCID of the tenancy.
   */
  "compartmentId": string;
  /**
   * The Customer Support Identifier associated with the support account.
   */
  "csi": string;
  /**
   * User OCID for Oracle Identity Cloud Service (IDCS) users who also have a federated Oracle Cloud Infrastructure account.
   */
  "ocid": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call. For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "limit"?: number;
  /**
   * For list pagination. The value of the `opc-next-page` response header from the previous \"List\" call. For important details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The key to use to sort the returned items.
   */
  "sortBy"?: model.SortBy;
  /**
   * The order to sort the results in.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The user-friendly name of the incident type.
   */
  "name"?: string;
  /**
   * The region of the tenancy.
   */
  "homeregion"?: string;
}
