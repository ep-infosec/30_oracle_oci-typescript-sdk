/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.cloud.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
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
 * A resource created or operated on by a work request.
 */
export interface WorkRequestResource {
  /**
   * The resource type the work request affects.
   */
  "entityType": string;
  /**
   * The way in which this resource is affected by the work tracked in the work request.
   * A resource being created, updated, or deleted will remain in the IN_PROGRESS state until
   * work is complete for that resource at which point it will transition to CREATED, UPDATED,
   * or DELETED, respectively.
   *
   */
  "actionType": model.ActionTypes;
  /**
   * The identifier of the resource the work request affects.
   */
  "identifier": string;
  /**
   * The identifier of the source the work request is requesting.
   */
  "sourceId"?: string;
  /**
   * The name of the source the work request is requesting.
   */
  "sourceName"?: string;
  /**
   * The version of the source the work request is requesting.
   */
  "sourceVersion"?: string;
  /**
   * The URI path that the user can do a GET on to access the resource metadata
   */
  "entityUri"?: string;
  /**
   * The date and time the request was created, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeAccepted"?: Date;
  /**
   * The date and time the request was started, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the request was finished, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeFinished"?: Date;
  /**
   * Additional metadata about the resource that has been operated upon by
   * this work request. For WorkRequests operationType WORK_DELIVERY the metadata will contain: workDeliveryStatus
   * indicating the status of the work delivery item as a WorkDeliveryStatus value, workSubmissionKey the WorkSubmission request id,
   *  and workSubmissionDetails containing any details of result
   *
   */
  "metadata"?: any;
}

export namespace WorkRequestResource {
  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}