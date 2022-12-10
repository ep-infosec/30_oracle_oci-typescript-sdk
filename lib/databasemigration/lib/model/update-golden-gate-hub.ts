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
 * Details about Oracle GoldenGate Microservices.
 *
 */
export interface UpdateGoldenGateHub {
  "restAdminCredentials"?: model.UpdateAdminCredentials;
  "sourceDbAdminCredentials"?: model.UpdateAdminCredentials;
  "sourceContainerDbAdminCredentials"?: model.UpdateAdminCredentials;
  "targetDbAdminCredentials"?: model.UpdateAdminCredentials;
  /**
   * Oracle GoldenGate hub's REST endpoint.
   * Refer to https://docs.oracle.com/en/middleware/goldengate/core/19.1/securing/network.html#GUID-A709DA55-111D-455E-8942-C9BDD1E38CAA
   *
   */
  "url"?: string;
  /**
   * Name of GoldenGate deployment to operate on source database
   *
   */
  "sourceMicroservicesDeploymentName"?: string;
  /**
   * Name of GoldenGate deployment to operate on target database
   *
   */
  "targetMicroservicesDeploymentName"?: string;
  /**
   * OCID of GoldenGate compute instance. An empty value will remove the stored computeId.
   *
   */
  "computeId"?: string;
}

export namespace UpdateGoldenGateHub {
  export function getJsonObj(obj: UpdateGoldenGateHub): object {
    const jsonObj = {
      ...obj,
      ...{
        "restAdminCredentials": obj.restAdminCredentials
          ? model.UpdateAdminCredentials.getJsonObj(obj.restAdminCredentials)
          : undefined,
        "sourceDbAdminCredentials": obj.sourceDbAdminCredentials
          ? model.UpdateAdminCredentials.getJsonObj(obj.sourceDbAdminCredentials)
          : undefined,
        "sourceContainerDbAdminCredentials": obj.sourceContainerDbAdminCredentials
          ? model.UpdateAdminCredentials.getJsonObj(obj.sourceContainerDbAdminCredentials)
          : undefined,
        "targetDbAdminCredentials": obj.targetDbAdminCredentials
          ? model.UpdateAdminCredentials.getJsonObj(obj.targetDbAdminCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateGoldenGateHub): object {
    const jsonObj = {
      ...obj,
      ...{
        "restAdminCredentials": obj.restAdminCredentials
          ? model.UpdateAdminCredentials.getDeserializedJsonObj(obj.restAdminCredentials)
          : undefined,
        "sourceDbAdminCredentials": obj.sourceDbAdminCredentials
          ? model.UpdateAdminCredentials.getDeserializedJsonObj(obj.sourceDbAdminCredentials)
          : undefined,
        "sourceContainerDbAdminCredentials": obj.sourceContainerDbAdminCredentials
          ? model.UpdateAdminCredentials.getDeserializedJsonObj(
              obj.sourceContainerDbAdminCredentials
            )
          : undefined,
        "targetDbAdminCredentials": obj.targetDbAdminCredentials
          ? model.UpdateAdminCredentials.getDeserializedJsonObj(obj.targetDbAdminCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
}