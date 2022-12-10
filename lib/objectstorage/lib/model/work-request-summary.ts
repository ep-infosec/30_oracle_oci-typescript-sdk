/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * A summary of the status of a work request.
 */
export interface WorkRequestSummary {
  /**
   * The type of work request.
   */
  "operationType"?: WorkRequestSummary.OperationType;
  /**
   * The status of a specified work request.
   */
  "status"?: WorkRequestSummary.Status;
  /**
   * The id of the work request.
   */
  "id"?: string;
  /**
    * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that contains the work request. Work
* requests are scoped to the same compartment as the resource the work request affects.
* <p>
If the work request affects multiple resources and those resources are not in the same compartment, the OCID of
* the primary resource is used. For example, you can copy an object in a bucket in one compartment to a bucket in
* another compartment. In this case, the OCID of the source compartment is used.
* 
    */
  "compartmentId"?: string;
  "resources"?: Array<model.WorkRequestResource>;
  /**
   * Percentage of the work request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * The date and time the work request was created, as described in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeAccepted"?: Date;
  /**
   * The date and time the work request was started, as described in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request was finished, as described in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export enum OperationType {
    CopyObject = "COPY_OBJECT",
    Reencrypt = "REENCRYPT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Completed = "COMPLETED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}