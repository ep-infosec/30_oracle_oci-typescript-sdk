/**
 * Support Management API
 * Use the Support Management API to manage support requests. For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm). **Note**: Before you can create service requests with this API, you need to have an Oracle Single Sign On (SSO) account, and you need to register your Customer Support Identifier (CSI) with My Oracle Support.
 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { paginateRecords, paginateResponses } from "oci-common";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum IncidentApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class IncidentClient {
  protected static serviceEndpointTemplate =
    "https://incidentmanagement.{region}.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "Incident";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20181231";
    if (this.logger) this.logger.info(`IncidentClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      IncidentClient.serviceEndpointTemplate,
      region,
      IncidentClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      IncidentClient.serviceEndpointTemplate,
      regionId,
      IncidentClient.endpointServiceName
    );
  }

  /**
   * Enables the customer to create an support ticket.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateIncidentRequest
   * @return CreateIncidentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/CreateIncident.ts.html |here} to see how to use CreateIncident API.
   */
  public async createIncident(
    createIncidentRequest: requests.CreateIncidentRequest
  ): Promise<responses.CreateIncidentResponse> {
    if (this.logger) this.logger.debug("Calling operation IncidentClient#createIncident.");
    const operationName = "createIncident";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/Incident/CreateIncident";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createIncidentRequest.opcRequestId,
      "ocid": createIncidentRequest.ocid,
      "homeregion": createIncidentRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createIncidentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createIncidentRequest.createIncidentDetails,
        "CreateIncident",
        model.CreateIncident.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateIncidentResponse>{},
        body: await response.json(),
        bodyKey: "incident",
        bodyModel: model.Incident,
        type: "model.Incident",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the details of the support ticket.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetIncidentRequest
   * @return GetIncidentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/GetIncident.ts.html |here} to see how to use GetIncident API.
   */
  public async getIncident(
    getIncidentRequest: requests.GetIncidentRequest
  ): Promise<responses.GetIncidentResponse> {
    if (this.logger) this.logger.debug("Calling operation IncidentClient#getIncident.");
    const operationName = "getIncident";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/Incident/GetIncident";
    const pathParams = {
      "{incidentKey}": getIncidentRequest.incidentKey
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getIncidentRequest.opcRequestId,
      "csi": getIncidentRequest.csi,
      "ocid": getIncidentRequest.ocid,
      "homeregion": getIncidentRequest.homeregion,
      "problem-type": getIncidentRequest.problemType
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getIncidentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents/{incidentKey}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetIncidentResponse>{},
        body: await response.json(),
        bodyKey: "incident",
        bodyModel: model.Incident,
        type: "model.Incident",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets the status of the service.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetStatusRequest
   * @return GetStatusResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/GetStatus.ts.html |here} to see how to use GetStatus API.
   */
  public async getStatus(
    getStatusRequest: requests.GetStatusRequest
  ): Promise<responses.GetStatusResponse> {
    if (this.logger) this.logger.debug("Calling operation IncidentClient#getStatus.");
    const operationName = "getStatus";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/Status/GetStatus";
    const pathParams = {
      "{source}": getStatusRequest.source
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getStatusRequest.opcRequestId,
      "ocid": getStatusRequest.ocid,
      "homeregion": getStatusRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getStatusRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents/status/{source}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetStatusResponse>{},
        body: await response.json(),
        bodyKey: "status",
        bodyModel: model.Status,
        type: "model.Status",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * During support ticket creation, returns the list of all possible products that Oracle Cloud Infrastructure supports.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListIncidentResourceTypesRequest
   * @return ListIncidentResourceTypesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/ListIncidentResourceTypes.ts.html |here} to see how to use ListIncidentResourceTypes API.
   */
  public async listIncidentResourceTypes(
    listIncidentResourceTypesRequest: requests.ListIncidentResourceTypesRequest
  ): Promise<responses.ListIncidentResourceTypesResponse> {
    if (this.logger)
      this.logger.debug("Calling operation IncidentClient#listIncidentResourceTypes.");
    const operationName = "listIncidentResourceTypes";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/IncidentResourceType/ListIncidentResourceTypes";
    const pathParams = {};

    const queryParams = {
      "problemType": listIncidentResourceTypesRequest.problemType,
      "limit": listIncidentResourceTypesRequest.limit,
      "page": listIncidentResourceTypesRequest.page,
      "sortBy": listIncidentResourceTypesRequest.sortBy,
      "sortOrder": listIncidentResourceTypesRequest.sortOrder,
      "compartmentId": listIncidentResourceTypesRequest.compartmentId,
      "name": listIncidentResourceTypesRequest.name
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listIncidentResourceTypesRequest.opcRequestId,
      "csi": listIncidentResourceTypesRequest.csi,
      "ocid": listIncidentResourceTypesRequest.ocid,
      "homeregion": listIncidentResourceTypesRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listIncidentResourceTypesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents/incidentResourceTypes",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListIncidentResourceTypesResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.IncidentResourceType,
        type: "Array<model.IncidentResourceType>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listIncidentResourceTypesRecordIterator function.
   * Creates a new async iterator which will iterate over the models.IncidentResourceType objects
   * contained in responses from the listIncidentResourceTypes operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllIncidentResourceTypes(
    request: requests.ListIncidentResourceTypesRequest
  ): AsyncIterableIterator<model.IncidentResourceType> {
    return paginateRecords(request, req => this.listIncidentResourceTypes(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listIncidentResourceTypesResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listIncidentResourceTypes operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllIncidentResourceTypesResponses(
    request: requests.ListIncidentResourceTypesRequest
  ): AsyncIterableIterator<responses.ListIncidentResourceTypesResponse> {
    return paginateResponses(request, req => this.listIncidentResourceTypes(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.IncidentResourceType objects
   * contained in responses from the listIncidentResourceTypes operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listIncidentResourceTypesRecordIterator(
    request: requests.ListIncidentResourceTypesRequest
  ): AsyncIterableIterator<model.IncidentResourceType> {
    return paginateRecords(request, req => this.listIncidentResourceTypes(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listIncidentResourceTypes operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listIncidentResourceTypesResponseIterator(
    request: requests.ListIncidentResourceTypesRequest
  ): AsyncIterableIterator<responses.ListIncidentResourceTypesResponse> {
    return paginateResponses(request, req => this.listIncidentResourceTypes(req));
  }

  /**
   * Returns the list of support tickets raised by the tenancy.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListIncidentsRequest
   * @return ListIncidentsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/ListIncidents.ts.html |here} to see how to use ListIncidents API.
   */
  public async listIncidents(
    listIncidentsRequest: requests.ListIncidentsRequest
  ): Promise<responses.ListIncidentsResponse> {
    if (this.logger) this.logger.debug("Calling operation IncidentClient#listIncidents.");
    const operationName = "listIncidents";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/IncidentSummary/ListIncidents";
    const pathParams = {};

    const queryParams = {
      "limit": listIncidentsRequest.limit,
      "compartmentId": listIncidentsRequest.compartmentId,
      "sortBy": listIncidentsRequest.sortBy,
      "sortOrder": listIncidentsRequest.sortOrder,
      "lifecycleState": listIncidentsRequest.lifecycleState,
      "page": listIncidentsRequest.page,
      "problemType": listIncidentsRequest.problemType
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "csi": listIncidentsRequest.csi,
      "opc-request-id": listIncidentsRequest.opcRequestId,
      "ocid": listIncidentsRequest.ocid,
      "homeregion": listIncidentsRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listIncidentsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListIncidentsResponse>{},
        body: await response.json(),
        bodyKey: "items",
        bodyModel: model.IncidentSummary,
        type: "Array<model.IncidentSummary>",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * NOTE: This function is deprecated in favor of listIncidentsRecordIterator function.
   * Creates a new async iterator which will iterate over the models.IncidentSummary objects
   * contained in responses from the listIncidents operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllIncidents(
    request: requests.ListIncidentsRequest
  ): AsyncIterableIterator<model.IncidentSummary> {
    return paginateRecords(request, req => this.listIncidents(req));
  }

  /**
   * NOTE: This function is deprecated in favor of listIncidentsResponseIterator function.
   * Creates a new async iterator which will iterate over the responses received from the listIncidents operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listAllIncidentsResponses(
    request: requests.ListIncidentsRequest
  ): AsyncIterableIterator<responses.ListIncidentsResponse> {
    return paginateResponses(request, req => this.listIncidents(req));
  }

  /**
   * Creates a new async iterator which will iterate over the models.IncidentSummary objects
   * contained in responses from the listIncidents operation. This iterator will fetch more data from the
   * server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listIncidentsRecordIterator(
    request: requests.ListIncidentsRequest
  ): AsyncIterableIterator<model.IncidentSummary> {
    return paginateRecords(request, req => this.listIncidents(req));
  }

  /**
   * Creates a new async iterator which will iterate over the responses received from the listIncidents operation. This iterator
   * will fetch more data from the server as needed.
   *
   * @param request a request which can be sent to the service operation
   */
  public listIncidentsResponseIterator(
    request: requests.ListIncidentsRequest
  ): AsyncIterableIterator<responses.ListIncidentsResponse> {
    return paginateResponses(request, req => this.listIncidents(req));
  }

  /**
   * Updates the specified support ticket's information.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateIncidentRequest
   * @return UpdateIncidentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/UpdateIncident.ts.html |here} to see how to use UpdateIncident API.
   */
  public async updateIncident(
    updateIncidentRequest: requests.UpdateIncidentRequest
  ): Promise<responses.UpdateIncidentResponse> {
    if (this.logger) this.logger.debug("Calling operation IncidentClient#updateIncident.");
    const operationName = "updateIncident";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/UpdateIncident/UpdateIncident";
    const pathParams = {
      "{incidentKey}": updateIncidentRequest.incidentKey
    };

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "csi": updateIncidentRequest.csi,
      "opc-request-id": updateIncidentRequest.opcRequestId,
      "if-match": updateIncidentRequest.ifMatch,
      "ocid": updateIncidentRequest.ocid,
      "homeregion": updateIncidentRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateIncidentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents/{incidentKey}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateIncidentRequest.updateIncidentDetails,
        "UpdateIncident",
        model.UpdateIncident.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateIncidentResponse>{},
        body: await response.json(),
        bodyKey: "incident",
        bodyModel: model.Incident,
        type: "model.Incident",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Checks whether the requested user is valid.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ValidateUserRequest
   * @return ValidateUserResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/ValidateUser.ts.html |here} to see how to use ValidateUser API.
   */
  public async validateUser(
    validateUserRequest: requests.ValidateUserRequest
  ): Promise<responses.ValidateUserResponse> {
    if (this.logger) this.logger.debug("Calling operation IncidentClient#validateUser.");
    const operationName = "validateUser";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/ValidationResponse/ValidateUser";
    const pathParams = {};

    const queryParams = {
      "problemType": validateUserRequest.problemType
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "csi": validateUserRequest.csi,
      "opc-request-id": validateUserRequest.opcRequestId,
      "ocid": validateUserRequest.ocid,
      "homeregion": validateUserRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      validateUserRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/incidents/user/validate",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ValidateUserResponse>{},
        body: await response.json(),
        bodyKey: "validationResponse",
        bodyModel: model.ValidationResponse,
        type: "model.ValidationResponse",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
export enum UserApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class UserClient {
  protected static serviceEndpointTemplate =
    "https://incidentmanagement.{region}.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "User";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20181231";
    if (this.logger) this.logger.info(`UserClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      UserClient.serviceEndpointTemplate,
      region,
      UserClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      UserClient.serviceEndpointTemplate,
      regionId,
      UserClient.endpointServiceName
    );
  }

  /**
   * Create user to request Customer Support Identifier(CSI) to Customer User Administrator(CUA).
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateUserRequest
   * @return CreateUserResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cims/CreateUser.ts.html |here} to see how to use CreateUser API.
   */
  public async createUser(
    createUserRequest: requests.CreateUserRequest
  ): Promise<responses.CreateUserResponse> {
    if (this.logger) this.logger.debug("Calling operation UserClient#createUser.");
    const operationName = "createUser";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/incidentmanagement/20181231/User/CreateUser";
    const pathParams = {};

    const queryParams = {};

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createUserRequest.opcRequestId,
      "ocid": createUserRequest.ocid,
      "homeregion": createUserRequest.homeregion
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createUserRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/v2/users",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createUserRequest.createUserDetails,
        "CreateUserDetails",
        model.CreateUserDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.CreateUserResponse>{},
        body: await response.json(),
        bodyKey: "user",
        bodyModel: model.User,
        type: "model.User",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}