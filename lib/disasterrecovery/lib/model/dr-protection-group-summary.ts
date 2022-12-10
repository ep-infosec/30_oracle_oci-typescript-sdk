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
 * Summary information about a DR Protection Group.
 */
export interface DrProtectionGroupSummary {
  /**
    * The OCID of the DR Protection Group.
* <p>
Example: `ocid1.drprotectiongroup.oc1.phx.exampleocid1`
* 
    */
  "id": string;
  /**
    * The OCID of the compartment containing the DR Protection Group.
* <p>
Example: `ocid1.compartment.oc1..exampleocid1`
* 
    */
  "compartmentId": string;
  /**
    * The display name of the DR Protection Group.
* <p>
Example: `EBS PHX DRPG`
* 
    */
  "displayName": string;
  /**
   * The role of the DR Protection Group.
   *
   */
  "role": model.DrProtectionGroupRole;
  /**
    * The OCID of the peer (remote) DR Protection Group.
* <p>
Example: `ocid1.drprotectiongroup.oc1.iad.exampleocid2`
* 
    */
  "peerId"?: string;
  /**
    * The region of the peer (remote) DR Protection Group.
* <p>
Example: `us-ashburn-1`
* 
    */
  "peerRegion"?: string;
  /**
    * The date and time the DR Protection Group was created. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the DR Protection Group was updated. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeUpdated": Date;
  /**
   * The current state of the DR Protection Group.
   *
   */
  "lifecycleState": model.DrProtectionGroupLifecycleState;
  /**
   * A message describing the DR Protection Group's current state in more detail.
   *
   */
  "lifeCycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DrProtectionGroupSummary {
  export function getJsonObj(obj: DrProtectionGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrProtectionGroupSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}