/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
 * OpenAPI spec version: 20190506
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The description of work request, including its status.
 */
export interface WorkRequest {
  /**
   * The identifier of the work request.
   */
  "id": string;
  /**
   * The identifier of the compartment that contains the work request.
   */
  "compartmentId": string;
  /**
   * The identifier of the Digital Assistant instance to which this work request pertains.
   */
  "odaInstanceId": string;
  /**
   * The type of the operation that's associated with the work request.
   */
  "requestAction": WorkRequest.RequestAction;
  /**
   * The status of current work request.
   */
  "status": WorkRequest.Status;
  /**
   * A short message that provides more detail about the current status.
   * For example, if a work request fails, then this may include information
   * about why it failed.
   *
   */
  "statusMessage"?: string;
  /**
   * The resources that this work request affects.
   */
  "resources": Array<model.WorkRequestResource>;
  /**
   * Percentage of the request completed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time that the request was created, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time that the request was started, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), CKQ
   * section 14.29.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time that the object finished, as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339). CKQ
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export enum RequestAction {
    CreateOdaInstance = "CREATE_ODA_INSTANCE",
    UpgradeOdaInstance = "UPGRADE_ODA_INSTANCE",
    DeleteOdaInstance = "DELETE_ODA_INSTANCE",
    PurgeOdaInstance = "PURGE_ODA_INSTANCE",
    RecoverOdaInstance = "RECOVER_ODA_INSTANCE",
    StopOdaInstance = "STOP_ODA_INSTANCE",
    StartOdaInstance = "START_ODA_INSTANCE",
    ChangeOdaInstanceCompartment = "CHANGE_ODA_INSTANCE_COMPARTMENT",
    ChangeCustEncKey = "CHANGE_CUST_ENC_KEY",
    DeactCustEncKey = "DEACT_CUST_ENC_KEY",
    CreateAssociation = "CREATE_ASSOCIATION",
    DeleteAssociation = "DELETE_ASSOCIATION",
    CreatePcsInstance = "CREATE_PCS_INSTANCE",
    UpdateEntitlementsForCacct = "UPDATE_ENTITLEMENTS_FOR_CACCT",
    LookupOdaInstancesForCacct = "LOOKUP_ODA_INSTANCES_FOR_CACCT",
    CreateOdaInstanceAttachment = "CREATE_ODA_INSTANCE_ATTACHMENT",
    UpdateOdaInstanceAttachment = "UPDATE_ODA_INSTANCE_ATTACHMENT",
    DeleteOdaInstanceAttachment = "DELETE_ODA_INSTANCE_ATTACHMENT",
    CreateImportedPackage = "CREATE_IMPORTED_PACKAGE",
    UpdateImportedPackage = "UPDATE_IMPORTED_PACKAGE",
    DeleteImportedPackage = "DELETE_IMPORTED_PACKAGE",
    ImportBot = "IMPORT_BOT",
    CreateSkill = "CREATE_SKILL",
    CloneSkill = "CLONE_SKILL",
    ExtendSkill = "EXTEND_SKILL",
    VersionSkill = "VERSION_SKILL",
    ExportSkill = "EXPORT_SKILL",
    CreateDigitalAssistant = "CREATE_DIGITAL_ASSISTANT",
    CloneDigitalAssistant = "CLONE_DIGITAL_ASSISTANT",
    ExtendDigitalAssistant = "EXTEND_DIGITAL_ASSISTANT",
    VersionDigitalAssistant = "VERSION_DIGITAL_ASSISTANT",
    ExportDigitalAssistant = "EXPORT_DIGITAL_ASSISTANT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}