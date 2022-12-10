/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
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
 * A protocol identifier (such as TCP, UDP, or ICMP)
 * and protocol-specific parameters (such as a port range).
 *
 */
export interface Application {
  "type": string;
}

export namespace Application {
  export function getJsonObj(obj: Application): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ICMP":
          return model.IcmpApplication.getJsonObj(<model.IcmpApplication>(<object>jsonObj), true);
        case "UDP":
          return model.UdpApplication.getJsonObj(<model.UdpApplication>(<object>jsonObj), true);
        case "TCP":
          return model.TcpApplication.getJsonObj(<model.TcpApplication>(<object>jsonObj), true);
        case "ICMP6":
          return model.Icmp6Application.getJsonObj(<model.Icmp6Application>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Application): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "ICMP":
          return model.IcmpApplication.getDeserializedJsonObj(
            <model.IcmpApplication>(<object>jsonObj),
            true
          );
        case "UDP":
          return model.UdpApplication.getDeserializedJsonObj(
            <model.UdpApplication>(<object>jsonObj),
            true
          );
        case "TCP":
          return model.TcpApplication.getDeserializedJsonObj(
            <model.TcpApplication>(<object>jsonObj),
            true
          );
        case "ICMP6":
          return model.Icmp6Application.getDeserializedJsonObj(
            <model.Icmp6Application>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}