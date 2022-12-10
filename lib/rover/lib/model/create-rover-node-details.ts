/**
 * RoverCloudService API
 * A description of the RoverCloudService API.
 * OpenAPI spec version: 20201210
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
 * The information required to create a RoverNode.
 */
export interface CreateRoverNodeDetails {
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment containing the RoverNode.
   */
  "compartmentId": string;
  /**
   * The shape of the node.
   */
  "shape"?: string;
  "customerShippingAddress"?: model.ShippingAddress;
  /**
   * List of existing workloads that should be provisioned on the node.
   */
  "nodeWorkloads"?: Array<model.RoverWorkload>;
  /**
   * Root password for the rover node.
   */
  "superUserPassword"?: string;
  /**
   * Passphrase to unlock the rover node.
   */
  "unlockPassphrase"?: string;
  /**
   * Name of point of contact for this order if customer is picking up.
   */
  "pointOfContact"?: string;
  /**
   * Phone number of point of contact for this order if customer is picking up.
   */
  "pointOfContactPhoneNumber"?: string;
  /**
   * Preference for device delivery.
   */
  "shippingPreference"?: CreateRoverNodeDetails.ShippingPreference;
  /**
   * Shipping vendor of choice for orace to customer shipping.
   */
  "shippingVendor"?: string;
  /**
   * Expected date when customer wants to pickup the device if they chose customer pickup.
   */
  "timePickupExpected"?: Date;
  /**
   * The public key of the resource principal
   */
  "publicKey"?: string;
  /**
   * Start time for the window to pickup the device from customer.
   */
  "timeReturnWindowStarts"?: Date;
  /**
   * End time for the window to pickup the device from customer.
   */
  "timeReturnWindowEnds"?: Date;
  /**
   * The current state of the RoverNode.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The type of enclosure rover nodes in this cluster are shipped in.
   */
  "enclosureType"?: model.EnclosureType;
  /**
   * A property that can contain details on the lifecycle.
   */
  "lifecycleStateDetails"?: string;
  /**
   * Serial number of the node.
   */
  "serialNumber"?: string;
  /**
   * Tracking Url for the shipped FmsRoverNode.
   */
  "oracleShippingTrackingUrl"?: string;
  /**
   * The flag indicating that customer requests data to be imported to OCI upon Rover node return.
   */
  "isImportRequested"?: boolean;
  /**
   * An OCID of a compartment where data will be imported to upon Rover node return.
   */
  "importCompartmentId"?: string;
  /**
   * Name of a bucket where files from NFS share will be imported to upon Rover node return.
   */
  "importFileBucket"?: string;
  /**
   * Validation code returned by data validation tool. Required for return shipping label generation if data import was requested.
   */
  "dataValidationCode"?: string;
  /**
   * Customer provided master key ID to encrypt secret information. If not provided, Rover's master key will be used for encryption.
   */
  "masterKeyId"?: string;
  /**
   * The freeform tags associated with this resource, if any. Each tag is a simple key-value pair with no
   * predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags associated with this resource, if any. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle cloud infrastructure services. Each key is predefined and scoped to namespaces.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateRoverNodeDetails {
  export enum ShippingPreference {
    OracleShipped = "ORACLE_SHIPPED",
    CustomerPickup = "CUSTOMER_PICKUP"
  }

  export function getJsonObj(obj: CreateRoverNodeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getJsonObj(obj.customerShippingAddress)
          : undefined,
        "nodeWorkloads": obj.nodeWorkloads
          ? obj.nodeWorkloads.map(item => {
              return model.RoverWorkload.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateRoverNodeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customerShippingAddress": obj.customerShippingAddress
          ? model.ShippingAddress.getDeserializedJsonObj(obj.customerShippingAddress)
          : undefined,
        "nodeWorkloads": obj.nodeWorkloads
          ? obj.nodeWorkloads.map(item => {
              return model.RoverWorkload.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}