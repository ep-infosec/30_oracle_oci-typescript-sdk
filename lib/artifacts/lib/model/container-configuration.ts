/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

 * OpenAPI spec version: 20160918
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
 * Container configuration.
 */
export interface ContainerConfiguration {
  /**
   * Whether to create a new container repository when a container is pushed to a new repository path.
   * Repositories created in this way belong to the root compartment.
   *
   */
  "isRepositoryCreatedOnFirstPush": boolean;
  /**
   * The tenancy namespace used in the container repository path.
   */
  "namespace": string;
}

export namespace ContainerConfiguration {
  export function getJsonObj(obj: ContainerConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
