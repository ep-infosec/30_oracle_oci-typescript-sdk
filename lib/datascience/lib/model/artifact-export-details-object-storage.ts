/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * Model artifact source details for exporting artifact to service bucket
 */
export interface ArtifactExportDetailsObjectStorage extends model.ArtifactExportDetails {
  /**
   * The Object Storage namespace used for the request.
   */
  "namespace"?: string;
  /**
   * The name of the bucket. Avoid entering confidential information.
   */
  "sourceBucket"?: string;
  /**
   * The name of the object resulting from the copy operation.
   */
  "sourceObjectName"?: string;
  /**
   * Region in which OSS bucket is present
   */
  "sourceRegion"?: string;

  "artifactSourceType": string;
}

export namespace ArtifactExportDetailsObjectStorage {
  export function getJsonObj(
    obj: ArtifactExportDetailsObjectStorage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ArtifactExportDetails.getJsonObj(obj) as ArtifactExportDetailsObjectStorage)),
      ...{}
    };

    return jsonObj;
  }
  export const artifactSourceType = "ORACLE_OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ArtifactExportDetailsObjectStorage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ArtifactExportDetails.getDeserializedJsonObj(
            obj
          ) as ArtifactExportDetailsObjectStorage)),
      ...{}
    };

    return jsonObj;
  }
}
