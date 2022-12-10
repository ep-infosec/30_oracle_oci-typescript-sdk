/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The details of the association.
 */
export interface Association {
  /**
   * The OCID of the association.
   */
  "id": string;
  /**
   * A user-friendly name generated by the service for the association, expressed in a format that follows the pattern: [certificatesResourceEntityType]-[associatedResourceEntityType]-UUID.
   *
   */
  "name": string;
  /**
   * A property indicating when the association was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * The current lifecycle state of the association.
   */
  "lifecycleState": model.AssociationLifecycleState;
  /**
   * The OCID of the certificate-related resource associated with another Oracle Cloud Infrastructure resource.
   */
  "certificatesResourceId": string;
  /**
   * The OCID of the associated resource.
   */
  "associatedResourceId": string;
  /**
   * The compartment OCID of the association, which is strongly tied to the compartment OCID of the certificate-related resource.
   */
  "compartmentId": string;
  /**
   * Type of the association.
   */
  "associationType": model.AssociationType;
}

export namespace Association {
  export function getJsonObj(obj: Association): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Association): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
