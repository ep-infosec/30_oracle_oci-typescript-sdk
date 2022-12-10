/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeResolverCompartmentResponse from "./change-resolver-compartment-response";
export import ChangeResolverCompartmentResponse = ChangeResolverCompartmentResponse.ChangeResolverCompartmentResponse;
import * as ChangeSteeringPolicyCompartmentResponse from "./change-steering-policy-compartment-response";
export import ChangeSteeringPolicyCompartmentResponse = ChangeSteeringPolicyCompartmentResponse.ChangeSteeringPolicyCompartmentResponse;
import * as ChangeTsigKeyCompartmentResponse from "./change-tsig-key-compartment-response";
export import ChangeTsigKeyCompartmentResponse = ChangeTsigKeyCompartmentResponse.ChangeTsigKeyCompartmentResponse;
import * as ChangeViewCompartmentResponse from "./change-view-compartment-response";
export import ChangeViewCompartmentResponse = ChangeViewCompartmentResponse.ChangeViewCompartmentResponse;
import * as ChangeZoneCompartmentResponse from "./change-zone-compartment-response";
export import ChangeZoneCompartmentResponse = ChangeZoneCompartmentResponse.ChangeZoneCompartmentResponse;
import * as CreateResolverEndpointResponse from "./create-resolver-endpoint-response";
export import CreateResolverEndpointResponse = CreateResolverEndpointResponse.CreateResolverEndpointResponse;
import * as CreateSteeringPolicyResponse from "./create-steering-policy-response";
export import CreateSteeringPolicyResponse = CreateSteeringPolicyResponse.CreateSteeringPolicyResponse;
import * as CreateSteeringPolicyAttachmentResponse from "./create-steering-policy-attachment-response";
export import CreateSteeringPolicyAttachmentResponse = CreateSteeringPolicyAttachmentResponse.CreateSteeringPolicyAttachmentResponse;
import * as CreateTsigKeyResponse from "./create-tsig-key-response";
export import CreateTsigKeyResponse = CreateTsigKeyResponse.CreateTsigKeyResponse;
import * as CreateViewResponse from "./create-view-response";
export import CreateViewResponse = CreateViewResponse.CreateViewResponse;
import * as CreateZoneResponse from "./create-zone-response";
export import CreateZoneResponse = CreateZoneResponse.CreateZoneResponse;
import * as DeleteDomainRecordsResponse from "./delete-domain-records-response";
export import DeleteDomainRecordsResponse = DeleteDomainRecordsResponse.DeleteDomainRecordsResponse;
import * as DeleteRRSetResponse from "./delete-rrset-response";
export import DeleteRRSetResponse = DeleteRRSetResponse.DeleteRRSetResponse;
import * as DeleteResolverEndpointResponse from "./delete-resolver-endpoint-response";
export import DeleteResolverEndpointResponse = DeleteResolverEndpointResponse.DeleteResolverEndpointResponse;
import * as DeleteSteeringPolicyResponse from "./delete-steering-policy-response";
export import DeleteSteeringPolicyResponse = DeleteSteeringPolicyResponse.DeleteSteeringPolicyResponse;
import * as DeleteSteeringPolicyAttachmentResponse from "./delete-steering-policy-attachment-response";
export import DeleteSteeringPolicyAttachmentResponse = DeleteSteeringPolicyAttachmentResponse.DeleteSteeringPolicyAttachmentResponse;
import * as DeleteTsigKeyResponse from "./delete-tsig-key-response";
export import DeleteTsigKeyResponse = DeleteTsigKeyResponse.DeleteTsigKeyResponse;
import * as DeleteViewResponse from "./delete-view-response";
export import DeleteViewResponse = DeleteViewResponse.DeleteViewResponse;
import * as DeleteZoneResponse from "./delete-zone-response";
export import DeleteZoneResponse = DeleteZoneResponse.DeleteZoneResponse;
import * as GetDomainRecordsResponse from "./get-domain-records-response";
export import GetDomainRecordsResponse = GetDomainRecordsResponse.GetDomainRecordsResponse;
import * as GetRRSetResponse from "./get-rrset-response";
export import GetRRSetResponse = GetRRSetResponse.GetRRSetResponse;
import * as GetResolverResponse from "./get-resolver-response";
export import GetResolverResponse = GetResolverResponse.GetResolverResponse;
import * as GetResolverEndpointResponse from "./get-resolver-endpoint-response";
export import GetResolverEndpointResponse = GetResolverEndpointResponse.GetResolverEndpointResponse;
import * as GetSteeringPolicyResponse from "./get-steering-policy-response";
export import GetSteeringPolicyResponse = GetSteeringPolicyResponse.GetSteeringPolicyResponse;
import * as GetSteeringPolicyAttachmentResponse from "./get-steering-policy-attachment-response";
export import GetSteeringPolicyAttachmentResponse = GetSteeringPolicyAttachmentResponse.GetSteeringPolicyAttachmentResponse;
import * as GetTsigKeyResponse from "./get-tsig-key-response";
export import GetTsigKeyResponse = GetTsigKeyResponse.GetTsigKeyResponse;
import * as GetViewResponse from "./get-view-response";
export import GetViewResponse = GetViewResponse.GetViewResponse;
import * as GetZoneResponse from "./get-zone-response";
export import GetZoneResponse = GetZoneResponse.GetZoneResponse;
import * as GetZoneContentResponse from "./get-zone-content-response";
export import GetZoneContentResponse = GetZoneContentResponse.GetZoneContentResponse;
import * as GetZoneRecordsResponse from "./get-zone-records-response";
export import GetZoneRecordsResponse = GetZoneRecordsResponse.GetZoneRecordsResponse;
import * as ListResolverEndpointsResponse from "./list-resolver-endpoints-response";
export import ListResolverEndpointsResponse = ListResolverEndpointsResponse.ListResolverEndpointsResponse;
import * as ListResolversResponse from "./list-resolvers-response";
export import ListResolversResponse = ListResolversResponse.ListResolversResponse;
import * as ListSteeringPoliciesResponse from "./list-steering-policies-response";
export import ListSteeringPoliciesResponse = ListSteeringPoliciesResponse.ListSteeringPoliciesResponse;
import * as ListSteeringPolicyAttachmentsResponse from "./list-steering-policy-attachments-response";
export import ListSteeringPolicyAttachmentsResponse = ListSteeringPolicyAttachmentsResponse.ListSteeringPolicyAttachmentsResponse;
import * as ListTsigKeysResponse from "./list-tsig-keys-response";
export import ListTsigKeysResponse = ListTsigKeysResponse.ListTsigKeysResponse;
import * as ListViewsResponse from "./list-views-response";
export import ListViewsResponse = ListViewsResponse.ListViewsResponse;
import * as ListZoneTransferServersResponse from "./list-zone-transfer-servers-response";
export import ListZoneTransferServersResponse = ListZoneTransferServersResponse.ListZoneTransferServersResponse;
import * as ListZonesResponse from "./list-zones-response";
export import ListZonesResponse = ListZonesResponse.ListZonesResponse;
import * as PatchDomainRecordsResponse from "./patch-domain-records-response";
export import PatchDomainRecordsResponse = PatchDomainRecordsResponse.PatchDomainRecordsResponse;
import * as PatchRRSetResponse from "./patch-rrset-response";
export import PatchRRSetResponse = PatchRRSetResponse.PatchRRSetResponse;
import * as PatchZoneRecordsResponse from "./patch-zone-records-response";
export import PatchZoneRecordsResponse = PatchZoneRecordsResponse.PatchZoneRecordsResponse;
import * as UpdateDomainRecordsResponse from "./update-domain-records-response";
export import UpdateDomainRecordsResponse = UpdateDomainRecordsResponse.UpdateDomainRecordsResponse;
import * as UpdateRRSetResponse from "./update-rrset-response";
export import UpdateRRSetResponse = UpdateRRSetResponse.UpdateRRSetResponse;
import * as UpdateResolverResponse from "./update-resolver-response";
export import UpdateResolverResponse = UpdateResolverResponse.UpdateResolverResponse;
import * as UpdateResolverEndpointResponse from "./update-resolver-endpoint-response";
export import UpdateResolverEndpointResponse = UpdateResolverEndpointResponse.UpdateResolverEndpointResponse;
import * as UpdateSteeringPolicyResponse from "./update-steering-policy-response";
export import UpdateSteeringPolicyResponse = UpdateSteeringPolicyResponse.UpdateSteeringPolicyResponse;
import * as UpdateSteeringPolicyAttachmentResponse from "./update-steering-policy-attachment-response";
export import UpdateSteeringPolicyAttachmentResponse = UpdateSteeringPolicyAttachmentResponse.UpdateSteeringPolicyAttachmentResponse;
import * as UpdateTsigKeyResponse from "./update-tsig-key-response";
export import UpdateTsigKeyResponse = UpdateTsigKeyResponse.UpdateTsigKeyResponse;
import * as UpdateViewResponse from "./update-view-response";
export import UpdateViewResponse = UpdateViewResponse.UpdateViewResponse;
import * as UpdateZoneResponse from "./update-zone-response";
export import UpdateZoneResponse = UpdateZoneResponse.UpdateZoneResponse;
import * as UpdateZoneRecordsResponse from "./update-zone-records-response";
export import UpdateZoneRecordsResponse = UpdateZoneRecordsResponse.UpdateZoneRecordsResponse;