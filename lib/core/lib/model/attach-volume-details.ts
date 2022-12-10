/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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

export interface AttachVolumeDetails {
  /**
   * The device name. To retrieve a list of devices for a given instance, see {@link #listInstanceDevices(ListInstanceDevicesRequest) listInstanceDevices}.
   */
  "device"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the instance.
   */
  "instanceId": string;
  /**
   * Whether the attachment was created in read-only mode.
   */
  "isReadOnly"?: boolean;
  /**
   * Whether the attachment should be created in shareable mode. If an attachment
   * is created in shareable mode, then other instances can attach the same volume, provided
   * that they also create their attachments in shareable mode. Only certain volume types can
   * be attached in shareable mode. Defaults to false if not specified.
   *
   */
  "isShareable"?: boolean;
  /**
   * The OCID of the volume.
   */
  "volumeId": string;

  "type": string;
}

export namespace AttachVolumeDetails {
  export function getJsonObj(obj: AttachVolumeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "service_determined":
          return model.AttachServiceDeterminedVolumeDetails.getJsonObj(
            <model.AttachServiceDeterminedVolumeDetails>(<object>jsonObj),
            true
          );
        case "emulated":
          return model.AttachEmulatedVolumeDetails.getJsonObj(
            <model.AttachEmulatedVolumeDetails>(<object>jsonObj),
            true
          );
        case "iscsi":
          return model.AttachIScsiVolumeDetails.getJsonObj(
            <model.AttachIScsiVolumeDetails>(<object>jsonObj),
            true
          );
        case "paravirtualized":
          return model.AttachParavirtualizedVolumeDetails.getJsonObj(
            <model.AttachParavirtualizedVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AttachVolumeDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "service_determined":
          return model.AttachServiceDeterminedVolumeDetails.getDeserializedJsonObj(
            <model.AttachServiceDeterminedVolumeDetails>(<object>jsonObj),
            true
          );
        case "emulated":
          return model.AttachEmulatedVolumeDetails.getDeserializedJsonObj(
            <model.AttachEmulatedVolumeDetails>(<object>jsonObj),
            true
          );
        case "iscsi":
          return model.AttachIScsiVolumeDetails.getDeserializedJsonObj(
            <model.AttachIScsiVolumeDetails>(<object>jsonObj),
            true
          );
        case "paravirtualized":
          return model.AttachParavirtualizedVolumeDetails.getDeserializedJsonObj(
            <model.AttachParavirtualizedVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}