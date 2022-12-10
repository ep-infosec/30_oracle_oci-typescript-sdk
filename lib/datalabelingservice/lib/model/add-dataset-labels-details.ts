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
 * Adds a subset of Labels to the Dataset's LabelSet.  This LabelSet will be merged with the current Dataset's LabelSet. Requests with duplicate Labels will be rejected.
 *
 */
export interface AddDatasetLabelsDetails {
  "labelSet"?: model.LabelSet;
}

export namespace AddDatasetLabelsDetails {
  export function getJsonObj(obj: AddDatasetLabelsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "labelSet": obj.labelSet ? model.LabelSet.getJsonObj(obj.labelSet) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AddDatasetLabelsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "labelSet": obj.labelSet ? model.LabelSet.getDeserializedJsonObj(obj.labelSet) : undefined
      }
    };

    return jsonObj;
  }
}
