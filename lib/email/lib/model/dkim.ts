/**
 * Email Delivery API
 * API for the Email Delivery service. Use this API to send high-volume, application-generated
emails. For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).


**Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
 * The properties that define a DKIM.
 *
 */
export interface Dkim {
  /**
   * The DKIM selector.
   * If the same domain is managed in more than one region, each region must use different selectors.
   *
   */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the DKIM.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the email domain
   * that this DKIM belongs to.
   *
   */
  "emailDomainId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains this DKIM.
   *
   */
  "compartmentId"?: string;
  /**
   * The current state of the DKIM.
   */
  "lifecycleState"?: Dkim.LifecycleState;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a resource.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The description of the DKIM. Avoid entering confidential information.
   */
  "description"?: string;
  /**
    * The time the DKIM was created.
* Times are expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format, \"YYYY-MM-ddThh:mmZ\".
* <p>
Example: `2021-02-12T22:47:12.613Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The time of the last change to the DKIM configuration, due to a state change or
   * an update operation.
   * Times are expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format, \"YYYY-MM-ddThh:mmZ\".
   *
   */
  "timeUpdated"?: Date;
  /**
   * The name of the DNS subdomain that must be provisioned to enable email recipients to verify DKIM signatures.
   * It is usually created with a CNAME record set to the cnameRecordValue
   *
   */
  "dnsSubdomainName"?: string;
  /**
   * The DNS CNAME record value to provision to the DKIM DNS subdomain, when using the CNAME method for DKIM setup (preferred).
   *
   */
  "cnameRecordValue"?: string;
  /**
   * The DNS TXT record value to provision to the DKIM DNS subdomain in place of using a CNAME record.
   * This is used in cases where a CNAME can not be used, such as when the cnameRecordValue would exceed the maximum length for a DNS entry.
   * This can also be used by customers who have an existing procedure to directly provision TXT records for DKIM.
   * Be aware that many DNS APIs will require you to break this string into segments of less than 255 characters.
   *
   */
  "txtRecordValue"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
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

export namespace Dkim {
  export enum LifecycleState {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Inactive = "INACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Dkim): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Dkim): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}