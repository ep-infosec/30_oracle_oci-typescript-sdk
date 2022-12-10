/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Information about the detaching the private endpoint resource from a catalog
 */
export interface DetachCatalogPrivateEndpointDetails {
  /**
   * The identifier of the private endpoint to be detached from catalog resource.
   */
  "catalogPrivateEndpointId": string;
}

export namespace DetachCatalogPrivateEndpointDetails {
  export function getJsonObj(obj: DetachCatalogPrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DetachCatalogPrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
