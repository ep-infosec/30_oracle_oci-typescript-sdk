/**
 * Data Connectivity Management API
 * Use the Data Connectivity Management Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20210217
 * Contact: di_dcms_dev_ww_grp@oracle.com
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
import { DataConnectivityManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataConnectivityManagementWaiter {
  public constructor(
    private client: DataConnectivityManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEndpointResponse | null (null in case of 404 response)
   */
  public async forEndpoint(
    request: serviceRequests.GetEndpointRequest,
    ...targetStates: models.Endpoint.LifecycleState[]
  ): Promise<serviceResponses.GetEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEndpoint(request),
      response => targetStates.includes(response.endpoint.lifecycleState!),
      targetStates.includes(models.Endpoint.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forRegistry till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRegistryResponse | null (null in case of 404 response)
   */
  public async forRegistry(
    request: serviceRequests.GetRegistryRequest,
    ...targetStates: models.Registry.LifecycleState[]
  ): Promise<serviceResponses.GetRegistryResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRegistry(request),
      response => targetStates.includes(response.registry.lifecycleState!),
      targetStates.includes(models.Registry.LifecycleState.Deleted)
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