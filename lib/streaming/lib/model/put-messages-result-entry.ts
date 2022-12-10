/**
 * Streaming API
 * Use the Streaming API to produce and consume messages, create streams and stream pools, and manage related items. For more information, see [Streaming](/Content/Streaming/Concepts/streamingoverview.htm).
 * OpenAPI spec version: 20180418
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
 * Represents the result of a {@link #putMessages(PutMessagesRequest) putMessages} request, whether it was successful or not.
 * If a message was successfully appended to the stream, the entry includes the `offset`, `partition`, and `timestamp`.
 * If the message failed to be appended to the stream, the entry includes the `error` and `errorMessage`.
 *
 */
export interface PutMessagesResultEntry {
  /**
   * The ID of the partition where the message was stored.
   */
  "partition"?: string;
  /**
   * The offset of the message in the partition. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "offset"?: number;
  /**
   * The timestamp indicating when the server appended the message to the stream.
   */
  "timestamp"?: Date;
  /**
   * The error code, in case the message was not successfully appended to the stream.
   */
  "error"?: string;
  /**
   * A human-readable error message associated with the error code.
   */
  "errorMessage"?: string;
}

export namespace PutMessagesResultEntry {
  export function getJsonObj(obj: PutMessagesResultEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PutMessagesResultEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}