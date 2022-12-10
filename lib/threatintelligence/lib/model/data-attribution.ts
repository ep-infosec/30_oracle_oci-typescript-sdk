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
 * The confidence, source information, and visibility for a particular sighting or observation of some data associated with a threat indicator. This associated data can be the indicator's threat type, attribute, or relationship.
 */
export interface DataAttribution {
  /**
   * An integer from 0 to 100 that provides a measure of our certainty in the maliciousness of data attributed to an indicator. For example, if the source of the data being attributed is the Tor Project, our confidence that the associated indicator is a tor exit node would be 100. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence": number;
  "source": model.IndicatorSourceSummary;
  "visibility": model.DataVisibility;
  /**
   * The date and time the attribution data was first seen for this entity. If the data source does not provide this information, it is set to the last time it was seen. An RFC3339 formatted string.
   */
  "timeFirstSeen"?: Date;
  /**
   * The last date and time the attribution data was seen for this entity. An RFC3339 formatted string.
   */
  "timeLastSeen": Date;
}

export namespace DataAttribution {
  export function getJsonObj(obj: DataAttribution): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.IndicatorSourceSummary.getJsonObj(obj.source) : undefined,
        "visibility": obj.visibility ? model.DataVisibility.getJsonObj(obj.visibility) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataAttribution): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.IndicatorSourceSummary.getDeserializedJsonObj(obj.source)
          : undefined,
        "visibility": obj.visibility
          ? model.DataVisibility.getDeserializedJsonObj(obj.visibility)
          : undefined
      }
    };

    return jsonObj;
  }
}