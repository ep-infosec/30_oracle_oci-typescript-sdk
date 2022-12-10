/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * The details to update a retention rule.
 */
export interface UpdateRetentionRuleDetails {
  /**
   * A user-specified name for the retention rule. Names can be helpful in identifying retention rules.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  "duration"?: model.Duration;
  /**
   * The date and time as per [RFC 3339](https://tools.ietf.org/html/rfc3339) after which this rule is locked
   * and can only be deleted by deleting the bucket. Once a rule is locked, only increases in the duration are
   * allowed and no other properties can be changed. This property cannot be updated for rules that are in a
   * locked state. Specifying it when a duration is not specified is considered an error.
   *
   */
  "timeRuleLocked"?: Date;
}

export namespace UpdateRetentionRuleDetails {
  export function getJsonObj(obj: UpdateRetentionRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "duration": obj.duration ? model.Duration.getJsonObj(obj.duration) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateRetentionRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "duration": obj.duration ? model.Duration.getDeserializedJsonObj(obj.duration) : undefined
      }
    };

    return jsonObj;
  }
}
