/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Input payload to create a Private Access Channel.
 *
 */
export interface CreatePrivateAccessChannelDetails {
  /**
   * Display Name of the Private Access Channel.
   *
   */
  "displayName": string;
  /**
   * OCID of the customer VCN peered with private access channel.
   *
   */
  "vcnId": string;
  /**
   * OCID of the customer subnet connected to private access channel.
   *
   */
  "subnetId": string;
  /**
   * List of Private Source DNS zones registered with Private Access Channel,
   * where datasource hostnames from these dns zones / domains will be resolved in the peered VCN for access from Analytics Instance.
   * Min of 1 is required and Max of 30 Private Source DNS zones can be registered.
   *
   */
  "privateSourceDnsZones": Array<model.PrivateSourceDnsZone>;
  /**
   * List of Private Source DB SCAN hosts registered with Private Access Channel for access from Analytics Instance.
   *
   */
  "privateSourceScanHosts"?: Array<model.PrivateSourceScanHost>;
  /**
   * Network Security Group OCIDs for an Analytics instance.
   *
   */
  "networkSecurityGroupIds"?: Array<string>;
}

export namespace CreatePrivateAccessChannelDetails {
  export function getJsonObj(obj: CreatePrivateAccessChannelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "privateSourceDnsZones": obj.privateSourceDnsZones
          ? obj.privateSourceDnsZones.map(item => {
              return model.PrivateSourceDnsZone.getJsonObj(item);
            })
          : undefined,
        "privateSourceScanHosts": obj.privateSourceScanHosts
          ? obj.privateSourceScanHosts.map(item => {
              return model.PrivateSourceScanHost.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreatePrivateAccessChannelDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "privateSourceDnsZones": obj.privateSourceDnsZones
          ? obj.privateSourceDnsZones.map(item => {
              return model.PrivateSourceDnsZone.getDeserializedJsonObj(item);
            })
          : undefined,
        "privateSourceScanHosts": obj.privateSourceScanHosts
          ? obj.privateSourceScanHosts.map(item => {
              return model.PrivateSourceScanHost.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}