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
 * Deployment Data for an OggDeployment
 *
 */
export interface OggDeployment {
  /**
   * The name given to the GoldenGate service deployment.
   * The name must be 1 to 32 characters long, must contain only alphanumeric characters and must start with a letter.
   *
   */
  "deploymentName": string;
  /**
   * The GoldenGate deployment console username.
   *
   */
  "adminUsername": string;
  /**
   * Version of OGG
   *
   */
  "oggVersion"?: string;
  /**
   * A PEM-encoded SSL certificate.
   *
   */
  "certificate"?: string;
}

export namespace OggDeployment {
  export function getJsonObj(obj: OggDeployment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OggDeployment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
