/**
 *
 *
 * OpenAPI spec version: 1.0.017
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dts/UpdateTransferJob.ts.html |here} to see how to use UpdateTransferJobRequest.
 */
export interface UpdateTransferJobRequest extends common.BaseRequest {
  /**
   * ID of the Transfer Job
   */
  "id": string;
  /**
   * fields to update
   */
  "updateTransferJobDetails": model.UpdateTransferJobDetails;
  /**
   * The entity tag to match. Optional, if set, the update will be successful only if the
   * object's tag matches the tag specified in the request.
   *
   */
  "ifMatch"?: string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about
   * a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}