/**
 *
 *
 * OpenAPI spec version: 20180401
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/monitoring/ChangeAlarmCompartment.ts.html |here} to see how to use ChangeAlarmCompartmentRequest.
 */
export interface ChangeAlarmCompartmentRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of an alarm.
   *
   */
  "alarmId": string;
  /**
   * The configuration details for moving an alarm.
   */
  "changeAlarmCompartmentDetails": model.ChangeAlarmCompartmentDetails;
  /**
   * For optimistic concurrency control. In the PUT or DELETE call for a resource, set the `if-match`
   * parameter to the value of the etag from a previous GET or POST response for that resource.  The resource
   * will be updated or deleted only if the etag you provide matches the resource's current etag value.
   *
   */
  "ifMatch"?: string;
  /**
   * Customer part of the request identifier token. If you need to contact Oracle about a particular
   * request, please provide the complete request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
}