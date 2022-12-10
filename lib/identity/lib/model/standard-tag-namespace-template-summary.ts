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
 * The template of the standard tag namespace. This object includes necessary details to create the provided standard tag namespace.
 */
export interface StandardTagNamespaceTemplateSummary {
  /**
   * The default description of the tag namespace that users can use to create the tag namespace
   */
  "description": string;
  /**
   * The reserved name of this standard tag namespace
   */
  "standardTagNamespaceName": string;
  /**
   * The status of the standard tag namespace
   */
  "status": string;
}

export namespace StandardTagNamespaceTemplateSummary {
  export function getJsonObj(obj: StandardTagNamespaceTemplateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StandardTagNamespaceTemplateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
