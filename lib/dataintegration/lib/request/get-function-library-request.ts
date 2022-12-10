/**
 *
 *
 * OpenAPI spec version: 20200430
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dataintegration/GetFunctionLibrary.ts.html |here} to see how to use GetFunctionLibraryRequest.
 */
export interface GetFunctionLibraryRequest extends common.BaseRequest {
  /**
   * The workspace ID.
   */
  "workspaceId": string;
  /**
   * The functionLibrary key.
   */
  "functionLibraryKey": string;
  /**
   * Unique Oracle-assigned identifier for the request. If
   * you need to contact Oracle about a particular request,
   * please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * This parameter allows users to specify which view of the object to return. CHILD_COUNT_STATISTICS - This option is used to get statistics on immediate children of the object by their type.
   */
  "projection"?: Array<GetFunctionLibraryRequest.Projection>;
}

export namespace GetFunctionLibraryRequest {
  export enum Projection {
    ChildCountStatistics = "CHILD_COUNT_STATISTICS"
  }
}
