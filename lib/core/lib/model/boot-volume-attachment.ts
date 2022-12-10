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

/**
 * Represents an attachment between a boot volume and an instance.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you
 * supply string values using the API.
 *
 */
export interface BootVolumeAttachment {
  /**
    * The availability domain of an instance.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the boot volume.
   */
  "bootVolumeId": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the boot volume attachment.
   */
  "id": string;
  /**
   * The OCID of the instance the boot volume is attached to.
   */
  "instanceId": string;
  /**
   * The current state of the boot volume attachment.
   */
  "lifecycleState": BootVolumeAttachment.LifecycleState;
  /**
    * The date and time the boot volume was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * Whether in-transit encryption for the boot volume's paravirtualized attachment is enabled or not.
   *
   */
  "isPvEncryptionInTransitEnabled"?: boolean;
  /**
   * Refer the top-level definition of encryptionInTransitType.
   * The default value is NONE.
   *
   */
  "encryptionInTransitType"?: model.EncryptionInTransitType;
}

export namespace BootVolumeAttachment {
  export enum LifecycleState {
    Attaching = "ATTACHING",
    Attached = "ATTACHED",
    Detaching = "DETACHING",
    Detached = "DETACHED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BootVolumeAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BootVolumeAttachment): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}