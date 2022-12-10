/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new OCI Object Storage Connection.
 *
 */
export interface CreateOciObjectStorageConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The OCI Object Storage technology type.
   */
  "technologyType": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the related OCI tenancy.
   *
   */
  "tenancyId"?: string;
  /**
   * The name of the region. e.g.: us-ashburn-1
   *
   */
  "region"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the OCI user who will access the Object Storage.
   * The user must have write access to the bucket they want to connect to.
   *
   */
  "userId"?: string;
  /**
   * The base64 encoded content of the private key file (PEM file) corresponding to the API key of the fingerprint.
   * See documentation: https://docs.oracle.com/en-us/iaas/Content/Identity/Tasks/managingcredentials.htm
   *
   */
  "privateKeyFile": string;
  /**
   * The fingerprint of the API Key of the user specified by the userId.
   * See documentation: https://docs.oracle.com/en-us/iaas/Content/Identity/Tasks/managingcredentials.htm
   *
   */
  "publicKeyFingerprint": string;

  "connectionType": string;
}

export namespace CreateOciObjectStorageConnectionDetails {
  export function getJsonObj(
    obj: CreateOciObjectStorageConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(
            obj
          ) as CreateOciObjectStorageConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "OCI_OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: CreateOciObjectStorageConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateOciObjectStorageConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
