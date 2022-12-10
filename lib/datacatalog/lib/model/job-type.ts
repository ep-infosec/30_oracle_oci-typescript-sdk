/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Type of job as described below.
 * HARVEST - Harvest jobs are metadata crawlers that extract schema from data assets.
 * PROFILING - Profiling jobs are data profilers that extract metrics about data like histograms, distribution, min, max, avg and so on.
 * SAMPLING - Sampling jobs extract a small subset of data for profiling and viewing.
 * PREVIEW  - Preview jobs are metadata crawlers but allow users to filter and view metadata entities in data assets.
 * IMPORT - Import jobs import metadata in data catalog repository from a data catalog exported file.
 * EXPORT - Export jobs export data catalog metadata for imports into other data catalog repositories.
 * IMPORT_GLOSSARY - Job type to import glossary metadata from a file.
 * EXPORT_GLOSSARY - Job type to export glossary metadata to a file.
 * ASYNC_DELETE - Job type for asynchronous bulk delete on data assets, folders and data entities.
 * PURGE - Job type for cleaning up schedules, executions and logs of a Job.
 * IMPORT_DATA_ASSET - Job type to import technical objects to a data asset.
 *
 **/
export enum JobType {
  Harvest = "HARVEST",
  Profiling = "PROFILING",
  Sampling = "SAMPLING",
  Preview = "PREVIEW",
  Import = "IMPORT",
  Export = "EXPORT",
  ImportGlossary = "IMPORT_GLOSSARY",
  ExportGlossary = "EXPORT_GLOSSARY",
  Internal = "INTERNAL",
  Purge = "PURGE",
  Immediate = "IMMEDIATE",
  Scheduled = "SCHEDULED",
  ImmediateExecution = "IMMEDIATE_EXECUTION",
  ScheduledExecution = "SCHEDULED_EXECUTION",
  ScheduledExecutionInstance = "SCHEDULED_EXECUTION_INSTANCE",
  AsyncDelete = "ASYNC_DELETE",
  ImportDataAsset = "IMPORT_DATA_ASSET",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace JobType {
  export function getJsonObj(obj: JobType): JobType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: JobType): JobType {
    return obj;
  }
}