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
 * Properties to update an Application Event channel.
 */
export interface UpdateAppEventChannelDetails extends model.UpdateChannelDetails {
  /**
   * The URL for sending errors and responses to.
   */
  "outboundUrl"?: string;
  /**
   * The IDs of the Skills and Digital Assistants that the Channel is routed to.
   */
  "eventSinkBotIds"?: Array<string>;

  "type": string;
}

export namespace UpdateAppEventChannelDetails {
  export function getJsonObj(obj: UpdateAppEventChannelDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateChannelDetails.getJsonObj(obj) as UpdateAppEventChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "APPEVENT";
  export function getDeserializedJsonObj(
    obj: UpdateAppEventChannelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateChannelDetails.getDeserializedJsonObj(obj) as UpdateAppEventChannelDetails)),
      ...{}
    };

    return jsonObj;
  }
}
