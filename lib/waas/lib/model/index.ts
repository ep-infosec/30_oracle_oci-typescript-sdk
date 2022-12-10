/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessRule from "./access-rule";
export import AccessRule = AccessRule.AccessRule;
import * as AccessRuleCriteria from "./access-rule-criteria";
export import AccessRuleCriteria = AccessRuleCriteria.AccessRuleCriteria;
import * as AddressList from "./address-list";
export import AddressList = AddressList.AddressList;
import * as AddressListSummary from "./address-list-summary";
export import AddressListSummary = AddressListSummary.AddressListSummary;
import * as AddressRateLimiting from "./address-rate-limiting";
export import AddressRateLimiting = AddressRateLimiting.AddressRateLimiting;
import * as BlockChallengeSettings from "./block-challenge-settings";
export import BlockChallengeSettings = BlockChallengeSettings.BlockChallengeSettings;
import * as CachingRule from "./caching-rule";
export import CachingRule = CachingRule.CachingRule;
import * as CachingRuleCriteria from "./caching-rule-criteria";
export import CachingRuleCriteria = CachingRuleCriteria.CachingRuleCriteria;
import * as CachingRuleSummary from "./caching-rule-summary";
export import CachingRuleSummary = CachingRuleSummary.CachingRuleSummary;
import * as Captcha from "./captcha";
export import Captcha = Captcha.Captcha;
import * as Certificate from "./certificate";
export import Certificate = Certificate.Certificate;
import * as CertificateExtensions from "./certificate_extensions";
export import CertificateExtensions = CertificateExtensions.CertificateExtensions;
import * as CertificateIssuerName from "./certificate-issuer-name";
export import CertificateIssuerName = CertificateIssuerName.CertificateIssuerName;
import * as CertificatePublicKeyInfo from "./certificate_public-key-info";
export import CertificatePublicKeyInfo = CertificatePublicKeyInfo.CertificatePublicKeyInfo;
import * as CertificateSubjectName from "./certificate-subject-name";
export import CertificateSubjectName = CertificateSubjectName.CertificateSubjectName;
import * as CertificateSummary from "./certificate-summary";
export import CertificateSummary = CertificateSummary.CertificateSummary;
import * as ChangeAddressListCompartmentDetails from "./change-address-list-compartment-details";
export import ChangeAddressListCompartmentDetails = ChangeAddressListCompartmentDetails.ChangeAddressListCompartmentDetails;
import * as ChangeCertificateCompartmentDetails from "./change-certificate-compartment-details";
export import ChangeCertificateCompartmentDetails = ChangeCertificateCompartmentDetails.ChangeCertificateCompartmentDetails;
import * as ChangeCustomProtectionRuleCompartmentDetails from "./change-custom-protection-rule-compartment-details";
export import ChangeCustomProtectionRuleCompartmentDetails = ChangeCustomProtectionRuleCompartmentDetails.ChangeCustomProtectionRuleCompartmentDetails;
import * as ChangeHttpRedirectCompartmentDetails from "./change-http-redirect-compartment-details";
export import ChangeHttpRedirectCompartmentDetails = ChangeHttpRedirectCompartmentDetails.ChangeHttpRedirectCompartmentDetails;
import * as ChangeWaasPolicyCompartmentDetails from "./change-waas-policy-compartment-details";
export import ChangeWaasPolicyCompartmentDetails = ChangeWaasPolicyCompartmentDetails.ChangeWaasPolicyCompartmentDetails;
import * as CreateAddressListDetails from "./create-address-list-details";
export import CreateAddressListDetails = CreateAddressListDetails.CreateAddressListDetails;
import * as CreateCertificateDetails from "./create-certificate-details";
export import CreateCertificateDetails = CreateCertificateDetails.CreateCertificateDetails;
import * as CreateCustomProtectionRuleDetails from "./create-custom-protection-rule-details";
export import CreateCustomProtectionRuleDetails = CreateCustomProtectionRuleDetails.CreateCustomProtectionRuleDetails;
import * as CreateHttpRedirectDetails from "./create-http-redirect-details";
export import CreateHttpRedirectDetails = CreateHttpRedirectDetails.CreateHttpRedirectDetails;
import * as CreateWaasPolicyDetails from "./create-waas-policy-details";
export import CreateWaasPolicyDetails = CreateWaasPolicyDetails.CreateWaasPolicyDetails;
import * as CustomProtectionRule from "./custom-protection-rule";
export import CustomProtectionRule = CustomProtectionRule.CustomProtectionRule;
import * as CustomProtectionRuleSetting from "./custom-protection-rule-setting";
export import CustomProtectionRuleSetting = CustomProtectionRuleSetting.CustomProtectionRuleSetting;
import * as CustomProtectionRuleSummary from "./custom-protection-rule-summary";
export import CustomProtectionRuleSummary = CustomProtectionRuleSummary.CustomProtectionRuleSummary;
import * as DeviceFingerprintChallenge from "./device-fingerprint-challenge";
export import DeviceFingerprintChallenge = DeviceFingerprintChallenge.DeviceFingerprintChallenge;
import * as EdgeSubnet from "./edge-subnet";
export import EdgeSubnet = EdgeSubnet.EdgeSubnet;
import * as GoodBot from "./good-bot";
export import GoodBot = GoodBot.GoodBot;
import * as Header from "./header";
export import Header = Header.Header;
import * as HeaderManipulationAction from "./header-manipulation-action";
export import HeaderManipulationAction = HeaderManipulationAction.HeaderManipulationAction;
import * as HealthCheck from "./health-check";
export import HealthCheck = HealthCheck.HealthCheck;
import * as HttpRedirect from "./http-redirect";
export import HttpRedirect = HttpRedirect.HttpRedirect;
import * as HttpRedirectSummary from "./http-redirect-summary";
export import HttpRedirectSummary = HttpRedirectSummary.HttpRedirectSummary;
import * as HttpRedirectTarget from "./http-redirect-target";
export import HttpRedirectTarget = HttpRedirectTarget.HttpRedirectTarget;
import * as HumanInteractionChallenge from "./human-interaction-challenge";
export import HumanInteractionChallenge = HumanInteractionChallenge.HumanInteractionChallenge;
import * as JsChallenge from "./js-challenge";
export import JsChallenge = JsChallenge.JsChallenge;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as LoadBalancingMethod from "./load-balancing-method";
export import LoadBalancingMethod = LoadBalancingMethod.LoadBalancingMethod;
import * as Origin from "./origin";
export import Origin = Origin.Origin;
import * as OriginGroup from "./origin-group";
export import OriginGroup = OriginGroup.OriginGroup;
import * as OriginGroupOrigins from "./origin-group_origins";
export import OriginGroupOrigins = OriginGroupOrigins.OriginGroupOrigins;
import * as PolicyConfig from "./policy-config";
export import PolicyConfig = PolicyConfig.PolicyConfig;
import * as ProtectionRule from "./protection-rule";
export import ProtectionRule = ProtectionRule.ProtectionRule;
import * as ProtectionRuleAction from "./protection-rule-action";
export import ProtectionRuleAction = ProtectionRuleAction.ProtectionRuleAction;
import * as ProtectionRuleExclusion from "./protection-rule-exclusion";
export import ProtectionRuleExclusion = ProtectionRuleExclusion.ProtectionRuleExclusion;
import * as ProtectionSettings from "./protection-settings";
export import ProtectionSettings = ProtectionSettings.ProtectionSettings;
import * as PurgeCache from "./purge-cache";
export import PurgeCache = PurgeCache.PurgeCache;
import * as Recommendation from "./recommendation";
export import Recommendation = Recommendation.Recommendation;
import * as ThreatFeed from "./threat-feed";
export import ThreatFeed = ThreatFeed.ThreatFeed;
import * as ThreatFeedAction from "./threat-feed-action";
export import ThreatFeedAction = ThreatFeedAction.ThreatFeedAction;
import * as UpdateAddressListDetails from "./update-address-list-details";
export import UpdateAddressListDetails = UpdateAddressListDetails.UpdateAddressListDetails;
import * as UpdateCertificateDetails from "./update-certificate-details";
export import UpdateCertificateDetails = UpdateCertificateDetails.UpdateCertificateDetails;
import * as UpdateCustomProtectionRuleDetails from "./update-custom-protection-rule-details";
export import UpdateCustomProtectionRuleDetails = UpdateCustomProtectionRuleDetails.UpdateCustomProtectionRuleDetails;
import * as UpdateHttpRedirectDetails from "./update-http-redirect-details";
export import UpdateHttpRedirectDetails = UpdateHttpRedirectDetails.UpdateHttpRedirectDetails;
import * as UpdateWaasPolicyDetails from "./update-waas-policy-details";
export import UpdateWaasPolicyDetails = UpdateWaasPolicyDetails.UpdateWaasPolicyDetails;
import * as WaasPolicy from "./waas-policy";
export import WaasPolicy = WaasPolicy.WaasPolicy;
import * as WaasPolicyCustomProtectionRuleSummary from "./waas-policy-custom-protection-rule-summary";
export import WaasPolicyCustomProtectionRuleSummary = WaasPolicyCustomProtectionRuleSummary.WaasPolicyCustomProtectionRuleSummary;
import * as WaasPolicySummary from "./waas-policy-summary";
export import WaasPolicySummary = WaasPolicySummary.WaasPolicySummary;
import * as WafBlockedRequest from "./waf-blocked-request";
export import WafBlockedRequest = WafBlockedRequest.WafBlockedRequest;
import * as WafConfig from "./waf-config";
export import WafConfig = WafConfig.WafConfig;
import * as WafConfigDetails from "./waf-config-details";
export import WafConfigDetails = WafConfigDetails.WafConfigDetails;
import * as WafLog from "./waf-log";
export import WafLog = WafLog.WafLog;
import * as WafMeterDatum from "./waf-meter-datum";
export import WafMeterDatum = WafMeterDatum.WafMeterDatum;
import * as WafRequest from "./waf-request";
export import WafRequest = WafRequest.WafRequest;
import * as WafTrafficDatum from "./waf-traffic-datum";
export import WafTrafficDatum = WafTrafficDatum.WafTrafficDatum;
import * as Whitelist from "./whitelist";
export import Whitelist = Whitelist.Whitelist;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestOperationTypes from "./work-request-operation-types";
export import WorkRequestOperationTypes = WorkRequestOperationTypes.WorkRequestOperationTypes;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestStatusValues from "./work-request-status-values";
export import WorkRequestStatusValues = WorkRequestStatusValues.WorkRequestStatusValues;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as AddHttpResponseHeaderAction from "./add-http-response-header-action";
export import AddHttpResponseHeaderAction = AddHttpResponseHeaderAction.AddHttpResponseHeaderAction;
import * as ExtendHttpResponseHeaderAction from "./extend-http-response-header-action";
export import ExtendHttpResponseHeaderAction = ExtendHttpResponseHeaderAction.ExtendHttpResponseHeaderAction;
import * as IPHashLoadBalancingMethod from "./i-phash-load-balancing-method";
export import IPHashLoadBalancingMethod = IPHashLoadBalancingMethod.IPHashLoadBalancingMethod;
import * as RemoveHttpResponseHeaderAction from "./remove-http-response-header-action";
export import RemoveHttpResponseHeaderAction = RemoveHttpResponseHeaderAction.RemoveHttpResponseHeaderAction;
import * as RoundRobinLoadBalancingMethod from "./round-robin-load-balancing-method";
export import RoundRobinLoadBalancingMethod = RoundRobinLoadBalancingMethod.RoundRobinLoadBalancingMethod;
import * as StickyCookieLoadBalancingMethod from "./sticky-cookie-load-balancing-method";
export import StickyCookieLoadBalancingMethod = StickyCookieLoadBalancingMethod.StickyCookieLoadBalancingMethod;
