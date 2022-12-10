/**
 * Service Manager Proxy API
 * Use the Service Manager Proxy API to obtain information about SaaS environments provisioned by Service Manager. 
You can get information such as service types and service environment URLs.

 * OpenAPI spec version: 20210914
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
 * Collection of service environments.
 * <p>
 **Note:** Service URL formats may vary from the provided example.
 *
 */
export interface ServiceEnvironmentCollection {
  /**
   * Collection of items.
   */
  "items": Array<model.ServiceEnvironmentSummary>;
}

export namespace ServiceEnvironmentCollection {
  export function getJsonObj(obj: ServiceEnvironmentCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ServiceEnvironmentSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ServiceEnvironmentCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ServiceEnvironmentSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
