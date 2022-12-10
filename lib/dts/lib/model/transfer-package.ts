/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.017
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

export interface TransferPackage {
  "label": string;
  "lifecycleState"?: TransferPackage.LifecycleState;
  "transferJobId"?: string;
  "creationTime"?: Date;
  "originalPackageDeliveryTrackingNumber"?: string;
  "returnPackageDeliveryTrackingNumber"?: string;
  "packageDeliveryVendor"?: string;
  "transferSiteShippingAddress"?: string;
  /**
   * Transfer Devices attached to this Transfer Package
   */
  "attachedTransferDeviceLabels"?: Array<string>;
}

export namespace TransferPackage {
  export enum LifecycleState {
    Preparing = "PREPARING",
    Shipping = "SHIPPING",
    Received = "RECEIVED",
    Processing = "PROCESSING",
    Processed = "PROCESSED",
    Returned = "RETURNED",
    Deleted = "DELETED",
    Cancelled = "CANCELLED",
    CancelledReturned = "CANCELLED_RETURNED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TransferPackage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TransferPackage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
