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
 * The trigger action to be performed.
 */
export interface TriggerAction {
  "filter"?:
    | model.VbsFilter
    | model.DevopsCodeRepositoryFilter
    | model.BitbucketCloudFilter
    | model.BitbucketServerFilter
    | model.GitlabFilter
    | model.GithubFilter
    | model.GitlabServerFilter;

  "type": string;
}

export namespace TriggerAction {
  export function getJsonObj(obj: TriggerAction): object {
    const jsonObj = {
      ...obj,
      ...{
        "filter": obj.filter ? model.Filter.getJsonObj(obj.filter) : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "TRIGGER_BUILD_PIPELINE":
          return model.TriggerBuildPipelineAction.getJsonObj(
            <model.TriggerBuildPipelineAction>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TriggerAction): object {
    const jsonObj = {
      ...obj,
      ...{
        "filter": obj.filter ? model.Filter.getDeserializedJsonObj(obj.filter) : undefined
      }
    };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "TRIGGER_BUILD_PIPELINE":
          return model.TriggerBuildPipelineAction.getDeserializedJsonObj(
            <model.TriggerBuildPipelineAction>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
