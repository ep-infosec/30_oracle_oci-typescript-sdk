/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Summary of the project.
 */
export interface ProjectSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Project name (case-sensitive).
   */
  "name": string;
  /**
   * Project description.
   */
  "description"?: string;
  /**
   * The OCID of the compartment where the project is created.
   */
  "compartmentId": string;
  /**
   * Namespace associated with the project.
   */
  "namespace"?: string;
  "notificationConfig"?: model.NotificationConfig;
  /**
   * Time the project was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * Time the project was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the deployment.
   */
  "lifecycleState"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProjectSummary {
  export function getJsonObj(obj: ProjectSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "notificationConfig": obj.notificationConfig
          ? model.NotificationConfig.getJsonObj(obj.notificationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProjectSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "notificationConfig": obj.notificationConfig
          ? model.NotificationConfig.getDeserializedJsonObj(obj.notificationConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
