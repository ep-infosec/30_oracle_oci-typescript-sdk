/**
 * Service Connector Hub API
 * Use the Service Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Service Connector Hub, see
[Service Connector Hub Overview](/iaas/Content/service-connector-hub/overview.htm).

 * OpenAPI spec version: 20200909
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
 * The Logging source.
 * For configuration instructions, see
 * [To create a service connector](https://docs.cloud.oracle.com/iaas/Content/service-connector-hub/managingconnectors.htm#create).
 *
 */
export interface LoggingSourceDetails extends model.SourceDetails {
  /**
   * The logs for this Logging source.
   *
   */
  "logSources": Array<model.LogSource>;

  "kind": string;
}

export namespace LoggingSourceDetails {
  export function getJsonObj(obj: LoggingSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.SourceDetails.getJsonObj(obj) as LoggingSourceDetails)),
      ...{
        "logSources": obj.logSources
          ? obj.logSources.map(item => {
              return model.LogSource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const kind = "logging";
  export function getDeserializedJsonObj(
    obj: LoggingSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SourceDetails.getDeserializedJsonObj(obj) as LoggingSourceDetails)),
      ...{
        "logSources": obj.logSources
          ? obj.logSources.map(item => {
              return model.LogSource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}