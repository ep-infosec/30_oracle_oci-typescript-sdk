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
 * The metadata for the artifact repository.
 */
export interface Repository {
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the repository.
* <p>
Example: `ocid1.artifactrepository.oc1..exampleuniqueID`
* 
    */
  "id": string;
  /**
   * The repository name.
   */
  "displayName": string;
  /**
   * The OCID of the repository's compartment.
   */
  "compartmentId": string;
  /**
   * The repository description.
   */
  "description": string;
  /**
   * Whether the repository is immutable. The artifacts of an immutable repository cannot be overwritten.
   */
  "isImmutable": boolean;
  /**
   * The current state of the repository.
   */
  "lifecycleState": Repository.LifecycleState;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * An RFC 3339 timestamp indicating when the repository was created.
   */
  "timeCreated": Date;

  "repositoryType": string;
}

export namespace Repository {
  export enum LifecycleState {
    Available = "AVAILABLE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Repository): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "repositoryType" in obj && obj.repositoryType) {
      switch (obj.repositoryType) {
        case "GENERIC":
          return model.GenericRepository.getJsonObj(
            <model.GenericRepository>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.repositoryType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Repository): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "repositoryType" in obj && obj.repositoryType) {
      switch (obj.repositoryType) {
        case "GENERIC":
          return model.GenericRepository.getDeserializedJsonObj(
            <model.GenericRepository>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.repositoryType}`);
      }
    }
    return jsonObj;
  }
}
