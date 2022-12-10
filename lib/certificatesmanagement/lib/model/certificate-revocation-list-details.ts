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
 * The details of the certificate revocation list (CRL).
 */
export interface CertificateRevocationListDetails {
  "objectStorageConfig": model.ObjectStorageBucketConfigDetails;
  /**
   * Optional CRL access points, expressed using a format where the version number of the issuing CA is inserted wherever you include a pair of curly braces. This versioning scheme helps avoid collisions when new CA versions are created. For example, myCrlFileIssuedFromCAVersion{}.crl becomes myCrlFileIssuedFromCAVersion2.crl for CA version 2.
   *
   */
  "customFormattedUrls"?: Array<string>;
}

export namespace CertificateRevocationListDetails {
  export function getJsonObj(obj: CertificateRevocationListDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectStorageConfig": obj.objectStorageConfig
          ? model.ObjectStorageBucketConfigDetails.getJsonObj(obj.objectStorageConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CertificateRevocationListDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "objectStorageConfig": obj.objectStorageConfig
          ? model.ObjectStorageBucketConfigDetails.getDeserializedJsonObj(obj.objectStorageConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}