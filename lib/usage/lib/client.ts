/**
 * Usage Proxy API
 * Use the Usage Proxy API to list Oracle Support Rewards, view related detailed usage information, and manage users who redeem rewards. For more information, see [Oracle Support Rewards Overview](/iaas/Content/Billing/Concepts/supportrewardsoverview.htm).
 * OpenAPI spec version: 20190111
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

export enum RewardsApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class RewardsClient {
  protected static serviceEndpointTemplate = "https://identity.{region}.oci.{secondLevelDomain}";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "Rewards";

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
    this._endpoint = this._endpoint + "/20190111";
    if (this.logger) this.logger.info(`RewardsClient endpoint set to ${this._endpoint}`);
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
      RewardsClient.serviceEndpointTemplate,
      region,
      RewardsClient.endpointServiceName
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
      RewardsClient.serviceEndpointTemplate,
      regionId,
      RewardsClient.endpointServiceName
    );
  }

  /**
   * Adds the list of redeemable user summary for a subscription ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param CreateRedeemableUserRequest
   * @return CreateRedeemableUserResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usage/CreateRedeemableUser.ts.html |here} to see how to use CreateRedeemableUser API.
   */
  public async createRedeemableUser(
    createRedeemableUserRequest: requests.CreateRedeemableUserRequest
  ): Promise<responses.CreateRedeemableUserResponse> {
    if (this.logger) this.logger.debug("Calling operation RewardsClient#createRedeemableUser.");
    const operationName = "createRedeemableUser";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/usage-proxy/20190111/RedeemableUser/CreateRedeemableUser";
    const pathParams = {
      "{subscriptionId}": createRedeemableUserRequest.subscriptionId
    };

    const queryParams = {
      "tenancyId": createRedeemableUserRequest.tenancyId,
      "userId": createRedeemableUserRequest.userId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": createRedeemableUserRequest.opcRequestId,
      "if-match": createRedeemableUserRequest.ifMatch,
      "opc-retry-token": createRedeemableUserRequest.opcRetryToken
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      createRedeemableUserRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/redeemableUsers",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        createRedeemableUserRequest.createRedeemableUserDetails,
        "CreateRedeemableUserDetails",
        model.CreateRedeemableUserDetails.getJsonObj
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
        responseObject: <responses.CreateRedeemableUserResponse>{},
        body: await response.json(),
        bodyKey: "redeemableUserCollection",
        bodyModel: model.RedeemableUserCollection,
        type: "model.RedeemableUserCollection",
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
   * Deletes the list of redeemable user email ID for a subscription ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DeleteRedeemableUserRequest
   * @return DeleteRedeemableUserResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usage/DeleteRedeemableUser.ts.html |here} to see how to use DeleteRedeemableUser API.
   */
  public async deleteRedeemableUser(
    deleteRedeemableUserRequest: requests.DeleteRedeemableUserRequest
  ): Promise<responses.DeleteRedeemableUserResponse> {
    if (this.logger) this.logger.debug("Calling operation RewardsClient#deleteRedeemableUser.");
    const operationName = "deleteRedeemableUser";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/usage-proxy/20190111/RedeemableUser/DeleteRedeemableUser";
    const pathParams = {
      "{subscriptionId}": deleteRedeemableUserRequest.subscriptionId
    };

    const queryParams = {
      "emailId": deleteRedeemableUserRequest.emailId,
      "tenancyId": deleteRedeemableUserRequest.tenancyId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": deleteRedeemableUserRequest.opcRequestId,
      "if-match": deleteRedeemableUserRequest.ifMatch
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      deleteRedeemableUserRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/redeemableUsers",
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
        responseObject: <responses.DeleteRedeemableUserResponse>{},
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
   * Provides product information that is specific to a reward usage period and its usage details.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListProductsRequest
   * @return ListProductsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usage/ListProducts.ts.html |here} to see how to use ListProducts API.
   */
  public async listProducts(
    listProductsRequest: requests.ListProductsRequest
  ): Promise<responses.ListProductsResponse> {
    if (this.logger) this.logger.debug("Calling operation RewardsClient#listProducts.");
    const operationName = "listProducts";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/usage-proxy/20190111/ProductSummary/ListProducts";
    const pathParams = {
      "{subscriptionId}": listProductsRequest.subscriptionId
    };

    const queryParams = {
      "tenancyId": listProductsRequest.tenancyId,
      "usagePeriodKey": listProductsRequest.usagePeriodKey,
      "page": listProductsRequest.page,
      "limit": listProductsRequest.limit,
      "sortOrder": listProductsRequest.sortOrder,
      "sortBy": listProductsRequest.sortBy,
      "producttype": listProductsRequest.producttype
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listProductsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listProductsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/products",
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
        responseObject: <responses.ListProductsResponse>{},
        body: await response.json(),
        bodyKey: "productCollection",
        bodyModel: model.ProductCollection,
        type: "model.ProductCollection",
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
   * Provides the list of user summary that can redeem rewards for the given subscription ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListRedeemableUsersRequest
   * @return ListRedeemableUsersResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usage/ListRedeemableUsers.ts.html |here} to see how to use ListRedeemableUsers API.
   */
  public async listRedeemableUsers(
    listRedeemableUsersRequest: requests.ListRedeemableUsersRequest
  ): Promise<responses.ListRedeemableUsersResponse> {
    if (this.logger) this.logger.debug("Calling operation RewardsClient#listRedeemableUsers.");
    const operationName = "listRedeemableUsers";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/usage-proxy/20190111/RedeemableUserSummary/ListRedeemableUsers";
    const pathParams = {
      "{subscriptionId}": listRedeemableUsersRequest.subscriptionId
    };

    const queryParams = {
      "tenancyId": listRedeemableUsersRequest.tenancyId,
      "page": listRedeemableUsersRequest.page,
      "limit": listRedeemableUsersRequest.limit,
      "sortOrder": listRedeemableUsersRequest.sortOrder,
      "sortBy": listRedeemableUsersRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listRedeemableUsersRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listRedeemableUsersRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/redeemableUsers",
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
        responseObject: <responses.ListRedeemableUsersResponse>{},
        body: await response.json(),
        bodyKey: "redeemableUserCollection",
        bodyModel: model.RedeemableUserCollection,
        type: "model.RedeemableUserCollection",
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
   * Returns the list of redemption for the subscription ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListRedemptionsRequest
   * @return ListRedemptionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usage/ListRedemptions.ts.html |here} to see how to use ListRedemptions API.
   */
  public async listRedemptions(
    listRedemptionsRequest: requests.ListRedemptionsRequest
  ): Promise<responses.ListRedemptionsResponse> {
    if (this.logger) this.logger.debug("Calling operation RewardsClient#listRedemptions.");
    const operationName = "listRedemptions";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/usage-proxy/20190111/RedemptionSummary/ListRedemptions";
    const pathParams = {
      "{subscriptionId}": listRedemptionsRequest.subscriptionId
    };

    const queryParams = {
      "tenancyId": listRedemptionsRequest.tenancyId,
      "timeRedeemedGreaterThanOrEqualTo": listRedemptionsRequest.timeRedeemedGreaterThanOrEqualTo,
      "timeRedeemedLessThan": listRedemptionsRequest.timeRedeemedLessThan,
      "page": listRedemptionsRequest.page,
      "limit": listRedemptionsRequest.limit,
      "sortOrder": listRedemptionsRequest.sortOrder,
      "sortBy": listRedemptionsRequest.sortBy
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listRedemptionsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listRedemptionsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/redemptions",
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
        responseObject: <responses.ListRedemptionsResponse>{},
        body: await response.json(),
        bodyKey: "redemptionCollection",
        bodyModel: model.RedemptionCollection,
        type: "model.RedemptionCollection",
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
   * Returns the list of rewards for a subscription ID.
   *
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListRewardsRequest
   * @return ListRewardsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usage/ListRewards.ts.html |here} to see how to use ListRewards API.
   */
  public async listRewards(
    listRewardsRequest: requests.ListRewardsRequest
  ): Promise<responses.ListRewardsResponse> {
    if (this.logger) this.logger.debug("Calling operation RewardsClient#listRewards.");
    const operationName = "listRewards";
    const apiReferenceLink =
      "https://docs.oracle.com/iaas/api/#/en/usage-proxy/20190111/MonthlyRewardSummary/ListRewards";
    const pathParams = {
      "{subscriptionId}": listRewardsRequest.subscriptionId
    };

    const queryParams = {
      "tenancyId": listRewardsRequest.tenancyId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listRewardsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listRewardsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/rewards",
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
        responseObject: <responses.ListRewardsResponse>{},
        body: await response.json(),
        bodyKey: "rewardCollection",
        bodyModel: model.RewardCollection,
        type: "model.RewardCollection",
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