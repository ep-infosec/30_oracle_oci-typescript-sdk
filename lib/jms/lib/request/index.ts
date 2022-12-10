/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddFleetInstallationSitesRequest from "./add-fleet-installation-sites-request";
export import AddFleetInstallationSitesRequest = AddFleetInstallationSitesRequest.AddFleetInstallationSitesRequest;
import * as CancelWorkRequestRequest from "./cancel-work-request-request";
export import CancelWorkRequestRequest = CancelWorkRequestRequest.CancelWorkRequestRequest;
import * as ChangeFleetCompartmentRequest from "./change-fleet-compartment-request";
export import ChangeFleetCompartmentRequest = ChangeFleetCompartmentRequest.ChangeFleetCompartmentRequest;
import * as CreateBlocklistRequest from "./create-blocklist-request";
export import CreateBlocklistRequest = CreateBlocklistRequest.CreateBlocklistRequest;
import * as CreateFleetRequest from "./create-fleet-request";
export import CreateFleetRequest = CreateFleetRequest.CreateFleetRequest;
import * as DeleteBlocklistRequest from "./delete-blocklist-request";
export import DeleteBlocklistRequest = DeleteBlocklistRequest.DeleteBlocklistRequest;
import * as DeleteCryptoAnalysisResultRequest from "./delete-crypto-analysis-result-request";
export import DeleteCryptoAnalysisResultRequest = DeleteCryptoAnalysisResultRequest.DeleteCryptoAnalysisResultRequest;
import * as DeleteFleetRequest from "./delete-fleet-request";
export import DeleteFleetRequest = DeleteFleetRequest.DeleteFleetRequest;
import * as GenerateAgentDeployScriptRequest from "./generate-agent-deploy-script-request";
export import GenerateAgentDeployScriptRequest = GenerateAgentDeployScriptRequest.GenerateAgentDeployScriptRequest;
import * as GetCryptoAnalysisResultRequest from "./get-crypto-analysis-result-request";
export import GetCryptoAnalysisResultRequest = GetCryptoAnalysisResultRequest.GetCryptoAnalysisResultRequest;
import * as GetFleetRequest from "./get-fleet-request";
export import GetFleetRequest = GetFleetRequest.GetFleetRequest;
import * as GetFleetAdvancedFeatureConfigurationRequest from "./get-fleet-advanced-feature-configuration-request";
export import GetFleetAdvancedFeatureConfigurationRequest = GetFleetAdvancedFeatureConfigurationRequest.GetFleetAdvancedFeatureConfigurationRequest;
import * as GetFleetAgentConfigurationRequest from "./get-fleet-agent-configuration-request";
export import GetFleetAgentConfigurationRequest = GetFleetAgentConfigurationRequest.GetFleetAgentConfigurationRequest;
import * as GetJavaFamilyRequest from "./get-java-family-request";
export import GetJavaFamilyRequest = GetJavaFamilyRequest.GetJavaFamilyRequest;
import * as GetJavaReleaseRequest from "./get-java-release-request";
export import GetJavaReleaseRequest = GetJavaReleaseRequest.GetJavaReleaseRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListBlocklistsRequest from "./list-blocklists-request";
export import ListBlocklistsRequest = ListBlocklistsRequest.ListBlocklistsRequest;
import * as ListCryptoAnalysisResultsRequest from "./list-crypto-analysis-results-request";
export import ListCryptoAnalysisResultsRequest = ListCryptoAnalysisResultsRequest.ListCryptoAnalysisResultsRequest;
import * as ListFleetsRequest from "./list-fleets-request";
export import ListFleetsRequest = ListFleetsRequest.ListFleetsRequest;
import * as ListInstallationSitesRequest from "./list-installation-sites-request";
export import ListInstallationSitesRequest = ListInstallationSitesRequest.ListInstallationSitesRequest;
import * as ListJavaFamiliesRequest from "./list-java-families-request";
export import ListJavaFamiliesRequest = ListJavaFamiliesRequest.ListJavaFamiliesRequest;
import * as ListJavaReleasesRequest from "./list-java-releases-request";
export import ListJavaReleasesRequest = ListJavaReleasesRequest.ListJavaReleasesRequest;
import * as ListJreUsageRequest from "./list-jre-usage-request";
export import ListJreUsageRequest = ListJreUsageRequest.ListJreUsageRequest;
import * as ListWorkItemsRequest from "./list-work-items-request";
export import ListWorkItemsRequest = ListWorkItemsRequest.ListWorkItemsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RemoveFleetInstallationSitesRequest from "./remove-fleet-installation-sites-request";
export import RemoveFleetInstallationSitesRequest = RemoveFleetInstallationSitesRequest.RemoveFleetInstallationSitesRequest;
import * as RequestCryptoAnalysesRequest from "./request-crypto-analyses-request";
export import RequestCryptoAnalysesRequest = RequestCryptoAnalysesRequest.RequestCryptoAnalysesRequest;
import * as RequestJfrRecordingsRequest from "./request-jfr-recordings-request";
export import RequestJfrRecordingsRequest = RequestJfrRecordingsRequest.RequestJfrRecordingsRequest;
import * as ScanJavaServerUsageRequest from "./scan-java-server-usage-request";
export import ScanJavaServerUsageRequest = ScanJavaServerUsageRequest.ScanJavaServerUsageRequest;
import * as ScanLibraryUsageRequest from "./scan-library-usage-request";
export import ScanLibraryUsageRequest = ScanLibraryUsageRequest.ScanLibraryUsageRequest;
import * as SummarizeApplicationUsageRequest from "./summarize-application-usage-request";
export import SummarizeApplicationUsageRequest = SummarizeApplicationUsageRequest.SummarizeApplicationUsageRequest;
import * as SummarizeDeployedApplicationUsageRequest from "./summarize-deployed-application-usage-request";
export import SummarizeDeployedApplicationUsageRequest = SummarizeDeployedApplicationUsageRequest.SummarizeDeployedApplicationUsageRequest;
import * as SummarizeInstallationUsageRequest from "./summarize-installation-usage-request";
export import SummarizeInstallationUsageRequest = SummarizeInstallationUsageRequest.SummarizeInstallationUsageRequest;
import * as SummarizeJavaServerInstanceUsageRequest from "./summarize-java-server-instance-usage-request";
export import SummarizeJavaServerInstanceUsageRequest = SummarizeJavaServerInstanceUsageRequest.SummarizeJavaServerInstanceUsageRequest;
import * as SummarizeJavaServerUsageRequest from "./summarize-java-server-usage-request";
export import SummarizeJavaServerUsageRequest = SummarizeJavaServerUsageRequest.SummarizeJavaServerUsageRequest;
import * as SummarizeJreUsageRequest from "./summarize-jre-usage-request";
export import SummarizeJreUsageRequest = SummarizeJreUsageRequest.SummarizeJreUsageRequest;
import * as SummarizeLibraryUsageRequest from "./summarize-library-usage-request";
export import SummarizeLibraryUsageRequest = SummarizeLibraryUsageRequest.SummarizeLibraryUsageRequest;
import * as SummarizeManagedInstanceUsageRequest from "./summarize-managed-instance-usage-request";
export import SummarizeManagedInstanceUsageRequest = SummarizeManagedInstanceUsageRequest.SummarizeManagedInstanceUsageRequest;
import * as SummarizeResourceInventoryRequest from "./summarize-resource-inventory-request";
export import SummarizeResourceInventoryRequest = SummarizeResourceInventoryRequest.SummarizeResourceInventoryRequest;
import * as UpdateFleetRequest from "./update-fleet-request";
export import UpdateFleetRequest = UpdateFleetRequest.UpdateFleetRequest;
import * as UpdateFleetAdvancedFeatureConfigurationRequest from "./update-fleet-advanced-feature-configuration-request";
export import UpdateFleetAdvancedFeatureConfigurationRequest = UpdateFleetAdvancedFeatureConfigurationRequest.UpdateFleetAdvancedFeatureConfigurationRequest;
import * as UpdateFleetAgentConfigurationRequest from "./update-fleet-agent-configuration-request";
export import UpdateFleetAgentConfigurationRequest = UpdateFleetAgentConfigurationRequest.UpdateFleetAgentConfigurationRequest;