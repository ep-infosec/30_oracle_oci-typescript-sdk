/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Properties used to publish an Oracle Cloud Infrastructure Data Flow object.
 */
export interface CreateExternalPublicationDetails {
  /**
   * The unique OCID of the identifier that is returned after creating the Oracle Cloud Infrastructure Data Flow application.
   */
  "applicationId"?: string;
  /**
   * The OCID of the compartment where the application is created in the Oracle Cloud Infrastructure Data Flow Service.
   */
  "applicationCompartmentId": string;
  /**
   * The name of the application.
   */
  "displayName": string;
  /**
   * The details of the data flow or the application.
   */
  "description"?: string;
  "resourceConfiguration"?: model.ResourceConfiguration;
  "configurationDetails"?: model.ConfigurationDetails;
}

export namespace CreateExternalPublicationDetails {
  export function getJsonObj(obj: CreateExternalPublicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceConfiguration": obj.resourceConfiguration
          ? model.ResourceConfiguration.getJsonObj(obj.resourceConfiguration)
          : undefined,
        "configurationDetails": obj.configurationDetails
          ? model.ConfigurationDetails.getJsonObj(obj.configurationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateExternalPublicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceConfiguration": obj.resourceConfiguration
          ? model.ResourceConfiguration.getDeserializedJsonObj(obj.resourceConfiguration)
          : undefined,
        "configurationDetails": obj.configurationDetails
          ? model.ConfigurationDetails.getDeserializedJsonObj(obj.configurationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}