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
 * Summary of the deployment.
 */
export interface DeploymentSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Deployment identifier which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * The OCID of a pipeline.
   */
  "deployPipelineId": string;
  /**
   * The OCID of a compartment.
   */
  "compartmentId": string;
  /**
   * Time the deployment was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * Time the deployment was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the deployment.
   */
  "lifecycleState"?: string;
  "deploymentArguments"?: model.DeploymentArgumentCollection;
  "deployStageOverrideArguments"?: model.DeployStageOverrideArgumentCollection;
  "deployArtifactOverrideArguments"?: model.DeployArtifactOverrideArgumentCollection;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
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

  "deploymentType": string;
}

export namespace DeploymentSummary {
  export function getJsonObj(obj: DeploymentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "deploymentArguments": obj.deploymentArguments
          ? model.DeploymentArgumentCollection.getJsonObj(obj.deploymentArguments)
          : undefined,
        "deployStageOverrideArguments": obj.deployStageOverrideArguments
          ? model.DeployStageOverrideArgumentCollection.getJsonObj(obj.deployStageOverrideArguments)
          : undefined,
        "deployArtifactOverrideArguments": obj.deployArtifactOverrideArguments
          ? model.DeployArtifactOverrideArgumentCollection.getJsonObj(
              obj.deployArtifactOverrideArguments
            )
          : undefined
      }
    };

    if (obj && "deploymentType" in obj && obj.deploymentType) {
      switch (obj.deploymentType) {
        case "SINGLE_STAGE_DEPLOYMENT":
          return model.SingleDeployStageDeploymentSummary.getJsonObj(
            <model.SingleDeployStageDeploymentSummary>(<object>jsonObj),
            true
          );
        case "PIPELINE_REDEPLOYMENT":
          return model.DeployPipelineRedeploymentSummary.getJsonObj(
            <model.DeployPipelineRedeploymentSummary>(<object>jsonObj),
            true
          );
        case "PIPELINE_DEPLOYMENT":
          return model.DeployPipelineDeploymentSummary.getJsonObj(
            <model.DeployPipelineDeploymentSummary>(<object>jsonObj),
            true
          );
        case "SINGLE_STAGE_REDEPLOYMENT":
          return model.SingleDeployStageRedeploymentSummary.getJsonObj(
            <model.SingleDeployStageRedeploymentSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.deploymentType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeploymentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "deploymentArguments": obj.deploymentArguments
          ? model.DeploymentArgumentCollection.getDeserializedJsonObj(obj.deploymentArguments)
          : undefined,
        "deployStageOverrideArguments": obj.deployStageOverrideArguments
          ? model.DeployStageOverrideArgumentCollection.getDeserializedJsonObj(
              obj.deployStageOverrideArguments
            )
          : undefined,
        "deployArtifactOverrideArguments": obj.deployArtifactOverrideArguments
          ? model.DeployArtifactOverrideArgumentCollection.getDeserializedJsonObj(
              obj.deployArtifactOverrideArguments
            )
          : undefined
      }
    };

    if (obj && "deploymentType" in obj && obj.deploymentType) {
      switch (obj.deploymentType) {
        case "SINGLE_STAGE_DEPLOYMENT":
          return model.SingleDeployStageDeploymentSummary.getDeserializedJsonObj(
            <model.SingleDeployStageDeploymentSummary>(<object>jsonObj),
            true
          );
        case "PIPELINE_REDEPLOYMENT":
          return model.DeployPipelineRedeploymentSummary.getDeserializedJsonObj(
            <model.DeployPipelineRedeploymentSummary>(<object>jsonObj),
            true
          );
        case "PIPELINE_DEPLOYMENT":
          return model.DeployPipelineDeploymentSummary.getDeserializedJsonObj(
            <model.DeployPipelineDeploymentSummary>(<object>jsonObj),
            true
          );
        case "SINGLE_STAGE_REDEPLOYMENT":
          return model.SingleDeployStageRedeploymentSummary.getDeserializedJsonObj(
            <model.SingleDeployStageRedeploymentSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.deploymentType}`);
      }
    }
    return jsonObj;
  }
}
