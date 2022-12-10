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
 * The details of the certificate to update.
 */
export interface UpdateCertificateDetails {
  /**
   * A brief description of the certificate. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * Makes this version the current version. This property cannot be updated in combination with any other properties. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "currentVersionNumber"?: number;
  "certificateConfig"?:
    | model.UpdateCertificateByImportingConfigDetails
    | model.UpdateCertificateIssuedByInternalCaConfigDetails
    | model.UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An optional list of rules that control how the certificate is used and managed.
   */
  "certificateRules"?: Array<model.CertificateRule>;
}

export namespace UpdateCertificateDetails {
  export function getJsonObj(obj: UpdateCertificateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "certificateConfig": obj.certificateConfig
          ? model.UpdateCertificateConfigDetails.getJsonObj(obj.certificateConfig)
          : undefined,

        "certificateRules": obj.certificateRules
          ? obj.certificateRules.map(item => {
              return model.CertificateRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCertificateDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "certificateConfig": obj.certificateConfig
          ? model.UpdateCertificateConfigDetails.getDeserializedJsonObj(obj.certificateConfig)
          : undefined,

        "certificateRules": obj.certificateRules
          ? obj.certificateRules.map(item => {
              return model.CertificateRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}