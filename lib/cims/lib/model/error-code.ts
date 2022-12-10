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

import * as model from "../model";
import common = require("oci-common");

export enum ErrorCode {
  ContentEmpty = "CONTENT_EMPTY",
  ClientException = "CLIENT_EXCEPTION",
  InvalidFormat = "INVALID_FORMAT",
  InvalidJsonInput = "INVALID_JSON_INPUT",
  SslAuthorization = "SSL_AUTHORIZATION",
  AuthFailed = "AUTH_FAILED",
  CsiNotAuthorized = "CSI_NOT_AUTHORIZED",
  UserPolicyNotAuthorized = "USER_POLICY_NOT_AUTHORIZED",
  EmailNotVerified = "EMAIL_NOT_VERIFIED",
  EmailNotFound = "EMAIL_NOT_FOUND",
  IdcsEmailNotValid = "IDCS_EMAIL_NOT_VALID",
  InvalidPath = "INVALID_PATH",
  MethodNotAllowed = "METHOD_NOT_ALLOWED",
  JsonProcessing = "JSON_PROCESSING",
  GenericException = "GENERIC_EXCEPTION",
  ExternalServiceProviderUnavailable = "EXTERNAL_SERVICE_PROVIDER_UNAVAILABLE",
  ExternalServiceProviderTimeout = "EXTERNAL_SERVICE_PROVIDER_TIMEOUT",
  TooManyRequests = "TOO_MANY_REQUESTS",
  IdpScimNotSetup = "IDP_SCIM_NOT_SETUP",
  IncidentNotFound = "INCIDENT_NOT_FOUND",
  InvalidUserCsi = "INVALID_USER_CSI",
  DataAlreadyExists = "DATA_ALREADY_EXISTS",
  AuthUserNotMatching = "AUTH_USER_NOT_MATCHING",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ErrorCode {
  export function getJsonObj(obj: ErrorCode): ErrorCode {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ErrorCode): ErrorCode {
    return obj;
  }
}
