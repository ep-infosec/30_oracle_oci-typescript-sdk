/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the input used to purge data
 *
 */
export interface PurgeStorageDataDetails {
  /**
   * This is the compartment OCID under which the data will be purged and required permission will be checked
   */
  "compartmentId": string;
  /**
   * If true, purge child compartments data
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * This is the end of the purge time interval
   */
  "timeDataEnded": Date;
  /**
   * This is the solr query used to filter data, '*' means all
   */
  "purgeQueryString"?: string;
  /**
   * This is the type of the log data to be purged
   */
  "dataType"?: model.StorageDataType;
}

export namespace PurgeStorageDataDetails {
  export function getJsonObj(obj: PurgeStorageDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PurgeStorageDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}