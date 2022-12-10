/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The typed name rule for field projection.
 */
export interface TypedNamePatternRule extends model.ProjectionRule {
  /**
   * An array of types.
   */
  "types"?: Array<any>;
  /**
   * Specifies whether to skip remaining rules when a match is found.
   */
  "isSkipRemainingRulesOnMatch"?: boolean;
  /**
   * Reference to a typed object. This can be either a key value to an object within the document, a shall referenced to a `TypedObject`, or a full `TypedObject` definition.
   */
  "scope"?: any;
  /**
   * Specifies whether to cascade or not.
   */
  "isCascade"?: boolean;
  /**
   * The pattern matching strategy.
   */
  "matchingStrategy"?: TypedNamePatternRule.MatchingStrategy;
  /**
   * Specifies if the rule is case sensitive.
   */
  "isCaseSensitive"?: boolean;
  /**
   * The rule type.
   */
  "ruleType"?: TypedNamePatternRule.RuleType;
  /**
   * The rule pattern.
   */
  "pattern"?: string;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "names"?: Array<string>;

  "modelType": string;
}

export namespace TypedNamePatternRule {
  export enum MatchingStrategy {
    NameOrTags = "NAME_OR_TAGS",
    TagsOnly = "TAGS_ONLY",
    NameOnly = "NAME_ONLY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum RuleType {
    Include = "INCLUDE",
    Exclude = "EXCLUDE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TypedNamePatternRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ProjectionRule.getJsonObj(obj) as TypedNamePatternRule)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "TYPED_NAME_PATTERN_RULE";
  export function getDeserializedJsonObj(
    obj: TypedNamePatternRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ProjectionRule.getDeserializedJsonObj(obj) as TypedNamePatternRule)),
      ...{}
    };

    return jsonObj;
  }
}
