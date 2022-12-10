/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
* The properties that define a migration. A migration represents the end-to-end workflow of moving an application from a source
* environment to Oracle Cloud Infrastructure. Each migration moves a single application to Oracle Cloud Infrastructure.
* For more information, see [Manage Migrations](https://docs.cloud.oracle.com/iaas/application-migration/manage_migrations.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized, talk to an administrator.
* If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Migration {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the migration.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the migration.
   *
   */
  "compartmentId"?: string;
  /**
   * User-friendly name of the migration.
   */
  "displayName"?: string;
  /**
   * Description of the migration.
   */
  "description"?: string;
  /**
   * The date and time at which the migration was created, in the format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the source with which this migration is associated.
   */
  "sourceId"?: string;
  /**
   * Name of the application which is being migrated. This is the name of the application in the source environment.
   */
  "applicationName"?: string;
  /**
   * The type of application being migrated.
   */
  "applicationType"?: model.MigrationTypes;
  /**
   * The pre-existing database type to be used in this migration. Currently, Application migration only supports Oracle Cloud
   * Infrastructure databases and this option is currently available only for `JAVA_CLOUD_SERVICE` and `WEBLOGIC_CLOUD_SERVICE` target instance types.
   *
   */
  "preCreatedTargetDatabaseType"?: model.TargetDatabaseTypes;
  /**
   * If set to `true`, Application Migration migrates only the application resources that you specify. If set to `false`, Application Migration migrates the entire application. When you migrate the entire application, all the application resources are migrated to the target environment. You can selectively migrate resources only for the Oracle Integration Cloud and Oracle Integration Cloud Service applications.
   *
   */
  "isSelectiveMigration"?: boolean;
  /**
   * Configuration required to migrate the application. In addition to the key and value, additional fields are provided
   * to describe type type and purpose of each field. Only the value for each key is required when passing configuration to the
   * CreateMigration operation.
   *
   */
  "serviceConfig"?: { [key: string]: model.ConfigurationField };
  /**
   * Configuration required to migrate the application. In addition to the key and value, additional fields are provided
   * to describe type type and purpose of each field. Only the value for each key is required when passing configuration to the
   * CreateMigration operation.
   *
   */
  "applicationConfig"?: { [key: string]: model.ConfigurationField };
  /**
   * The current state of the migration.
   */
  "lifecycleState"?: model.MigrationLifecycleStates;
  /**
   * Details about the current lifecycle state of the migration.
   */
  "lifecycleDetails"?: string;
  /**
   * The current state of the overall migration process.
   */
  "migrationState"?: model.MigrationStates;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Migration {
  export function getJsonObj(obj: Migration): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceConfig": obj.serviceConfig
          ? common.mapContainer(obj.serviceConfig, model.ConfigurationField.getJsonObj)
          : undefined,
        "applicationConfig": obj.applicationConfig
          ? common.mapContainer(obj.applicationConfig, model.ConfigurationField.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Migration): object {
    const jsonObj = {
      ...obj,
      ...{
        "serviceConfig": obj.serviceConfig
          ? common.mapContainer(obj.serviceConfig, model.ConfigurationField.getDeserializedJsonObj)
          : undefined,
        "applicationConfig": obj.applicationConfig
          ? common.mapContainer(
              obj.applicationConfig,
              model.ConfigurationField.getDeserializedJsonObj
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
