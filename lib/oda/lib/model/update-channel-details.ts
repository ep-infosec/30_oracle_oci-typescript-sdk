/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
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
 * Properties to update a Channel.
 */
export interface UpdateChannelDetails {
  /**
   * A short description of the Channel.
   */
  "description"?: string;
  /**
   * The number of milliseconds before a session expires. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sessionExpiryDurationInMilliseconds"?: number;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "type": string;
}

export namespace UpdateChannelDetails {
  export function getJsonObj(obj: UpdateChannelDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OSVC":
          return model.UpdateOsvcChannelDetails.getJsonObj(
            <model.UpdateOsvcChannelDetails>(<object>jsonObj),
            true
          );
        case "OSS":
          return model.UpdateOSSChannelDetails.getJsonObj(
            <model.UpdateOSSChannelDetails>(<object>jsonObj),
            true
          );
        case "ANDROID":
          return model.UpdateAndroidChannelDetails.getJsonObj(
            <model.UpdateAndroidChannelDetails>(<object>jsonObj),
            true
          );
        case "MSTEAMS":
          return model.UpdateMSTeamsChannelDetails.getJsonObj(
            <model.UpdateMSTeamsChannelDetails>(<object>jsonObj),
            true
          );
        case "APPEVENT":
          return model.UpdateAppEventChannelDetails.getJsonObj(
            <model.UpdateAppEventChannelDetails>(<object>jsonObj),
            true
          );
        case "WEB":
          return model.UpdateWebChannelDetails.getJsonObj(
            <model.UpdateWebChannelDetails>(<object>jsonObj),
            true
          );
        case "IOS":
          return model.UpdateIosChannelDetails.getJsonObj(
            <model.UpdateIosChannelDetails>(<object>jsonObj),
            true
          );
        case "SLACK":
          return model.UpdateSlackChannelDetails.getJsonObj(
            <model.UpdateSlackChannelDetails>(<object>jsonObj),
            true
          );
        case "SERVICECLOUD":
          return model.UpdateServiceCloudChannelDetails.getJsonObj(
            <model.UpdateServiceCloudChannelDetails>(<object>jsonObj),
            true
          );
        case "TWILIO":
          return model.UpdateTwilioChannelDetails.getJsonObj(
            <model.UpdateTwilioChannelDetails>(<object>jsonObj),
            true
          );
        case "WEBHOOK":
          return model.UpdateWebhookChannelDetails.getJsonObj(
            <model.UpdateWebhookChannelDetails>(<object>jsonObj),
            true
          );
        case "APPLICATION":
          return model.UpdateApplicationChannelDetails.getJsonObj(
            <model.UpdateApplicationChannelDetails>(<object>jsonObj),
            true
          );
        case "FACEBOOK":
          return model.UpdateFacebookChannelDetails.getJsonObj(
            <model.UpdateFacebookChannelDetails>(<object>jsonObj),
            true
          );
        case "CORTANA":
          return model.UpdateCortanaChannelDetails.getJsonObj(
            <model.UpdateCortanaChannelDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateChannelDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OSVC":
          return model.UpdateOsvcChannelDetails.getDeserializedJsonObj(
            <model.UpdateOsvcChannelDetails>(<object>jsonObj),
            true
          );
        case "OSS":
          return model.UpdateOSSChannelDetails.getDeserializedJsonObj(
            <model.UpdateOSSChannelDetails>(<object>jsonObj),
            true
          );
        case "ANDROID":
          return model.UpdateAndroidChannelDetails.getDeserializedJsonObj(
            <model.UpdateAndroidChannelDetails>(<object>jsonObj),
            true
          );
        case "MSTEAMS":
          return model.UpdateMSTeamsChannelDetails.getDeserializedJsonObj(
            <model.UpdateMSTeamsChannelDetails>(<object>jsonObj),
            true
          );
        case "APPEVENT":
          return model.UpdateAppEventChannelDetails.getDeserializedJsonObj(
            <model.UpdateAppEventChannelDetails>(<object>jsonObj),
            true
          );
        case "WEB":
          return model.UpdateWebChannelDetails.getDeserializedJsonObj(
            <model.UpdateWebChannelDetails>(<object>jsonObj),
            true
          );
        case "IOS":
          return model.UpdateIosChannelDetails.getDeserializedJsonObj(
            <model.UpdateIosChannelDetails>(<object>jsonObj),
            true
          );
        case "SLACK":
          return model.UpdateSlackChannelDetails.getDeserializedJsonObj(
            <model.UpdateSlackChannelDetails>(<object>jsonObj),
            true
          );
        case "SERVICECLOUD":
          return model.UpdateServiceCloudChannelDetails.getDeserializedJsonObj(
            <model.UpdateServiceCloudChannelDetails>(<object>jsonObj),
            true
          );
        case "TWILIO":
          return model.UpdateTwilioChannelDetails.getDeserializedJsonObj(
            <model.UpdateTwilioChannelDetails>(<object>jsonObj),
            true
          );
        case "WEBHOOK":
          return model.UpdateWebhookChannelDetails.getDeserializedJsonObj(
            <model.UpdateWebhookChannelDetails>(<object>jsonObj),
            true
          );
        case "APPLICATION":
          return model.UpdateApplicationChannelDetails.getDeserializedJsonObj(
            <model.UpdateApplicationChannelDetails>(<object>jsonObj),
            true
          );
        case "FACEBOOK":
          return model.UpdateFacebookChannelDetails.getDeserializedJsonObj(
            <model.UpdateFacebookChannelDetails>(<object>jsonObj),
            true
          );
        case "CORTANA":
          return model.UpdateCortanaChannelDetails.getDeserializedJsonObj(
            <model.UpdateCortanaChannelDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}