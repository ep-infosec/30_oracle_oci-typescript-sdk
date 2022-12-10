/**
 *
 *
 * OpenAPI spec version: 20170115
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loadbalancer/ListBackendSets.ts.html |here} to see how to use ListBackendSetsRequest.
 */
export interface ListBackendSetsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the load balancer associated with the backend sets to retrieve.
   */
  "loadBalancerId": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
 * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the if-match
* parameter to the value of the ETag for the load balancer. This value can be obtained from a GET
* or POST response for any resource of that load balancer.
* <p>
For example, the eTag returned by getListener can be specified as the ifMatch for updateRuleSets.
* <p>
The resource is updated or deleted only if the ETag you provide matches the resource's current
* ETag value.
* <p>
Example: `example-etag`
* 
 */
  "ifMatch"?: string;
}
