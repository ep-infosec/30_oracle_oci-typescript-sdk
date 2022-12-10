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

import * as ChangeApiCompartmentRequest from "./change-api-compartment-request";
export import ChangeApiCompartmentRequest = ChangeApiCompartmentRequest.ChangeApiCompartmentRequest;
import * as ChangeCertificateCompartmentRequest from "./change-certificate-compartment-request";
export import ChangeCertificateCompartmentRequest = ChangeCertificateCompartmentRequest.ChangeCertificateCompartmentRequest;
import * as CreateApiRequest from "./create-api-request";
export import CreateApiRequest = CreateApiRequest.CreateApiRequest;
import * as CreateCertificateRequest from "./create-certificate-request";
export import CreateCertificateRequest = CreateCertificateRequest.CreateCertificateRequest;
import * as CreateSdkRequest from "./create-sdk-request";
export import CreateSdkRequest = CreateSdkRequest.CreateSdkRequest;
import * as DeleteApiRequest from "./delete-api-request";
export import DeleteApiRequest = DeleteApiRequest.DeleteApiRequest;
import * as DeleteCertificateRequest from "./delete-certificate-request";
export import DeleteCertificateRequest = DeleteCertificateRequest.DeleteCertificateRequest;
import * as DeleteSdkRequest from "./delete-sdk-request";
export import DeleteSdkRequest = DeleteSdkRequest.DeleteSdkRequest;
import * as GetApiRequest from "./get-api-request";
export import GetApiRequest = GetApiRequest.GetApiRequest;
import * as GetApiContentRequest from "./get-api-content-request";
export import GetApiContentRequest = GetApiContentRequest.GetApiContentRequest;
import * as GetApiDeploymentSpecificationRequest from "./get-api-deployment-specification-request";
export import GetApiDeploymentSpecificationRequest = GetApiDeploymentSpecificationRequest.GetApiDeploymentSpecificationRequest;
import * as GetApiValidationsRequest from "./get-api-validations-request";
export import GetApiValidationsRequest = GetApiValidationsRequest.GetApiValidationsRequest;
import * as GetCertificateRequest from "./get-certificate-request";
export import GetCertificateRequest = GetCertificateRequest.GetCertificateRequest;
import * as GetSdkRequest from "./get-sdk-request";
export import GetSdkRequest = GetSdkRequest.GetSdkRequest;
import * as ListApisRequest from "./list-apis-request";
export import ListApisRequest = ListApisRequest.ListApisRequest;
import * as ListCertificatesRequest from "./list-certificates-request";
export import ListCertificatesRequest = ListCertificatesRequest.ListCertificatesRequest;
import * as ListSdkLanguageTypesRequest from "./list-sdk-language-types-request";
export import ListSdkLanguageTypesRequest = ListSdkLanguageTypesRequest.ListSdkLanguageTypesRequest;
import * as ListSdksRequest from "./list-sdks-request";
export import ListSdksRequest = ListSdksRequest.ListSdksRequest;
import * as UpdateApiRequest from "./update-api-request";
export import UpdateApiRequest = UpdateApiRequest.UpdateApiRequest;
import * as UpdateCertificateRequest from "./update-certificate-request";
export import UpdateCertificateRequest = UpdateCertificateRequest.UpdateCertificateRequest;
import * as UpdateSdkRequest from "./update-sdk-request";
export import UpdateSdkRequest = UpdateSdkRequest.UpdateSdkRequest;
import * as ChangeDeploymentCompartmentRequest from "./change-deployment-compartment-request";
export import ChangeDeploymentCompartmentRequest = ChangeDeploymentCompartmentRequest.ChangeDeploymentCompartmentRequest;
import * as CreateDeploymentRequest from "./create-deployment-request";
export import CreateDeploymentRequest = CreateDeploymentRequest.CreateDeploymentRequest;
import * as DeleteDeploymentRequest from "./delete-deployment-request";
export import DeleteDeploymentRequest = DeleteDeploymentRequest.DeleteDeploymentRequest;
import * as GetDeploymentRequest from "./get-deployment-request";
export import GetDeploymentRequest = GetDeploymentRequest.GetDeploymentRequest;
import * as ListDeploymentsRequest from "./list-deployments-request";
export import ListDeploymentsRequest = ListDeploymentsRequest.ListDeploymentsRequest;
import * as UpdateDeploymentRequest from "./update-deployment-request";
export import UpdateDeploymentRequest = UpdateDeploymentRequest.UpdateDeploymentRequest;
import * as ChangeGatewayCompartmentRequest from "./change-gateway-compartment-request";
export import ChangeGatewayCompartmentRequest = ChangeGatewayCompartmentRequest.ChangeGatewayCompartmentRequest;
import * as CreateGatewayRequest from "./create-gateway-request";
export import CreateGatewayRequest = CreateGatewayRequest.CreateGatewayRequest;
import * as DeleteGatewayRequest from "./delete-gateway-request";
export import DeleteGatewayRequest = DeleteGatewayRequest.DeleteGatewayRequest;
import * as GetGatewayRequest from "./get-gateway-request";
export import GetGatewayRequest = GetGatewayRequest.GetGatewayRequest;
import * as ListGatewaysRequest from "./list-gateways-request";
export import ListGatewaysRequest = ListGatewaysRequest.ListGatewaysRequest;
import * as UpdateGatewayRequest from "./update-gateway-request";
export import UpdateGatewayRequest = UpdateGatewayRequest.UpdateGatewayRequest;
import * as ChangeSubscriberCompartmentRequest from "./change-subscriber-compartment-request";
export import ChangeSubscriberCompartmentRequest = ChangeSubscriberCompartmentRequest.ChangeSubscriberCompartmentRequest;
import * as CreateSubscriberRequest from "./create-subscriber-request";
export import CreateSubscriberRequest = CreateSubscriberRequest.CreateSubscriberRequest;
import * as DeleteSubscriberRequest from "./delete-subscriber-request";
export import DeleteSubscriberRequest = DeleteSubscriberRequest.DeleteSubscriberRequest;
import * as GetSubscriberRequest from "./get-subscriber-request";
export import GetSubscriberRequest = GetSubscriberRequest.GetSubscriberRequest;
import * as ListSubscribersRequest from "./list-subscribers-request";
export import ListSubscribersRequest = ListSubscribersRequest.ListSubscribersRequest;
import * as UpdateSubscriberRequest from "./update-subscriber-request";
export import UpdateSubscriberRequest = UpdateSubscriberRequest.UpdateSubscriberRequest;
import * as ChangeUsagePlanCompartmentRequest from "./change-usage-plan-compartment-request";
export import ChangeUsagePlanCompartmentRequest = ChangeUsagePlanCompartmentRequest.ChangeUsagePlanCompartmentRequest;
import * as CreateUsagePlanRequest from "./create-usage-plan-request";
export import CreateUsagePlanRequest = CreateUsagePlanRequest.CreateUsagePlanRequest;
import * as DeleteUsagePlanRequest from "./delete-usage-plan-request";
export import DeleteUsagePlanRequest = DeleteUsagePlanRequest.DeleteUsagePlanRequest;
import * as GetUsagePlanRequest from "./get-usage-plan-request";
export import GetUsagePlanRequest = GetUsagePlanRequest.GetUsagePlanRequest;
import * as ListUsagePlansRequest from "./list-usage-plans-request";
export import ListUsagePlansRequest = ListUsagePlansRequest.ListUsagePlansRequest;
import * as UpdateUsagePlanRequest from "./update-usage-plan-request";
export import UpdateUsagePlanRequest = UpdateUsagePlanRequest.UpdateUsagePlanRequest;
import * as CancelWorkRequestRequest from "./cancel-work-request-request";
export import CancelWorkRequestRequest = CancelWorkRequestRequest.CancelWorkRequestRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;