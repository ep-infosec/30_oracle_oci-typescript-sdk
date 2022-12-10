/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
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
 * Form field.
 */
export interface DocumentField {
  /**
   * The field type.
   */
  "fieldType": DocumentField.FieldType;
  "fieldLabel"?: model.FieldLabel;
  "fieldName"?: model.FieldName;
  "fieldValue":
    | model.ValueTime
    | model.ValueInteger
    | model.ValueDate
    | model.ValueNumber
    | model.ValueString
    | model.ValuePhoneNumber
    | model.ValueArray;
}

export namespace DocumentField {
  export enum FieldType {
    LineItemGroup = "LINE_ITEM_GROUP",
    LineItem = "LINE_ITEM",
    LineItemField = "LINE_ITEM_FIELD",
    KeyValue = "KEY_VALUE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DocumentField): object {
    const jsonObj = {
      ...obj,
      ...{
        "fieldLabel": obj.fieldLabel ? model.FieldLabel.getJsonObj(obj.fieldLabel) : undefined,
        "fieldName": obj.fieldName ? model.FieldName.getJsonObj(obj.fieldName) : undefined,
        "fieldValue": obj.fieldValue ? model.FieldValue.getJsonObj(obj.fieldValue) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DocumentField): object {
    const jsonObj = {
      ...obj,
      ...{
        "fieldLabel": obj.fieldLabel
          ? model.FieldLabel.getDeserializedJsonObj(obj.fieldLabel)
          : undefined,
        "fieldName": obj.fieldName
          ? model.FieldName.getDeserializedJsonObj(obj.fieldName)
          : undefined,
        "fieldValue": obj.fieldValue
          ? model.FieldValue.getDeserializedJsonObj(obj.fieldValue)
          : undefined
      }
    };

    return jsonObj;
  }
}