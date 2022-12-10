/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Advanced feature metadata for the fleet
 */
export interface FleetAdvancedFeatureConfiguration {
  /**
   * Namespace for the fleet advanced feature
   */
  "analyticNamespace": string;
  /**
   * Bucket name required to store jfr and related data
   */
  "analyticBucketName": string;
  "lcm": model.Lcm;
  "cryptoEventAnalysis": model.CryptoEventAnalysis;
  "advancedUsageTracking": model.AdvancedUsageTracking;
  "jfrRecording": model.JfrRecording;
  /**
   * The date and time of the last modification to the Fleet Agent Configuration (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "timeLastModified": Date;
}

export namespace FleetAdvancedFeatureConfiguration {
  export function getJsonObj(obj: FleetAdvancedFeatureConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "lcm": obj.lcm ? model.Lcm.getJsonObj(obj.lcm) : undefined,
        "cryptoEventAnalysis": obj.cryptoEventAnalysis
          ? model.CryptoEventAnalysis.getJsonObj(obj.cryptoEventAnalysis)
          : undefined,
        "advancedUsageTracking": obj.advancedUsageTracking
          ? model.AdvancedUsageTracking.getJsonObj(obj.advancedUsageTracking)
          : undefined,
        "jfrRecording": obj.jfrRecording
          ? model.JfrRecording.getJsonObj(obj.jfrRecording)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FleetAdvancedFeatureConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "lcm": obj.lcm ? model.Lcm.getDeserializedJsonObj(obj.lcm) : undefined,
        "cryptoEventAnalysis": obj.cryptoEventAnalysis
          ? model.CryptoEventAnalysis.getDeserializedJsonObj(obj.cryptoEventAnalysis)
          : undefined,
        "advancedUsageTracking": obj.advancedUsageTracking
          ? model.AdvancedUsageTracking.getDeserializedJsonObj(obj.advancedUsageTracking)
          : undefined,
        "jfrRecording": obj.jfrRecording
          ? model.JfrRecording.getDeserializedJsonObj(obj.jfrRecording)
          : undefined
      }
    };

    return jsonObj;
  }
}
