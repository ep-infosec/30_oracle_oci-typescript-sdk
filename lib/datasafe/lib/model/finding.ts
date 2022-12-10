/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The particular finding reported by the security assessment.
 */
export interface Finding {
  /**
   * A unique identifier for the finding. This is common for the finding across targets.
   */
  "key"?: string;
  /**
   * The severity of the finding.
   */
  "severity"?: Finding.Severity;
  /**
   * The short title for the finding.
   */
  "title"?: string;
  /**
   * The explanation of the issue in this finding. It explains the reason for the rule and, if a risk is reported, it may also explain the recommended actions for remediation.
   */
  "remarks"?: string;
  /**
   * The details of the finding. Provides detailed information to explain the finding summary, typically results from the assessed database, followed by any recommendations for changes.
   */
  "details"?: any;
  /**
   * The brief summary of the finding. When the finding is informational, the summary typically reports only the number of data elements that were examined.
   */
  "summary"?: string;
  /**
   * Provides information on whether the finding is related to a CIS Oracle Database Benchmark recommendation, STIG rule, or related to a GDPR Article/Recital.
   */
  "references"?: model.References;
}

export namespace Finding {
  export enum Severity {
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW",
    Evaluate = "EVALUATE",
    Advisory = "ADVISORY",
    Pass = "PASS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Finding): object {
    const jsonObj = {
      ...obj,
      ...{
        "references": obj.references ? model.References.getJsonObj(obj.references) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Finding): object {
    const jsonObj = {
      ...obj,
      ...{
        "references": obj.references
          ? model.References.getDeserializedJsonObj(obj.references)
          : undefined
      }
    };

    return jsonObj;
  }
}