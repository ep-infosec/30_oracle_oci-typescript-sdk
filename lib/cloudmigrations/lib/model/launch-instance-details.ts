/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Instance launch details.
 * Use the `sourceDetails` parameter to specify whether a boot volume or an image should be used to launch a new instance.
 *
 */
export interface LaunchInstanceDetails {
  /**
    * The availability domain of the instance.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The OCID of the compute capacity reservation under which this instance is launched.
   * You can opt out of all default reservations by specifying an empty string as input for this field.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "capacityReservationId"?: string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId"?: string;
  "createVnicDetails"?: model.CreateVnicDetails;
  /**
   * The OCID of the dedicated VM host.
   *
   */
  "dedicatedVmHostId"?: string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * A fault domain is a grouping of hardware and infrastructure within an availability domain.
* Each availability domain contains three fault domains. Fault domains lets you distribute your
* instances so that they are not on the same physical hardware within a single availability domain.
* A hardware failure or Compute hardware maintenance that affects one fault domain does not affect
* instances in other fault domains.
* <p>
If you do not specify the fault domain, the system selects one for you.
* <p>

* To get a list of fault domains, use the
* {@link #listFaultDomains(ListFaultDomainsRequest) listFaultDomains} operation in the
* Identity and Access Management Service API.
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomain"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. It exists only for cross-compatibility.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Deprecated. Instead use `hostnameLabel` in
   * {@link CreateVnicDetails}.
   * If you provide both, the values must match.
   *
   */
  "hostnameLabel"?: string;
  /**
    * This is an advanced option.
* <p>
When a bare metal or virtual machine
* instance boots, the iPXE firmware that runs on the instance is
* configured to run an iPXE script to continue the boot process.
* <p>
If you want more control over the boot process, you can provide
* your own custom iPXE script that will run when the instance boots.
* Be aware that the same iPXE script will run
* every time an instance boots, not only after the initial
* LaunchInstance call.
* <p>
By default, the iPXE script connects to the instance's local boot
* volume over iSCSI and performs a network boot. If you use a custom iPXE
* script and want to network-boot from the instance's local boot volume
* over iSCSI in the same way as the default iPXE script, use the
* following iSCSI IP address: 169.254.0.2, and boot volume IQN:
* iqn.2015-02.oracle.boot.
* <p>
If your instance boot volume type is paravirtualized,
* the boot volume is attached to the instance through virtio-scsi and no iPXE script is used.
* If your instance boot volume type is paravirtualized
* and you use custom iPXE to perform network-boot into your instance,
* the primary boot volume is attached as a data volume through the virtio-scsi drive.
* <p>
For more information about the Bring Your Own Image feature of
* Oracle Cloud Infrastructure, see
* [Bring Your Own Image](https://docs.cloud.oracle.com/iaas/Content/Compute/References/bringyourownimage.htm).
* <p>
For more information about iPXE, see http://ipxe.org.
* 
    */
  "ipxeScript"?: string;
  "instanceOptions"?: model.InstanceOptions;
  "preemptibleInstanceConfig"?: model.PreemptibleInstanceConfigDetails;
  "agentConfig"?: model.LaunchInstanceAgentConfigDetails;
  /**
    * The shape of an instance. The shape determines the number of CPUs, amount of memory,
* and other resources allocated to the instance.
* <p>
You can enumerate all available shapes by calling {@link #listShapes(ListShapesRequest) listShapes}.
* 
    */
  "shape"?: string;
  "shapeConfig"?: model.LaunchInstanceShapeConfigDetails;
  "sourceDetails"?: model.InstanceSourceViaImageDetails | model.InstanceSourceViaBootVolumeDetails;
  /**
   * Whether to enable in-transit encryption for the data volume's paravirtualized attachment. This field applies to both block volumes and boot volumes. By default, the value is false.
   */
  "isPvEncryptionInTransitEnabled"?: boolean;
}

export namespace LaunchInstanceDetails {
  export function getJsonObj(obj: LaunchInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "createVnicDetails": obj.createVnicDetails
          ? model.CreateVnicDetails.getJsonObj(obj.createVnicDetails)
          : undefined,

        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getJsonObj(obj.instanceOptions)
          : undefined,
        "preemptibleInstanceConfig": obj.preemptibleInstanceConfig
          ? model.PreemptibleInstanceConfigDetails.getJsonObj(obj.preemptibleInstanceConfig)
          : undefined,
        "agentConfig": obj.agentConfig
          ? model.LaunchInstanceAgentConfigDetails.getJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.LaunchInstanceShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LaunchInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "createVnicDetails": obj.createVnicDetails
          ? model.CreateVnicDetails.getDeserializedJsonObj(obj.createVnicDetails)
          : undefined,

        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getDeserializedJsonObj(obj.instanceOptions)
          : undefined,
        "preemptibleInstanceConfig": obj.preemptibleInstanceConfig
          ? model.PreemptibleInstanceConfigDetails.getDeserializedJsonObj(
              obj.preemptibleInstanceConfig
            )
          : undefined,
        "agentConfig": obj.agentConfig
          ? model.LaunchInstanceAgentConfigDetails.getDeserializedJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.LaunchInstanceShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.InstanceSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}