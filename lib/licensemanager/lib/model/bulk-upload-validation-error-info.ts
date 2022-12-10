/**
 * License Manager API
 * Use the License Manager API to manage product licenses and license records. For more information, see [License Manager Overview](/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm).
 * OpenAPI spec version: 20220430
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
 * Detailed error information corresponding to each column for a particular supported license record that could not be uploaded.
 */
export interface BulkUploadValidationErrorInfo {
  /**
   * Refers to the license record number as provided in the bulk upload file. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rowNumber": number;
  /**
   * Product name of invalid row.
   */
  "productName": string;
  /**
   * Error information corresponding to each column.
   */
  "rowError": Array<model.BulkUploadCellInfo>;
}

export namespace BulkUploadValidationErrorInfo {
  export function getJsonObj(obj: BulkUploadValidationErrorInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "rowError": obj.rowError
          ? obj.rowError.map(item => {
              return model.BulkUploadCellInfo.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkUploadValidationErrorInfo): object {
    const jsonObj = {
      ...obj,
      ...{
        "rowError": obj.rowError
          ? obj.rowError.map(item => {
              return model.BulkUploadCellInfo.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
