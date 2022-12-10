/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * An ordered collection of labels that are unique by name.
 *
 */
export interface LabelSet {
  /**
   * An ordered collection of labels that are unique by name.
   */
  "items"?: Array<model.Label>;
}

export namespace LabelSet {
  export function getJsonObj(obj: LabelSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.Label.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LabelSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.Label.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}