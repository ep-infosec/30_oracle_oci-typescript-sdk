/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as CancelJobRequest from "./cancel-job-request";
export import CancelJobRequest = CancelJobRequest.CancelJobRequest;
import * as ChangeConfigurationSourceProviderCompartmentRequest from "./change-configuration-source-provider-compartment-request";
export import ChangeConfigurationSourceProviderCompartmentRequest = ChangeConfigurationSourceProviderCompartmentRequest.ChangeConfigurationSourceProviderCompartmentRequest;
import * as ChangePrivateEndpointCompartmentRequest from "./change-private-endpoint-compartment-request";
export import ChangePrivateEndpointCompartmentRequest = ChangePrivateEndpointCompartmentRequest.ChangePrivateEndpointCompartmentRequest;
import * as ChangeStackCompartmentRequest from "./change-stack-compartment-request";
export import ChangeStackCompartmentRequest = ChangeStackCompartmentRequest.ChangeStackCompartmentRequest;
import * as ChangeTemplateCompartmentRequest from "./change-template-compartment-request";
export import ChangeTemplateCompartmentRequest = ChangeTemplateCompartmentRequest.ChangeTemplateCompartmentRequest;
import * as CreateConfigurationSourceProviderRequest from "./create-configuration-source-provider-request";
export import CreateConfigurationSourceProviderRequest = CreateConfigurationSourceProviderRequest.CreateConfigurationSourceProviderRequest;
import * as CreateJobRequest from "./create-job-request";
export import CreateJobRequest = CreateJobRequest.CreateJobRequest;
import * as CreatePrivateEndpointRequest from "./create-private-endpoint-request";
export import CreatePrivateEndpointRequest = CreatePrivateEndpointRequest.CreatePrivateEndpointRequest;
import * as CreateStackRequest from "./create-stack-request";
export import CreateStackRequest = CreateStackRequest.CreateStackRequest;
import * as CreateTemplateRequest from "./create-template-request";
export import CreateTemplateRequest = CreateTemplateRequest.CreateTemplateRequest;
import * as DeleteConfigurationSourceProviderRequest from "./delete-configuration-source-provider-request";
export import DeleteConfigurationSourceProviderRequest = DeleteConfigurationSourceProviderRequest.DeleteConfigurationSourceProviderRequest;
import * as DeletePrivateEndpointRequest from "./delete-private-endpoint-request";
export import DeletePrivateEndpointRequest = DeletePrivateEndpointRequest.DeletePrivateEndpointRequest;
import * as DeleteStackRequest from "./delete-stack-request";
export import DeleteStackRequest = DeleteStackRequest.DeleteStackRequest;
import * as DeleteTemplateRequest from "./delete-template-request";
export import DeleteTemplateRequest = DeleteTemplateRequest.DeleteTemplateRequest;
import * as DetectStackDriftRequest from "./detect-stack-drift-request";
export import DetectStackDriftRequest = DetectStackDriftRequest.DetectStackDriftRequest;
import * as GetConfigurationSourceProviderRequest from "./get-configuration-source-provider-request";
export import GetConfigurationSourceProviderRequest = GetConfigurationSourceProviderRequest.GetConfigurationSourceProviderRequest;
import * as GetJobRequest from "./get-job-request";
export import GetJobRequest = GetJobRequest.GetJobRequest;
import * as GetJobDetailedLogContentRequest from "./get-job-detailed-log-content-request";
export import GetJobDetailedLogContentRequest = GetJobDetailedLogContentRequest.GetJobDetailedLogContentRequest;
import * as GetJobLogsRequest from "./get-job-logs-request";
export import GetJobLogsRequest = GetJobLogsRequest.GetJobLogsRequest;
import * as GetJobLogsContentRequest from "./get-job-logs-content-request";
export import GetJobLogsContentRequest = GetJobLogsContentRequest.GetJobLogsContentRequest;
import * as GetJobTfConfigRequest from "./get-job-tf-config-request";
export import GetJobTfConfigRequest = GetJobTfConfigRequest.GetJobTfConfigRequest;
import * as GetJobTfPlanRequest from "./get-job-tf-plan-request";
export import GetJobTfPlanRequest = GetJobTfPlanRequest.GetJobTfPlanRequest;
import * as GetJobTfStateRequest from "./get-job-tf-state-request";
export import GetJobTfStateRequest = GetJobTfStateRequest.GetJobTfStateRequest;
import * as GetPrivateEndpointRequest from "./get-private-endpoint-request";
export import GetPrivateEndpointRequest = GetPrivateEndpointRequest.GetPrivateEndpointRequest;
import * as GetReachableIpRequest from "./get-reachable-ip-request";
export import GetReachableIpRequest = GetReachableIpRequest.GetReachableIpRequest;
import * as GetStackRequest from "./get-stack-request";
export import GetStackRequest = GetStackRequest.GetStackRequest;
import * as GetStackTfConfigRequest from "./get-stack-tf-config-request";
export import GetStackTfConfigRequest = GetStackTfConfigRequest.GetStackTfConfigRequest;
import * as GetStackTfStateRequest from "./get-stack-tf-state-request";
export import GetStackTfStateRequest = GetStackTfStateRequest.GetStackTfStateRequest;
import * as GetTemplateRequest from "./get-template-request";
export import GetTemplateRequest = GetTemplateRequest.GetTemplateRequest;
import * as GetTemplateLogoRequest from "./get-template-logo-request";
export import GetTemplateLogoRequest = GetTemplateLogoRequest.GetTemplateLogoRequest;
import * as GetTemplateTfConfigRequest from "./get-template-tf-config-request";
export import GetTemplateTfConfigRequest = GetTemplateTfConfigRequest.GetTemplateTfConfigRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListConfigurationSourceProvidersRequest from "./list-configuration-source-providers-request";
export import ListConfigurationSourceProvidersRequest = ListConfigurationSourceProvidersRequest.ListConfigurationSourceProvidersRequest;
import * as ListJobAssociatedResourcesRequest from "./list-job-associated-resources-request";
export import ListJobAssociatedResourcesRequest = ListJobAssociatedResourcesRequest.ListJobAssociatedResourcesRequest;
import * as ListJobOutputsRequest from "./list-job-outputs-request";
export import ListJobOutputsRequest = ListJobOutputsRequest.ListJobOutputsRequest;
import * as ListJobsRequest from "./list-jobs-request";
export import ListJobsRequest = ListJobsRequest.ListJobsRequest;
import * as ListPrivateEndpointsRequest from "./list-private-endpoints-request";
export import ListPrivateEndpointsRequest = ListPrivateEndpointsRequest.ListPrivateEndpointsRequest;
import * as ListResourceDiscoveryServicesRequest from "./list-resource-discovery-services-request";
export import ListResourceDiscoveryServicesRequest = ListResourceDiscoveryServicesRequest.ListResourceDiscoveryServicesRequest;
import * as ListStackAssociatedResourcesRequest from "./list-stack-associated-resources-request";
export import ListStackAssociatedResourcesRequest = ListStackAssociatedResourcesRequest.ListStackAssociatedResourcesRequest;
import * as ListStackResourceDriftDetailsRequest from "./list-stack-resource-drift-details-request";
export import ListStackResourceDriftDetailsRequest = ListStackResourceDriftDetailsRequest.ListStackResourceDriftDetailsRequest;
import * as ListStacksRequest from "./list-stacks-request";
export import ListStacksRequest = ListStacksRequest.ListStacksRequest;
import * as ListTemplateCategoriesRequest from "./list-template-categories-request";
export import ListTemplateCategoriesRequest = ListTemplateCategoriesRequest.ListTemplateCategoriesRequest;
import * as ListTemplatesRequest from "./list-templates-request";
export import ListTemplatesRequest = ListTemplatesRequest.ListTemplatesRequest;
import * as ListTerraformVersionsRequest from "./list-terraform-versions-request";
export import ListTerraformVersionsRequest = ListTerraformVersionsRequest.ListTerraformVersionsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as UpdateConfigurationSourceProviderRequest from "./update-configuration-source-provider-request";
export import UpdateConfigurationSourceProviderRequest = UpdateConfigurationSourceProviderRequest.UpdateConfigurationSourceProviderRequest;
import * as UpdateJobRequest from "./update-job-request";
export import UpdateJobRequest = UpdateJobRequest.UpdateJobRequest;
import * as UpdatePrivateEndpointRequest from "./update-private-endpoint-request";
export import UpdatePrivateEndpointRequest = UpdatePrivateEndpointRequest.UpdatePrivateEndpointRequest;
import * as UpdateStackRequest from "./update-stack-request";
export import UpdateStackRequest = UpdateStackRequest.UpdateStackRequest;
import * as UpdateTemplateRequest from "./update-template-request";
export import UpdateTemplateRequest = UpdateTemplateRequest.UpdateTemplateRequest;
