/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
* For use with Oracle Cloud Infrastructure FastConnect.
* <p>
A virtual circuit is an isolated network path that runs over one or more physical
* network connections to provide a single, logical connection between the edge router
* on the customer's existing network and Oracle Cloud Infrastructure. *Private*
* virtual circuits support private peering, and *public* virtual circuits support
* public peering. For more information, see [FastConnect Overview](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/fastconnect.htm).
* <p>
Each virtual circuit is made up of information shared between a customer, Oracle,
* and a provider (if the customer is using FastConnect via a provider). Who fills in
* a given property of a virtual circuit depends on whether the BGP session related to
* that virtual circuit goes from the customer's edge router to Oracle, or from the provider's
* edge router to Oracle. Also, in the case where the customer is using a provider, values
* for some of the properties may not be present immediately, but may get filled in as the
* provider and Oracle each do their part to provision the virtual circuit.
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface VirtualCircuit {
  /**
    * The provisioned data rate of the connection. To get a list of the
* available bandwidth levels (that is, shapes), see
* {@link #listFastConnectProviderVirtualCircuitBandwidthShapes(ListFastConnectProviderVirtualCircuitBandwidthShapesRequest) listFastConnectProviderVirtualCircuitBandwidthShapes}.
* <p>
Example: `10 Gbps`
* 
    */
  "bandwidthShapeName"?: string;
  /**
   * BGP management option.
   *
   */
  "bgpManagement"?: VirtualCircuit.BgpManagement;
  /**
   * The state of the BGP session associated with the virtual circuit.
   */
  "bgpSessionState"?: VirtualCircuit.BgpSessionState;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the virtual circuit.
   */
  "compartmentId"?: string;
  /**
   * An array of mappings, each containing properties for a
   * cross-connect or cross-connect group that is associated with this
   * virtual circuit.
   *
   */
  "crossConnectMappings"?: Array<model.CrossConnectMapping>;
  /**
   * The BGP ASN of the network at the other end of the BGP
   * session from Oracle. If the session is between the customer's
   * edge router and Oracle, the value is the customer's ASN. If the BGP
   * session is between the provider's edge router and Oracle, the value
   * is the provider's ASN.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "customerBgpAsn"?: number;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the customer's {@link Drg}
   * that this virtual circuit uses. Applicable only to private virtual circuits.
   *
   */
  "gatewayId"?: string;
  /**
   * The virtual circuit's Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   */
  "id"?: string;
  /**
   * The virtual circuit's current state. For information about
   * the different states, see
   * [FastConnect Overview](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/fastconnect.htm).
   *
   */
  "lifecycleState"?: VirtualCircuit.LifecycleState;
  /**
   * The Oracle BGP ASN. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "oracleBgpAsn"?: number;
  /**
   * Deprecated. Instead use `providerServiceId`.
   *
   */
  "providerName"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the service offered by the provider (if the customer is connecting via a provider).
   *
   */
  "providerServiceId"?: string;
  /**
   * Deprecated. Instead use `providerServiceId`.
   *
   */
  "providerServiceName"?: string;
  /**
   * The provider's state in relation to this virtual circuit (if the
   * customer is connecting via a provider). ACTIVE means
   * the provider has provisioned the virtual circuit from their end.
   * INACTIVE means the provider has not yet provisioned the virtual
   * circuit, or has de-provisioned it.
   *
   */
  "providerState"?: VirtualCircuit.ProviderState;
  /**
   * For a public virtual circuit. The public IP prefixes (CIDRs) the customer wants to
   * advertise across the connection. All prefix sizes are allowed.
   *
   */
  "publicPrefixes"?: Array<string>;
  /**
   * Provider-supplied reference information about this virtual circuit
   * (if the customer is connecting via a provider).
   *
   */
  "referenceComment"?: string;
  /**
   * The Oracle Cloud Infrastructure region where this virtual
   * circuit is located.
   *
   */
  "region"?: string;
  /**
   * Provider service type.
   *
   */
  "serviceType"?: VirtualCircuit.ServiceType;
  /**
    * The date and time the virtual circuit was created,
* in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * Whether the virtual circuit supports private or public peering. For more information,
   * see [FastConnect Overview](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/fastconnect.htm).
   *
   */
  "type"?: VirtualCircuit.Type;
}

export namespace VirtualCircuit {
  export enum BgpManagement {
    CustomerManaged = "CUSTOMER_MANAGED",
    ProviderManaged = "PROVIDER_MANAGED",
    OracleManaged = "ORACLE_MANAGED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum BgpSessionState {
    Up = "UP",
    Down = "DOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    PendingProvider = "PENDING_PROVIDER",
    Verifying = "VERIFYING",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Failed = "FAILED",
    Inactive = "INACTIVE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ProviderState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ServiceType {
    Colocated = "COLOCATED",
    Layer2 = "LAYER2",
    Layer3 = "LAYER3",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Public = "PUBLIC",
    Private = "PRIVATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VirtualCircuit): object {
    const jsonObj = {
      ...obj,
      ...{
        "crossConnectMappings": obj.crossConnectMappings
          ? obj.crossConnectMappings.map(item => {
              return model.CrossConnectMapping.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VirtualCircuit): object {
    const jsonObj = {
      ...obj,
      ...{
        "crossConnectMappings": obj.crossConnectMappings
          ? obj.crossConnectMappings.map(item => {
              return model.CrossConnectMapping.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
