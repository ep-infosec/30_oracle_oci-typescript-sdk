/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
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
 * An Apdex configuration rule.
 * The Apdex score is computed based on how the response time of a span compares to two predefined threshold values.
 * The first threshold defines the maximum response time that is considered satisfactory for the end user.
 * The second one defines the maximum response time that is considered tolerable. All times larger than that will
 * be considered frustrating for the end user.
 * An Apdex configuration rule works by selecting a subset of spans based on a filter expression and applying the
 * two threshold comparisons to compute a score for each of the selected spans.
 * The rule has an \"isApplyToErrorSpans\" property that controls whether or not to compute the Apdex for spans that
 * have been marked as errors. If this property is set to \"true\", then the Apdex score for error spans is computed in
 * the same way as for non-error ones. If set to \"false\", then computation for error spans is skipped, and the score
 * is set to \"frustrating\" regardless of the configured thresholds. The default is \"false\".
 * The \"isEnabled\" property controls whether or not an Apdex score is computed and can be used to disable Apdex
 * score for certain spans. The default is \"true\".
 * The \"priority\" property specifies the importance of the rule within a rule set.
 * Lower values indicate a higher priority. Rules with higher priorities are evaluated first in the rule set. The
 * priority of the rules must be unique within a rule set.
 *
 */
export interface Apdex {
  /**
   * The string that defines the Span Filter expression.
   *
   */
  "filterText": string;
  /**
   * The priority controls the order in which multiple rules in a rule set are applied. Lower values indicate higher
   * priorities. Rules with higher priority are applied first, and once a match is found, the rest of the rules are
   * ignored. Rules within the same rule set cannot have the same priority.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority": number;
  /**
   * Specifies whether the Apdex score should be computed for spans matching the rule. This can be used to disable
   * Apdex score for spans that do not need or require it. The default is \"true\".
   *
   */
  "isEnabled"?: boolean;
  /**
   * The maximum response time in milliseconds that is considered \"satisfactory\" for the end user.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "satisfiedResponseTime"?: number;
  /**
   * The maximum response time in milliseconds that is considered \"tolerable\" for the end user. A response
   * time beyond this threshold is considered \"frustrating\".
   * This value cannot be lower than \"satisfiedResponseTime\".
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "toleratingResponseTime"?: number;
  /**
   * Specifies whether an Apdex score should be computed for error spans. Setting it to \"true\" means that the Apdex
   * score is computed in the usual way. Setting it to \"false\" skips the Apdex computation and sets the Apdex
   * score to \"frustrating\" regardless of the configured thresholds. The default is \"false\".
   *
   */
  "isApplyToErrorSpans"?: boolean;
  /**
   * The name by which a configuration entity is displayed to the end user.
   */
  "displayName"?: string;
}

export namespace Apdex {
  export function getJsonObj(obj: Apdex): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Apdex): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}