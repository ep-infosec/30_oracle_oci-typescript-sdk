/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
import { ComputeClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";
import { waitForWorkRequest, WorkRequestClient, responses } from "oci-workrequests";

export class ComputeWaiter {
  public constructor(
    private client: ComputeClient,
    private workRequestClient: WorkRequestClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forChangeComputeCapacityReservationCompartment
   *
   * @param request the request to send
   * @return response returns ChangeComputeCapacityReservationCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeComputeCapacityReservationCompartment(
    request: serviceRequests.ChangeComputeCapacityReservationCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeComputeCapacityReservationCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeComputeCapacityReservationCompartmentResponse = await this.client.changeComputeCapacityReservationCompartment(
      request
    );
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeComputeCapacityReservationCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeComputeCapacityReservationCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forChangeDedicatedVmHostCompartment
   *
   * @param request the request to send
   * @return response returns ChangeDedicatedVmHostCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeDedicatedVmHostCompartment(
    request: serviceRequests.ChangeDedicatedVmHostCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeDedicatedVmHostCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeDedicatedVmHostCompartmentResponse = await this.client.changeDedicatedVmHostCompartment(
      request
    );
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeDedicatedVmHostCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeDedicatedVmHostCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forChangeInstanceCompartment
   *
   * @param request the request to send
   * @return response returns ChangeInstanceCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeInstanceCompartment(
    request: serviceRequests.ChangeInstanceCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeInstanceCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeInstanceCompartmentResponse = await this.client.changeInstanceCompartment(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeInstanceCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeInstanceCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forCreateComputeCapacityReservation
   *
   * @param request the request to send
   * @return response returns CreateComputeCapacityReservationResponse, GetWorkRequestResponse tuple
   */
  public async forCreateComputeCapacityReservation(
    request: serviceRequests.CreateComputeCapacityReservationRequest
  ): Promise<{
    response: serviceResponses.CreateComputeCapacityReservationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createComputeCapacityReservationResponse = await this.client.createComputeCapacityReservation(
      request
    );
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createComputeCapacityReservationResponse.opcWorkRequestId
    );
    return {
      response: createComputeCapacityReservationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forCreateDedicatedVmHost
   *
   * @param request the request to send
   * @return response returns CreateDedicatedVmHostResponse, GetWorkRequestResponse tuple
   */
  public async forCreateDedicatedVmHost(
    request: serviceRequests.CreateDedicatedVmHostRequest
  ): Promise<{
    response: serviceResponses.CreateDedicatedVmHostResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createDedicatedVmHostResponse = await this.client.createDedicatedVmHost(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createDedicatedVmHostResponse.opcWorkRequestId
    );
    return { response: createDedicatedVmHostResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forCreateImage
   *
   * @param request the request to send
   * @return response returns CreateImageResponse, GetWorkRequestResponse tuple
   */
  public async forCreateImage(
    request: serviceRequests.CreateImageRequest
  ): Promise<{
    response: serviceResponses.CreateImageResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createImageResponse = await this.client.createImage(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createImageResponse.opcWorkRequestId
    );
    return { response: createImageResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forDeleteComputeCapacityReservation
   *
   * @param request the request to send
   * @return response returns DeleteComputeCapacityReservationResponse, GetWorkRequestResponse tuple
   */
  public async forDeleteComputeCapacityReservation(
    request: serviceRequests.DeleteComputeCapacityReservationRequest
  ): Promise<{
    response: serviceResponses.DeleteComputeCapacityReservationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const deleteComputeCapacityReservationResponse = await this.client.deleteComputeCapacityReservation(
      request
    );
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      deleteComputeCapacityReservationResponse.opcWorkRequestId
    );
    return {
      response: deleteComputeCapacityReservationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forDeleteDedicatedVmHost
   *
   * @param request the request to send
   * @return response returns DeleteDedicatedVmHostResponse, GetWorkRequestResponse tuple
   */
  public async forDeleteDedicatedVmHost(
    request: serviceRequests.DeleteDedicatedVmHostRequest
  ): Promise<{
    response: serviceResponses.DeleteDedicatedVmHostResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const deleteDedicatedVmHostResponse = await this.client.deleteDedicatedVmHost(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      deleteDedicatedVmHostResponse.opcWorkRequestId
    );
    return { response: deleteDedicatedVmHostResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forExportImage
   *
   * @param request the request to send
   * @return response returns ExportImageResponse, GetWorkRequestResponse tuple
   */
  public async forExportImage(
    request: serviceRequests.ExportImageRequest
  ): Promise<{
    response: serviceResponses.ExportImageResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const exportImageResponse = await this.client.exportImage(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      exportImageResponse.opcWorkRequestId
    );
    return { response: exportImageResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forBootVolumeAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBootVolumeAttachmentResponse
   */
  public async forBootVolumeAttachment(
    request: serviceRequests.GetBootVolumeAttachmentRequest,
    ...targetStates: models.BootVolumeAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetBootVolumeAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getBootVolumeAttachment(request),
      response => targetStates.includes(response.bootVolumeAttachment.lifecycleState!)
    );
  }

  /**
   * Waits forComputeCapacityReservation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetComputeCapacityReservationResponse | null (null in case of 404 response)
   */
  public async forComputeCapacityReservation(
    request: serviceRequests.GetComputeCapacityReservationRequest,
    ...targetStates: models.ComputeCapacityReservation.LifecycleState[]
  ): Promise<serviceResponses.GetComputeCapacityReservationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getComputeCapacityReservation(request),
      response => targetStates.includes(response.computeCapacityReservation.lifecycleState!),
      targetStates.includes(models.ComputeCapacityReservation.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forConsoleHistory till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConsoleHistoryResponse
   */
  public async forConsoleHistory(
    request: serviceRequests.GetConsoleHistoryRequest,
    ...targetStates: models.ConsoleHistory.LifecycleState[]
  ): Promise<serviceResponses.GetConsoleHistoryResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getConsoleHistory(request),
      response => targetStates.includes(response.consoleHistory.lifecycleState!)
    );
  }

  /**
   * Waits forDedicatedVmHost till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDedicatedVmHostResponse | null (null in case of 404 response)
   */
  public async forDedicatedVmHost(
    request: serviceRequests.GetDedicatedVmHostRequest,
    ...targetStates: models.DedicatedVmHost.LifecycleState[]
  ): Promise<serviceResponses.GetDedicatedVmHostResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDedicatedVmHost(request),
      response => targetStates.includes(response.dedicatedVmHost.lifecycleState!),
      targetStates.includes(models.DedicatedVmHost.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forImage till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetImageResponse | null (null in case of 404 response)
   */
  public async forImage(
    request: serviceRequests.GetImageRequest,
    ...targetStates: models.Image.LifecycleState[]
  ): Promise<serviceResponses.GetImageResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getImage(request),
      response => targetStates.includes(response.image.lifecycleState!),
      targetStates.includes(models.Image.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstanceResponse | null (null in case of 404 response)
   */
  public async forInstance(
    request: serviceRequests.GetInstanceRequest,
    ...targetStates: models.Instance.LifecycleState[]
  ): Promise<serviceResponses.GetInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInstance(request),
      response => targetStates.includes(response.instance.lifecycleState!),
      targetStates.includes(models.Instance.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forInstanceConsoleConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstanceConsoleConnectionResponse | null (null in case of 404 response)
   */
  public async forInstanceConsoleConnection(
    request: serviceRequests.GetInstanceConsoleConnectionRequest,
    ...targetStates: models.InstanceConsoleConnection.LifecycleState[]
  ): Promise<serviceResponses.GetInstanceConsoleConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInstanceConsoleConnection(request),
      response => targetStates.includes(response.instanceConsoleConnection.lifecycleState!),
      targetStates.includes(models.InstanceConsoleConnection.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forVnicAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVnicAttachmentResponse
   */
  public async forVnicAttachment(
    request: serviceRequests.GetVnicAttachmentRequest,
    ...targetStates: models.VnicAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetVnicAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getVnicAttachment(request),
      response => targetStates.includes(response.vnicAttachment.lifecycleState!)
    );
  }

  /**
   * Waits forVolumeAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVolumeAttachmentResponse
   */
  public async forVolumeAttachment(
    request: serviceRequests.GetVolumeAttachmentRequest,
    ...targetStates: models.VolumeAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetVolumeAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getVolumeAttachment(request),
      response => targetStates.includes(response.volumeAttachment.lifecycleState!)
    );
  }

  /**
   * Waits forLaunchInstance
   *
   * @param request the request to send
   * @return response returns LaunchInstanceResponse, GetWorkRequestResponse tuple
   */
  public async forLaunchInstance(
    request: serviceRequests.LaunchInstanceRequest
  ): Promise<{
    response: serviceResponses.LaunchInstanceResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const launchInstanceResponse = await this.client.launchInstance(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      launchInstanceResponse.opcWorkRequestId
    );
    return { response: launchInstanceResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forUpdateComputeCapacityReservation
   *
   * @param request the request to send
   * @return response returns UpdateComputeCapacityReservationResponse, GetWorkRequestResponse tuple
   */
  public async forUpdateComputeCapacityReservation(
    request: serviceRequests.UpdateComputeCapacityReservationRequest
  ): Promise<{
    response: serviceResponses.UpdateComputeCapacityReservationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const updateComputeCapacityReservationResponse = await this.client.updateComputeCapacityReservation(
      request
    );
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      updateComputeCapacityReservationResponse.opcWorkRequestId
    );
    return {
      response: updateComputeCapacityReservationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forUpdateInstance
   *
   * @param request the request to send
   * @return response returns UpdateInstanceResponse, GetWorkRequestResponse tuple
   */
  public async forUpdateInstance(
    request: serviceRequests.UpdateInstanceRequest
  ): Promise<{
    response: serviceResponses.UpdateInstanceResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const updateInstanceResponse = await this.client.updateInstance(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      updateInstanceResponse.opcWorkRequestId
    );
    return { response: updateInstanceResponse, workRequestResponse: getWorkRequestResponse };
  }
}