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
 * The details for revoking a certificate version.
 */
export interface RevokeCertificateVersionDetails {
  /**
   * The reason that the certificate or certificate authority was revoked.
   */
  "revocationReason"?: model.RevocationReason;
}

export namespace RevokeCertificateVersionDetails {
  export function getJsonObj(obj: RevokeCertificateVersionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RevokeCertificateVersionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
