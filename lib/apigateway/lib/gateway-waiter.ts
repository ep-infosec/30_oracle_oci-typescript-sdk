/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { GatewayClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class GatewayWaiter {
  public constructor(
    private client: GatewayClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forGateway till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetGatewayResponse | null (null in case of 404 response)
   */
  public async forGateway(
    request: serviceRequests.GetGatewayRequest,
    ...targetStates: models.Gateway.LifecycleState[]
  ): Promise<serviceResponses.GetGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getGateway(request),
      response => targetStates.includes(response.gateway.lifecycleState!),
      targetStates.includes(models.Gateway.LifecycleState.Deleted)
    );
  }
}