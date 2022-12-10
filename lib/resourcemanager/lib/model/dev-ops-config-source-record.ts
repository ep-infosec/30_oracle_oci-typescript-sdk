/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * Metadata about the [DevOps](https://docs.cloud.oracle.com/iaas/Content/devops/using/home.htm) configuration source.
 *
 */
export interface DevOpsConfigSourceRecord extends model.ConfigSourceRecord {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@link Project}.
   *
   */
  "projectId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the {@link Repository}.
   */
  "repositoryId": string;
  /**
   * The name of the branch that contains the Terraform configuration.
   */
  "branchName": string;
  /**
   * The unique identifier (SHA-1 hash) of the individual change to the DevOps repository.
   */
  "commitId"?: string;

  "configSourceRecordType": string;
}

export namespace DevOpsConfigSourceRecord {
  export function getJsonObj(obj: DevOpsConfigSourceRecord, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSourceRecord.getJsonObj(obj) as DevOpsConfigSourceRecord)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceRecordType = "DEVOPS_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: DevOpsConfigSourceRecord,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSourceRecord.getDeserializedJsonObj(obj) as DevOpsConfigSourceRecord)),
      ...{}
    };

    return jsonObj;
  }
}