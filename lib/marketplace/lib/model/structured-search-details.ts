/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * A request that uses Search's structured query language to specify filter conditions to
 * apply to search listings. For more information about writing search queries, see [Search Language Syntax](https://docs.cloud.oracle.com/Content/Search/Concepts/querysyntax.htm).
 *
 */
export interface StructuredSearchDetails extends model.SearchListingsDetails {
  /**
   * The structured query describing which resources to search for.
   */
  "query": string;

  "type": string;
}

export namespace StructuredSearchDetails {
  export function getJsonObj(obj: StructuredSearchDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchListingsDetails.getJsonObj(obj) as StructuredSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "Structured";
  export function getDeserializedJsonObj(
    obj: StructuredSearchDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SearchListingsDetails.getDeserializedJsonObj(obj) as StructuredSearchDetails)),
      ...{}
    };

    return jsonObj;
  }
}