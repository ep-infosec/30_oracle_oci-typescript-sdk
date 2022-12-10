/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
import { DatabaseToolsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DatabaseToolsWaiter {
  public constructor(
    private client: DatabaseToolsClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDatabaseToolsConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseToolsConnectionResponse | null (null in case of 404 response)
   */
  public async forDatabaseToolsConnection(
    request: serviceRequests.GetDatabaseToolsConnectionRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseToolsConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabaseToolsConnection(request),
      response => targetStates.includes(response.databaseToolsConnection.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDatabaseToolsEndpointService till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseToolsEndpointServiceResponse | null (null in case of 404 response)
   */
  public async forDatabaseToolsEndpointService(
    request: serviceRequests.GetDatabaseToolsEndpointServiceRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseToolsEndpointServiceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabaseToolsEndpointService(request),
      response => targetStates.includes(response.databaseToolsEndpointService.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDatabaseToolsPrivateEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseToolsPrivateEndpointResponse | null (null in case of 404 response)
   */
  public async forDatabaseToolsPrivateEndpoint(
    request: serviceRequests.GetDatabaseToolsPrivateEndpointRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseToolsPrivateEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabaseToolsPrivateEndpoint(request),
      response => targetStates.includes(response.databaseToolsPrivateEndpoint.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
