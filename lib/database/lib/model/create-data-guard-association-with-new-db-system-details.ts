/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The configuration details for creating a Data Guard association for a virtual machine DB system database. For this type of DB system database, the `creationType` should be `NewDbSystem`. A new DB system will be launched to create the standby database.
* <p>
To create a Data Guard association for a database in a bare metal or Exadata DB system, use the {@link #createDataGuardAssociationToExistingDbSystemDetails(CreateDataGuardAssociationToExistingDbSystemDetailsRequest) createDataGuardAssociationToExistingDbSystemDetails} subtype instead.
* 
*/
export interface CreateDataGuardAssociationWithNewDbSystemDetails
  extends model.CreateDataGuardAssociationDetails {
  /**
   * The user-friendly name of the DB system that will contain the the standby database. The display name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The name of the availability domain that the standby database DB system will be located in. For example- \"Uocm:PHX-AD-1\".
   */
  "availabilityDomain"?: string;
  /**
    * The virtual machine DB system shape to launch for the standby database in the Data Guard association. The shape determines the number of CPU cores and the amount of memory available for the DB system.
* Only virtual machine shapes are valid options. If you do not supply this parameter, the default shape is the shape of the primary DB system.
* <p>
To get a list of all shapes, use the {@link #listDbSystemShapes(ListDbSystemShapesRequest) listDbSystemShapes} operation.
* 
    */
  "shape"?: string;
  /**
   * The number of OCPU cores available for AMD-based virtual machine DB systems. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The block storage volume performance level. Valid values are `BALANCED` and `HIGH_PERFORMANCE`. See [Block Volume Performance](https://docs.cloud.oracle.com/Content/Block/Concepts/blockvolumeperformance.htm) for more information.
   *
   */
  "storageVolumePerformanceMode"?: CreateDataGuardAssociationWithNewDbSystemDetails.StorageVolumePerformanceMode;
  /**
   * The number of nodes to launch for the DB system of the standby in the Data Guard association. For a 2-node RAC virtual machine DB system, specify either 1 or 2. If you do not supply this parameter, the default is the node count of the primary DB system.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount"?: number;
  /**
    * The OCID of the subnet the DB system is associated with.
* **Subnet Restrictions:**
* - For 1- and 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.16.16/28
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId"?: string;
  /**
   * The list of [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A list of the [OCIDs](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the network security groups (NSGs) that the backup network of this DB system belongs to. Setting this to an empty array after the list is created removes the resource from all NSGs. For more information about NSGs, see [Security Rules](https://docs.cloud.oracle.com/Content/Network/Concepts/securityrules.htm). Applicable only to Exadata systems.
   *
   */
  "backupNetworkNsgIds"?: Array<string>;
  /**
   * The hostname for the DB node.
   */
  "hostname"?: string;
  /**
   * The time zone of the dataguard standby DB system. For details, see [DB System Time Zones](https://docs.cloud.oracle.com/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
    * A Fault Domain is a grouping of hardware and infrastructure within an availability domain.
* Fault Domains let you distribute your instances so that they are not on the same physical
* hardware within a single availability domain. A hardware failure or maintenance
* that affects one Fault Domain does not affect DB systems in other Fault Domains.
* <p>
If you do not specify the Fault Domain, the system selects one for you. To change the Fault
* Domain for a DB system, terminate it and launch a new DB system in the preferred Fault Domain.
* <p>
If the node count is greater than 1, you can specify which Fault Domains these nodes will be distributed into.
* The system assigns your nodes automatically to the Fault Domains you specify so that
* no Fault Domain contains more than one node.
* <p>
To get a list of Fault Domains, use the
* {@link #listFaultDomains(ListFaultDomainsRequest) listFaultDomains} operation in the
* Identity and Access Management Service API.
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomains"?: Array<string>;
  /**
   * The IPv4 address from the provided OCI subnet which needs to be assigned to the VNIC. If not provided, it will
   * be auto-assigned with an available IPv4 address from the subnet.
   *
   */
  "privateIp"?: string;
  /**
   * The Oracle license model that applies to all the databases on the dataguard standby DB system. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: CreateDataGuardAssociationWithNewDbSystemDetails.LicenseModel;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "dbSystemFreeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "dbSystemDefinedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "databaseFreeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   *
   */
  "databaseDefinedTags"?: { [key: string]: { [key: string]: any } };
  "dataCollectionOptions"?: model.DataCollectionOptions;

  "creationType": string;
}

export namespace CreateDataGuardAssociationWithNewDbSystemDetails {
  export enum StorageVolumePerformanceMode {
    Balanced = "BALANCED",
    HighPerformance = "HIGH_PERFORMANCE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE"
  }

  export function getJsonObj(
    obj: CreateDataGuardAssociationWithNewDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataGuardAssociationDetails.getJsonObj(
            obj
          ) as CreateDataGuardAssociationWithNewDbSystemDetails)),
      ...{
        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getJsonObj(obj.dataCollectionOptions)
          : undefined
      }
    };

    return jsonObj;
  }
  export const creationType = "NewDbSystem";
  export function getDeserializedJsonObj(
    obj: CreateDataGuardAssociationWithNewDbSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDataGuardAssociationDetails.getDeserializedJsonObj(
            obj
          ) as CreateDataGuardAssociationWithNewDbSystemDetails)),
      ...{
        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getDeserializedJsonObj(obj.dataCollectionOptions)
          : undefined
      }
    };

    return jsonObj;
  }
}
