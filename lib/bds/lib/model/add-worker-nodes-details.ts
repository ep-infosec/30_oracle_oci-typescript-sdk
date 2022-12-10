/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * The information about added nodes.
 */
export interface AddWorkerNodesDetails {
  /**
   * Base-64 encoded password for the cluster (and Cloudera Manager) admin user.
   */
  "clusterAdminPassword": string;
  /**
   * Number of additional worker nodes for the cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "numberOfWorkerNodes": number;
  /**
   * Worker node types, can either be Worker Data node or Compute only worker node.
   */
  "nodeType": AddWorkerNodesDetails.NodeType;
  /**
   * Shape of the node. This has to be specified when adding compute only worker node at the first time. Otherwise, it's a read-only property.
   */
  "shape"?: string;
  /**
   * The size of block volume in GB to be attached to the given node. This has to be specified when adding compute only worker node at the first time. Otherwise, it's a read-only property.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockVolumeSizeInGBs"?: number;
  "shapeConfig"?: model.ShapeConfigDetails;
}

export namespace AddWorkerNodesDetails {
  export enum NodeType {
    Worker = "WORKER",
    ComputeOnlyWorker = "COMPUTE_ONLY_WORKER",
    Edge = "EDGE"
  }

  export function getJsonObj(obj: AddWorkerNodesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.ShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddWorkerNodesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "shapeConfig": obj.shapeConfig
          ? model.ShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
