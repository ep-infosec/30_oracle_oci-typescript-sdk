/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
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
* A localized geographic area, such as Phoenix, AZ. Oracle Cloud Infrastructure is hosted in regions and Availability
* Domains. A region is composed of several Availability Domains. An Availability Domain is one or more data centers
* located within a region. For more information, see [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access,
* see [Get Started with Policies](https://docs.cloud.oracle.com/Content/Identity/policiesgs/get-started-with-policies.htm).
* 
*/
export interface Region {
  /**
    * The key of the region. See [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm) for
* the full list of supported 3-letter region codes.
* <p>
Example: `PHX`
* 
    */
  "key"?: string;
  /**
    * The name of the region. See [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm)
* for the full list of supported region names.
* <p>
Example: `us-phoenix-1`
* 
    */
  "name"?: string;
}

export namespace Region {
  export function getJsonObj(obj: Region): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Region): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}