/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
 * 
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
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ConfigApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class ConfigClient {
  protected static serviceEndpointTemplate = "https://apm-config.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "Config";

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
    this._endpoint = this._endpoint + "/20210201";
    if (this.logger) this.logger.info(`ConfigClient endpoint set to ${this._endpoint}`);
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
      ConfigClient.serviceEndpointTemplate,
      region,
      ConfigClient.endpointServiceName
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
      ConfigClient.serviceEndpointTemplate,
      regionId,
      ConfigClient.endpointServiceName
    );
  }

  /**
   * Creates a new configuration item.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param CreateConfigRequest
   * @return CreateConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/CreateConfig.ts.html |here} to see how to use CreateConfig API.
   */
  public async createConfig(
    createConfigRequest: requests.CreateConfigRequest
  ): Promise<responses.CreateConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#createConfig.");
    const operationName = "createConfig";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/Config/CreateConfig";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": createConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-retry-token": createConfigRequest.opcRetryToken,
      "opc-request-id": createConfigRequest.opcRequestId,
      "opc-dry-run": createConfigRequest.opcDryRun
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createConfigRequest.createConfigDetails,
        "CreateConfigDetails",
        model.CreateConfigDetails.getJsonObj
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
        responseObject: <responses.CreateConfigResponse>{},
        body: await response.json(),
        bodyKey: "config",
        bodyModel: model.Config,
        type: "model.Config",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
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
   * Deletes the configuration item identified by the OCID.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param DeleteConfigRequest
   * @return DeleteConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/DeleteConfig.ts.html |here} to see how to use DeleteConfig API.
   */
  public async deleteConfig(
    deleteConfigRequest: requests.DeleteConfigRequest
  ): Promise<responses.DeleteConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#deleteConfig.");
    const operationName = "deleteConfig";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/Config/DeleteConfig";
    const pathParams = {
      "{configId}": deleteConfigRequest.configId
    };

    const queryParams = {
      "apmDomainId": deleteConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": deleteConfigRequest.ifMatch,
      "opc-request-id": deleteConfigRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs/{configId}",
      method: "DELETE",
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
        responseObject: <responses.DeleteConfigResponse>{},
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
   * Gets the configuration item identified by the OCID.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param GetConfigRequest
   * @return GetConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/GetConfig.ts.html |here} to see how to use GetConfig API.
   */
  public async getConfig(
    getConfigRequest: requests.GetConfigRequest
  ): Promise<responses.GetConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#getConfig.");
    const operationName = "getConfig";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/Config/GetConfig";
    const pathParams = {
      "{configId}": getConfigRequest.configId
    };

    const queryParams = {
      "apmDomainId": getConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getConfigRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs/{configId}",
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
        responseObject: <responses.GetConfigResponse>{},
        body: await response.json(),
        bodyKey: "config",
        bodyModel: model.Config,
        type: "model.Config",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
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
   * Returns all configuration items, which can optionally be filtered by configuration type.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ListConfigsRequest
   * @return ListConfigsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/ListConfigs.ts.html |here} to see how to use ListConfigs API.
   */
  public async listConfigs(
    listConfigsRequest: requests.ListConfigsRequest
  ): Promise<responses.ListConfigsResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#listConfigs.");
    const operationName = "listConfigs";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/ConfigCollection/ListConfigs";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": listConfigsRequest.apmDomainId,
      "configType": listConfigsRequest.configType,
      "displayName": listConfigsRequest.displayName,
      "limit": listConfigsRequest.limit,
      "page": listConfigsRequest.page,
      "sortOrder": listConfigsRequest.sortOrder,
      "sortBy": listConfigsRequest.sortBy,
      "optionsGroup": listConfigsRequest.optionsGroup,
      "definedTagEquals": listConfigsRequest.definedTagEquals,
      "freeformTagEquals": listConfigsRequest.freeformTagEquals,
      "definedTagExists": listConfigsRequest.definedTagExists,
      "freeformTagExists": listConfigsRequest.freeformTagExists
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listConfigsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listConfigsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs",
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
        responseObject: <responses.ListConfigsResponse>{},
        body: await response.json(),
        bodyKey: "configCollection",
        bodyModel: model.ConfigCollection,
        type: "model.ConfigCollection",
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
   * Returns all metrics associated with the specified namespace.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param RetrieveNamespaceMetricsRequest
   * @return RetrieveNamespaceMetricsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/RetrieveNamespaceMetrics.ts.html |here} to see how to use RetrieveNamespaceMetrics API.
   */
  public async retrieveNamespaceMetrics(
    retrieveNamespaceMetricsRequest: requests.RetrieveNamespaceMetricsRequest
  ): Promise<responses.RetrieveNamespaceMetricsResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#retrieveNamespaceMetrics.");
    const operationName = "retrieveNamespaceMetrics";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/MetricGroup/RetrieveNamespaceMetrics";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": retrieveNamespaceMetricsRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": retrieveNamespaceMetricsRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      retrieveNamespaceMetricsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/retrieveNamespaceMetrics",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        retrieveNamespaceMetricsRequest.retrieveNamespaceMetricsDetails,
        "RetrieveNamespaceMetricsDetails",
        model.RetrieveNamespaceMetricsDetails.getJsonObj
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
        responseObject: <responses.RetrieveNamespaceMetricsResponse>{},
        body: await response.json(),
        bodyKey: "namespaceMetricCollection",
        bodyModel: model.NamespaceMetricCollection,
        type: "model.NamespaceMetricCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Returns all namespaces available in APM.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param RetrieveNamespacesRequest
   * @return RetrieveNamespacesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/RetrieveNamespaces.ts.html |here} to see how to use RetrieveNamespaces API.
   */
  public async retrieveNamespaces(
    retrieveNamespacesRequest: requests.RetrieveNamespacesRequest
  ): Promise<responses.RetrieveNamespacesResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#retrieveNamespaces.");
    const operationName = "retrieveNamespaces";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/MetricGroup/RetrieveNamespaces";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": retrieveNamespacesRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": retrieveNamespacesRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      retrieveNamespacesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/retrieveNamespaces",
      method: "POST",
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
        responseObject: <responses.RetrieveNamespacesResponse>{},
        body: await response.json(),
        bodyKey: "namespaceCollection",
        bodyModel: model.NamespaceCollection,
        type: "model.NamespaceCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
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
   * Updates the details of the configuration item identified by the OCID.
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param UpdateConfigRequest
   * @return UpdateConfigResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/UpdateConfig.ts.html |here} to see how to use UpdateConfig API.
   */
  public async updateConfig(
    updateConfigRequest: requests.UpdateConfigRequest
  ): Promise<responses.UpdateConfigResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#updateConfig.");
    const operationName = "updateConfig";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/Config/UpdateConfig";
    const pathParams = {
      "{configId}": updateConfigRequest.configId
    };

    const queryParams = {
      "apmDomainId": updateConfigRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": updateConfigRequest.ifMatch,
      "opc-request-id": updateConfigRequest.opcRequestId,
      "opc-dry-run": updateConfigRequest.opcDryRun
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateConfigRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/configs/{configId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateConfigRequest.updateConfigDetails,
        "UpdateConfigDetails",
        model.UpdateConfigDetails.getJsonObj
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
        responseObject: <responses.UpdateConfigResponse>{},
        body: await response.json(),
        bodyKey: "config",
        bodyModel: model.Config,
        type: "model.Config",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
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
   * Validates the Span Filter pattern (filterText) for syntactic correctness.
   * Returns 204 on success, 422 when validation fails.
   *
   * This operation uses {@link common.OciSdkDefaultRetryConfiguration} by default if no retry configuration is defined by the user.
   * @param ValidateSpanFilterPatternRequest
   * @return ValidateSpanFilterPatternResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/ValidateSpanFilterPattern.ts.html |here} to see how to use ValidateSpanFilterPattern API.
   */
  public async validateSpanFilterPattern(
    validateSpanFilterPatternRequest: requests.ValidateSpanFilterPatternRequest
  ): Promise<responses.ValidateSpanFilterPatternResponse> {
    if (this.logger) this.logger.debug("Calling operation ConfigClient#validateSpanFilterPattern.");
    const operationName = "validateSpanFilterPattern";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/apm-config/20210201/SpanFilter/ValidateSpanFilterPattern";
    const pathParams = {};

    const queryParams = {
      "apmDomainId": validateSpanFilterPatternRequest.apmDomainId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": validateSpanFilterPatternRequest.opcRequestId
    };

    const specRetryConfiguration = common.OciSdkDefaultRetryConfiguration;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      validateSpanFilterPatternRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/actions/validateSpanFilterPattern",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        validateSpanFilterPatternRequest.validateSpanFilterPatternDetails,
        "ValidateSpanFilterPatternDetails",
        model.ValidateSpanFilterPatternDetails.getJsonObj
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
        responseObject: <responses.ValidateSpanFilterPatternResponse>{},
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
