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

export interface ListWorkRequestsResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular
   * request, provide this request ID.
   *
   */
  "opcRequestId": string;
  /**
     * For paginating a list of work requests.
* In the GET request, set the limit to the number of compartment work requests that you want returned in the
* response. If the `opc-next-page` header appears in the response, then this is a partial list and there are
* additional work requests to get. Include the header's value as the `page` parameter in the subsequent
* GET request to get the next batch of work requests. Repeat this process to retrieve the entire list of work
* requests.
* <p>
For more details about how pagination works, see [List Pagination](https://docs.cloud.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* 
     */
  "opcNextPage": string;
  /**
   * Echoes back the value passed in the opc-client-request-id header, for use by clients when debugging.
   */
  "opcClientRequestId": string;
  /**
   * A list of WorkRequestSummary instances.
   */
  "items": model.WorkRequestSummary[];
}
