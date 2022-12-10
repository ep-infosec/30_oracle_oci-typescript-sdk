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
 * A data signature observed on a network or host that indicates a potential security threat. Indicators can be plain text or computed (hashed) values.
 */
export interface Indicator {
  /**
   * The OCID of the indicator.
   */
  "id": string;
  /**
   * The type of indicator.
   */
  "type": model.IndicatorType;
  /**
    * The value for this indicator.
* The value's format is dependent upon its `type`. Examples:
* <p>
DOMAIN_NAME \"evil.example.com\"
* <p>
MD5_HASH \"44d88612fea8a8f36de82e1278abb02f\"
* <p>
IP_ADDRESS \"2001:db8::1\"
* 
    */
  "value": string;
  /**
   * An integer from 0 to 100 that represents how certain we are that the indicator is malicious and a potential threat if it is detected communicating with your cloud resources. This confidence value is aggregated from the confidence in the threat types, attributes, and relationships to create an overall value for the indicator. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "confidence"?: number;
  /**
   * The OCID of the compartment that contains this indicator.
   */
  "compartmentId"?: string;
  /**
   * Characteristics of the threat indicator based on previous observations or behavior. May include related tactics, techniques, and procedures.
   */
  "threatTypes": Array<model.ThreatType>;
  /**
   * A map of attributes with additional information about the indicator.
   * Each attribute has a name (string), value (string), and attribution (supporting data).
   *
   */
  "attributes": Array<model.IndicatorAttribute>;
  /**
   * A map of relationships between the indicator and other entities.
   * Each relationship has a name (string), related entity, and attribution (supporting data).
   *
   */
  "relationships": Array<model.IndicatorRelationship>;
  /**
   * The state of the indicator. It will always be `ACTIVE`.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * The date and time that the indicator was first detected. An RFC3339 formatted string.
   */
  "timeCreated": Date;
  /**
   * The date and time that this indicator was last updated. The value is the same as `timeCreated` for a new indicator. An RFC3339 formatted string.
   */
  "timeUpdated": Date;
  /**
   * The date and time that this indicator was last seen. The value is the same as `timeCreated` for a new indicator. An RFC3339 formatted string.
   */
  "timeLastSeen": Date;
  "geodata": model.GeodataDetails;
}

export namespace Indicator {
  export function getJsonObj(obj: Indicator): object {
    const jsonObj = {
      ...obj,
      ...{
        "threatTypes": obj.threatTypes
          ? obj.threatTypes.map(item => {
              return model.ThreatType.getJsonObj(item);
            })
          : undefined,
        "attributes": obj.attributes
          ? obj.attributes.map(item => {
              return model.IndicatorAttribute.getJsonObj(item);
            })
          : undefined,
        "relationships": obj.relationships
          ? obj.relationships.map(item => {
              return model.IndicatorRelationship.getJsonObj(item);
            })
          : undefined,

        "geodata": obj.geodata ? model.GeodataDetails.getJsonObj(obj.geodata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Indicator): object {
    const jsonObj = {
      ...obj,
      ...{
        "threatTypes": obj.threatTypes
          ? obj.threatTypes.map(item => {
              return model.ThreatType.getDeserializedJsonObj(item);
            })
          : undefined,
        "attributes": obj.attributes
          ? obj.attributes.map(item => {
              return model.IndicatorAttribute.getDeserializedJsonObj(item);
            })
          : undefined,
        "relationships": obj.relationships
          ? obj.relationships.map(item => {
              return model.IndicatorRelationship.getDeserializedJsonObj(item);
            })
          : undefined,

        "geodata": obj.geodata
          ? model.GeodataDetails.getDeserializedJsonObj(obj.geodata)
          : undefined
      }
    };

    return jsonObj;
  }
}