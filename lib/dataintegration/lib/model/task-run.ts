/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about a task run.
 */
export interface TaskRun {
  /**
   * The key of the object.
   */
  "key"?: string;
  /**
   * The type of the object.
   */
  "modelType"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * Detailed description for the object.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  "configProvider"?: model.ConfigProvider;
  /**
   * The status of the task run.
   */
  "status"?: TaskRun.Status;
  /**
   * The start time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "startTimeMillis"?: number;
  /**
   * The end time. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "endTimeMillis"?: number;
  /**
   * The date and time the object was last updated. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "lastUpdated"?: number;
  /**
   * The number of records processed in the task run. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recordsWritten"?: number;
  /**
   * The number of bytes processed in the task run. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bytesProcessed"?: number;
  /**
   * Contains an error message if status is `ERROR`.
   */
  "errorMessage"?: string;
  /**
   * The expected duration for the task run. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "expectedDuration"?: number;
  /**
   * The expected duration unit of measure.
   */
  "expectedDurationUnit"?: TaskRun.ExpectedDurationUnit;
  /**
   * Task Key of the task for which TaskRun is being created. If not specified, the AggregatorKey in RegistryMetadata will be assumed to be the TaskKey
   */
  "taskKey"?: string;
  /**
   * The external identifier for the task run.
   */
  "externalId"?: string;
  /**
   * Holds the particular attempt number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retryAttempt"?: number;
  "taskSchedule"?: model.TaskSchedule;
  /**
   * A map of metrics for the run.
   */
  "metrics"?: { [key: string]: number };
  /**
   * A map of the outputs of the run.
   */
  "outputs"?: { [key: string]: model.ParameterValue };
  /**
   * An array of execution errors from the run.
   */
  "executionErrors"?: Array<string>;
  /**
   * An array of termination errors from the run.
   */
  "terminationErrors"?: Array<string>;
  /**
   * The autorization mode for when the task was executed.
   */
  "authMode"?: TaskRun.AuthMode;
  /**
   * The OPC request ID of execution of the task run.
   */
  "opcRequestId"?: string;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * The type of task run.
   */
  "taskType"?: TaskRun.TaskType;
  /**
   * This field tells the user if there is any logs being fetched in backend for failure. Applicable only for failed pipeline tasks.
   */
  "isLogProcessingInProgress"?: boolean;
  /**
   * Value can only contain upper case letters, underscore and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };
}

export namespace TaskRun {
  export enum Status {
    NotStarted = "NOT_STARTED",
    Queued = "QUEUED",
    Running = "RUNNING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Success = "SUCCESS",
    Error = "ERROR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExpectedDurationUnit {
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS",
    Days = "DAYS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AuthMode {
    Obo = "OBO",
    ResourcePrincipal = "RESOURCE_PRINCIPAL",
    UserCertificate = "USER_CERTIFICATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TaskType {
    IntegrationTask = "INTEGRATION_TASK",
    DataLoaderTask = "DATA_LOADER_TASK",
    PipelineTask = "PIPELINE_TASK",
    SqlTask = "SQL_TASK",
    OciDataflowTask = "OCI_DATAFLOW_TASK",
    RestTask = "REST_TASK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: TaskRun): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "configProvider": obj.configProvider
          ? model.ConfigProvider.getJsonObj(obj.configProvider)
          : undefined,

        "taskSchedule": obj.taskSchedule
          ? model.TaskSchedule.getJsonObj(obj.taskSchedule)
          : undefined,

        "outputs": obj.outputs
          ? common.mapContainer(obj.outputs, model.ParameterValue.getJsonObj)
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TaskRun): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "configProvider": obj.configProvider
          ? model.ConfigProvider.getDeserializedJsonObj(obj.configProvider)
          : undefined,

        "taskSchedule": obj.taskSchedule
          ? model.TaskSchedule.getDeserializedJsonObj(obj.taskSchedule)
          : undefined,

        "outputs": obj.outputs
          ? common.mapContainer(obj.outputs, model.ParameterValue.getDeserializedJsonObj)
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
