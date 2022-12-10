/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Details of the work request status.
 */
export interface WorkRequestSummary {
  /**
   * Type of the work request.
   */
  "operationType": model.OperationType;
  /**
   * Status of current work request.
   */
  "status": model.OperationStatus;
  /**
   * The OCID of the work request.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the work request. Work requests must be scoped to the same compartment as the resource that the work request affects.  If the work request affects multiple resources, and those resources are not in the same compartment, the service team must pick the primary resource whose compartment must be used.
   */
  "compartmentId": string;
  /**
   * The resources affected by this work request.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * Date and time the request was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeAccepted": Date;
  /**
   * Date and time the request was started. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeStarted"?: Date;
  /**
   * Date and time the request was completed. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
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
