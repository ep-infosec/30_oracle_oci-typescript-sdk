/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
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
 * A compute instance's source and destination VNIC mapping.
 */
export interface ComputeInstanceVnicMappingDetails {
  /**
    * The OCID of the VNIC.
* <p>
Example: `ocid1.vnic.oc1.phx.exampleocid1`
* 
    */
  "sourceVnicId": string;
  /**
    * The OCID of the destination (remote) subnet to which this VNIC should connect.
* <p>
Example: `ocid1.subnet.oc1.iad.exampleocid2`
* 
    */
  "destinationSubnetId": string;
  /**
    * A list of destination region's network security group (NSG) Ids which this VNIC should use.
* <p>
Example: `[ ocid1.networksecuritygroup.oc1.iad.abcd1, ocid1.networksecuritygroup.oc1.iad.wxyz2 ]`
* 
    */
  "destinationNsgIdList"?: Array<string>;
}

export namespace ComputeInstanceVnicMappingDetails {
  export function getJsonObj(obj: ComputeInstanceVnicMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeInstanceVnicMappingDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
