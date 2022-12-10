/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
import { ApplicationMigrationClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ApplicationMigrationWaiter {
  public constructor(
    private client: ApplicationMigrationClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forMigration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMigrationResponse | null (null in case of 404 response)
   */
  public async forMigration(
    request: serviceRequests.GetMigrationRequest,
    ...targetStates: models.MigrationLifecycleStates[]
  ): Promise<serviceResponses.GetMigrationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMigration(request),
      response => targetStates.includes(response.migration.lifecycleState!),
      targetStates.includes(models.MigrationLifecycleStates.Deleted)
    );
  }

  /**
   * Waits forSource till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetSourceResponse | null (null in case of 404 response)
   */
  public async forSource(
    request: serviceRequests.GetSourceRequest,
    ...targetStates: models.SourceLifecycleStates[]
  ): Promise<serviceResponses.GetSourceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getSource(request),
      response => targetStates.includes(response.source.lifecycleState!),
      targetStates.includes(models.SourceLifecycleStates.Deleted)
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