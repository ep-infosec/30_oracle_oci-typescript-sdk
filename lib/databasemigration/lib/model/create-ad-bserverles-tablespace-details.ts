/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
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
 * Migration tablespace settings valid for ADB-S target type using remap feature.
 *
 */
export interface CreateADBServerlesTablespaceDetails
  extends model.CreateTargetTypeTablespaceDetails {
  "targetType": string;
}

export namespace CreateADBServerlesTablespaceDetails {
  export function getJsonObj(
    obj: CreateADBServerlesTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as CreateADBServerlesTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "ADB_S_REMAP";
  export function getDeserializedJsonObj(
    obj: CreateADBServerlesTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateTargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as CreateADBServerlesTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
