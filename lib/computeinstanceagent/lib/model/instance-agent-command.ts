/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * The command payload.
 */
export interface InstanceAgentCommand {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the command.
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment containing the command.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The date and time the command was created, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time the command was last updated, in the format defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated"?: Date;
  /**
   * Whether a request was made to cancel the command. Canceling a command is a best-effort attempt.
   */
  "isCanceled"?: boolean;
  /**
   * The amount of time that Oracle Cloud Agent is given to run the command on the instance before timing
   * out. The timer starts when Oracle Cloud Agent starts the command. Zero means no timeout.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "executionTimeOutInSeconds"?: number;
  /**
   * The target instance that the command runs on.
   */
  "target": model.InstanceAgentCommandTarget;
  /**
   * The contents of the command.
   */
  "content": model.InstanceAgentCommandContent;
}

export namespace InstanceAgentCommand {
  export function getJsonObj(obj: InstanceAgentCommand): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target ? model.InstanceAgentCommandTarget.getJsonObj(obj.target) : undefined,
        "content": obj.content
          ? model.InstanceAgentCommandContent.getJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceAgentCommand): object {
    const jsonObj = {
      ...obj,
      ...{
        "target": obj.target
          ? model.InstanceAgentCommandTarget.getDeserializedJsonObj(obj.target)
          : undefined,
        "content": obj.content
          ? model.InstanceAgentCommandContent.getDeserializedJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
}