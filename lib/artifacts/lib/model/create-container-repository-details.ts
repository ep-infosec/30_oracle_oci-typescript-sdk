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
 * Create container repository details.
 */
export interface CreateContainerRepositoryDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which to create the resource.
   *
   */
  "compartmentId": string;
  /**
   * The container repository name.
   */
  "displayName": string;
  /**
   * Whether the repository is immutable. Images cannot be overwritten in an immutable repository.
   */
  "isImmutable"?: boolean;
  /**
   * Whether the repository is public. A public repository allows unauthenticated access.
   */
  "isPublic"?: boolean;
  "readme"?: model.ContainerRepositoryReadme;
}

export namespace CreateContainerRepositoryDetails {
  export function getJsonObj(obj: CreateContainerRepositoryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "readme": obj.readme ? model.ContainerRepositoryReadme.getJsonObj(obj.readme) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateContainerRepositoryDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "readme": obj.readme
          ? model.ContainerRepositoryReadme.getDeserializedJsonObj(obj.readme)
          : undefined
      }
    };

    return jsonObj;
  }
}