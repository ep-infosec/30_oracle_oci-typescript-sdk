/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Monitored resource member
 */
export interface MonitoredResourceMemberSummary {
  /**
   * Monitored resource identifier
   */
  "resourceId"?: string;
  /**
   * Monitored resource name
   */
  "resourceName"?: string;
  /**
   * Monitored resource display name.
   */
  "resourceDisplayName"?: string;
  /**
   * Monitored resource type
   */
  "resourceType"?: string;
  /**
   * Monitored Resource Host
   */
  "hostName"?: string;
  /**
   * External resource is any OCI resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   * which is not a Stack Monitoring service resource.
   * Currently supports only following resource type identifiers - externalcontainerdatabase,
   * externalnoncontainerdatabase, externalpluggabledatabase and OCI compute instance.
   *
   */
  "externalId"?: string;
  /**
   * Parent monitored resource identifier
   */
  "parentId"?: string;
  /**
   * The current state of the Resource.
   */
  "lifecycleState"?: model.ResourceLifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
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

export namespace MonitoredResourceMemberSummary {
  export function getJsonObj(obj: MonitoredResourceMemberSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceMemberSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
