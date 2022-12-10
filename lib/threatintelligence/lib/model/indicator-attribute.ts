/**
 * Threat Intelligence API
 * Use the Threat Intelligence API to search for information about known threat indicators, including suspicious IP addresses, domain names, and other digital fingerprints. Threat Intelligence is a managed database of curated threat intelligence that comes from first party Oracle security insights, open source feeds, and vendor-procured data. For more information, see the [Threat Intelligence documentation](/iaas/Content/threat-intel/home.htm).
 * OpenAPI spec version: 20220901
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
 * An attribute name and list of values with attribution.
 */
export interface IndicatorAttribute {
  /**
   * The name of the attribute.
   */
  "name": string;
  /**
   * The value of the attribute.
   */
  "value": string;
  /**
   * The array of attribution data that support this attribute.
   */
  "attribution": Array<model.DataAttribution>;
}

export namespace IndicatorAttribute {
  export function getJsonObj(obj: IndicatorAttribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "attribution": obj.attribution
          ? obj.attribution.map(item => {
              return model.DataAttribution.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IndicatorAttribute): object {
    const jsonObj = {
      ...obj,
      ...{
        "attribution": obj.attribution
          ? obj.attribution.map(item => {
              return model.DataAttribution.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
