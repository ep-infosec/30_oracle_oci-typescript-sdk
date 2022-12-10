/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface ImportKeyVersionDetails {
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  "wrappedImportKey": model.WrappedImportKey;
}

export namespace ImportKeyVersionDetails {
  export function getJsonObj(obj: ImportKeyVersionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "wrappedImportKey": obj.wrappedImportKey
          ? model.WrappedImportKey.getJsonObj(obj.wrappedImportKey)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportKeyVersionDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "wrappedImportKey": obj.wrappedImportKey
          ? model.WrappedImportKey.getDeserializedJsonObj(obj.wrappedImportKey)
          : undefined
      }
    };

    return jsonObj;
  }
}
