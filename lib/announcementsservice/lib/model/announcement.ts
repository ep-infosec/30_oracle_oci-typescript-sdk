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
 * A message about an impactful operational event.
 *
 */
export interface Announcement extends model.BaseAnnouncement {
  /**
   * A detailed explanation of the event, expressed by using Markdown language. Avoid entering
   * confidential information.
   *
   */
  "description"?: string;
  /**
   * Additional information about the event, expressed by using Markdown language and included in the
   * details view of an announcement. Additional information might include remediation steps or
   * answers to frequently asked questions. Avoid entering confidential information.
   *
   */
  "additionalInformation"?: string;
  /**
   * The list of resources, if any, affected by the event described in the announcement.
   */
  "affectedResources"?: Array<model.AffectedResource>;

  "type": string;
}

export namespace Announcement {
  export function getJsonObj(obj: Announcement, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BaseAnnouncement.getJsonObj(obj) as Announcement)),
      ...{
        "affectedResources": obj.affectedResources
          ? obj.affectedResources.map(item => {
              return model.AffectedResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "Announcement";
  export function getDeserializedJsonObj(obj: Announcement, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BaseAnnouncement.getDeserializedJsonObj(obj) as Announcement)),
      ...{
        "affectedResources": obj.affectedResources
          ? obj.affectedResources.map(item => {
              return model.AffectedResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
