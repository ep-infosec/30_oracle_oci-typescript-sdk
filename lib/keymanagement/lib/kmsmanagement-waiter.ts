/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
import { KmsManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class KmsManagementWaiter {
  public constructor(
    private client: KmsManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forKey till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetKeyResponse | null (null in case of 404 response)
   */
  public async forKey(
    request: serviceRequests.GetKeyRequest,
    ...targetStates: models.Key.LifecycleState[]
  ): Promise<serviceResponses.GetKeyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getKey(request),
      response => targetStates.includes(response.key.lifecycleState!),
      targetStates.includes(models.Key.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forKeyVersion till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetKeyVersionResponse | null (null in case of 404 response)
   */
  public async forKeyVersion(
    request: serviceRequests.GetKeyVersionRequest,
    ...targetStates: models.KeyVersion.LifecycleState[]
  ): Promise<serviceResponses.GetKeyVersionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getKeyVersion(request),
      response => targetStates.includes(response.keyVersion.lifecycleState!),
      targetStates.includes(models.KeyVersion.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWrappingKey till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetWrappingKeyResponse | null (null in case of 404 response)
   */
  public async forWrappingKey(
    request: serviceRequests.GetWrappingKeyRequest,
    ...targetStates: models.WrappingKey.LifecycleState[]
  ): Promise<serviceResponses.GetWrappingKeyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getWrappingKey(request),
      response => targetStates.includes(response.wrappingKey.lifecycleState!),
      targetStates.includes(models.WrappingKey.LifecycleState.Deleted)
    );
  }
}