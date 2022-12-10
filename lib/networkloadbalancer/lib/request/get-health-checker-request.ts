/**
 *
 *
 * OpenAPI spec version: 20200501
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/networkloadbalancer/GetHealthChecker.ts.html |here} to see how to use GetHealthCheckerRequest.
 */
export interface GetHealthCheckerRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network load balancer to update.
   */
  "networkLoadBalancerId": string;
  /**
 * The name of the backend set associated with the health check policy to be retrieved.
* <p>
Example: `example_backend_set`
* 
 */
  "backendSetName": string;
  /**
   * The unique Oracle-assigned identifier for the request. If you must contact Oracle about a
   * particular request, then provide the request identifier.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so that it can be retried in case of a timeout or
   * server error without risk of rerunning that same action. Retry tokens expire after 24
   * hours but they can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
 * The system returns the requested resource, with a 200 status, only if the resource has no etag
* matching the one specified. If the condition fails for the GET and HEAD methods, then the system returns the
* HTTP status code `304 (Not Modified)`.
* <p>
Example: `example-etag`
* 
 */
  "ifNoneMatch"?: string;
}