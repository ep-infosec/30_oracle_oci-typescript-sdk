/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * The file that is mounted on a container instance through a volume mount.
 *
 */
export interface ContainerConfigFile {
  /**
   * The name of the file. The fileName should be unique across the volume.
   *
   */
  "fileName": string;
  /**
   * The base64 encoded contents of the file. The contents are decoded to plain text before mounted as a file to a container inside container instance.
   *
   */
  "data": string;
  /**
   * (Optional) Relative path for this file inside the volume mount directory. By default, the file is presented at the root of the volume mount path.
   *
   */
  "path"?: string;
}

export namespace ContainerConfigFile {
  export function getJsonObj(obj: ContainerConfigFile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerConfigFile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
