/**
 * Announcements Service API
 * Manage Oracle Cloud Infrastructure console announcements.
 * OpenAPI spec version: 0.0.1
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
 * The object that contains the announcement email preferences configured for the tenancy (root compartment).
 */
export interface BaseAnnouncementsPreferences {
  /**
   * The OCID of the compartment for which the email preferences apply. Because announcements are
   * specific to a tenancy, specify the tenancy by providing the root compartment OCID.
   *
   */
  "compartmentId"?: string;
  /**
   * The ID of the preferences.
   */
  "id"?: string;
  /**
   * A Boolean value to indicate whether the specified compartment chooses to not to receive informational announcements by email.
   * (Manage preferences for receiving announcements by email by specifying the `preferenceType` attribute instead.)
   *
   */
  "isUnsubscribed"?: boolean;
  /**
   * When the preferences were set initially.
   */
  "timeCreated"?: Date;
  /**
   * When the preferences were last updated.
   */
  "timeUpdated"?: Date;
  /**
   * The string representing the user's preference regarding receiving announcements by email.
   */
  "preferenceType"?: string;
  /**
   * The time zone that the user prefers for announcement time stamps. Specify the preference with a value that uses the IANA Time Zone Database format (x-obmcs-time-zone). For example America/Los_Angeles.
   */
  "preferredTimeZone"?: string;

  "type": string;
}

export namespace BaseAnnouncementsPreferences {
  export function getJsonObj(obj: BaseAnnouncementsPreferences): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AnnouncementsPreferencesSummary":
          return model.AnnouncementsPreferencesSummary.getJsonObj(
            <model.AnnouncementsPreferencesSummary>(<object>jsonObj),
            true
          );
        case "AnnouncementsPreferences":
          return model.AnnouncementsPreferences.getJsonObj(
            <model.AnnouncementsPreferences>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BaseAnnouncementsPreferences): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "AnnouncementsPreferencesSummary":
          return model.AnnouncementsPreferencesSummary.getDeserializedJsonObj(
            <model.AnnouncementsPreferencesSummary>(<object>jsonObj),
            true
          );
        case "AnnouncementsPreferences":
          return model.AnnouncementsPreferences.getDeserializedJsonObj(
            <model.AnnouncementsPreferences>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}