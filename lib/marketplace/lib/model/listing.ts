/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * The model for an Oracle Cloud Infrastructure Marketplace listing.
 */
export interface Listing {
  /**
   * The unique identifier for the listing in Marketplace.
   */
  "id"?: string;
  /**
   * The name of the listing.
   */
  "name"?: string;
  /**
   * The version of the listing.
   */
  "version"?: string;
  /**
   * The tagline of the listing.
   */
  "tagline"?: string;
  /**
   * Keywords associated with the listing.
   */
  "keywords"?: string;
  /**
   * A short description of the listing.
   */
  "shortDescription"?: string;
  /**
   * Usage information for the listing.
   */
  "usageInformation"?: string;
  /**
   * A long description of the listing.
   */
  "longDescription"?: string;
  /**
   * A description of the publisher's licensing model for the listing.
   */
  "licenseModelDescription"?: string;
  /**
   * System requirements for the listing.
   */
  "systemRequirements"?: string;
  /**
   * The release date of the listing.
   */
  "timeReleased"?: Date;
  /**
   * Release notes for the listing.
   */
  "releaseNotes"?: string;
  /**
   * Categories that the listing belongs to.
   */
  "categories"?: Array<string>;
  "publisher"?: model.Publisher;
  /**
   * Languages supported by the listing.
   */
  "languages"?: Array<model.Item>;
  /**
   * Screenshots of the listing.
   */
  "screenshots"?: Array<model.Screenshot>;
  /**
   * Videos of the listing.
   */
  "videos"?: Array<model.NamedLink>;
  /**
   * Contact information to use to get support from the publisher for the listing.
   */
  "supportContacts"?: Array<model.SupportContact>;
  /**
   * Links to support resources for the listing.
   */
  "supportLinks"?: Array<model.NamedLink>;
  /**
   * Links to additional documentation provided by the publisher specifically for the listing.
   */
  "documentationLinks"?: Array<model.DocumentationLink>;
  "icon"?: model.UploadData;
  "banner"?: model.UploadData;
  /**
   * The list of compatible architectures supported by the listing
   */
  "compatibleArchitectures"?: Array<Listing.CompatibleArchitectures>;
  /**
   * The regions where you can deploy the listing. (Some listings have restrictions that limit their deployment to United States regions only.)
   *
   */
  "regions"?: Array<model.Region>;
  /**
   * The listing's package type.
   */
  "packageType"?: model.PackageTypeEnum;
  /**
   * The default package version.
   */
  "defaultPackageVersion"?: string;
  /**
   * Links to reference material.
   */
  "links"?: Array<model.Link>;
  /**
   * Indicates whether the listing is included in Featured Listings.
   */
  "isFeatured"?: boolean;
  /**
   * The publisher category to which the listing belongs. The publisher category informs where the listing appears for use.
   */
  "listingType"?: model.ListingType;
  /**
   * List of operating systems supported by the listing.
   */
  "supportedOperatingSystems"?: Array<model.OperatingSystem>;
}

export namespace Listing {
  export enum CompatibleArchitectures {
    X86 = "X86",
    Arm = "ARM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Listing): object {
    const jsonObj = {
      ...obj,
      ...{
        "publisher": obj.publisher ? model.Publisher.getJsonObj(obj.publisher) : undefined,
        "languages": obj.languages
          ? obj.languages.map(item => {
              return model.Item.getJsonObj(item);
            })
          : undefined,
        "screenshots": obj.screenshots
          ? obj.screenshots.map(item => {
              return model.Screenshot.getJsonObj(item);
            })
          : undefined,
        "videos": obj.videos
          ? obj.videos.map(item => {
              return model.NamedLink.getJsonObj(item);
            })
          : undefined,
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getJsonObj(item);
            })
          : undefined,
        "supportLinks": obj.supportLinks
          ? obj.supportLinks.map(item => {
              return model.NamedLink.getJsonObj(item);
            })
          : undefined,
        "documentationLinks": obj.documentationLinks
          ? obj.documentationLinks.map(item => {
              return model.DocumentationLink.getJsonObj(item);
            })
          : undefined,
        "icon": obj.icon ? model.UploadData.getJsonObj(obj.icon) : undefined,
        "banner": obj.banner ? model.UploadData.getJsonObj(obj.banner) : undefined,

        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined,

        "links": obj.links
          ? obj.links.map(item => {
              return model.Link.getJsonObj(item);
            })
          : undefined,

        "supportedOperatingSystems": obj.supportedOperatingSystems
          ? obj.supportedOperatingSystems.map(item => {
              return model.OperatingSystem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Listing): object {
    const jsonObj = {
      ...obj,
      ...{
        "publisher": obj.publisher
          ? model.Publisher.getDeserializedJsonObj(obj.publisher)
          : undefined,
        "languages": obj.languages
          ? obj.languages.map(item => {
              return model.Item.getDeserializedJsonObj(item);
            })
          : undefined,
        "screenshots": obj.screenshots
          ? obj.screenshots.map(item => {
              return model.Screenshot.getDeserializedJsonObj(item);
            })
          : undefined,
        "videos": obj.videos
          ? obj.videos.map(item => {
              return model.NamedLink.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportContacts": obj.supportContacts
          ? obj.supportContacts.map(item => {
              return model.SupportContact.getDeserializedJsonObj(item);
            })
          : undefined,
        "supportLinks": obj.supportLinks
          ? obj.supportLinks.map(item => {
              return model.NamedLink.getDeserializedJsonObj(item);
            })
          : undefined,
        "documentationLinks": obj.documentationLinks
          ? obj.documentationLinks.map(item => {
              return model.DocumentationLink.getDeserializedJsonObj(item);
            })
          : undefined,
        "icon": obj.icon ? model.UploadData.getDeserializedJsonObj(obj.icon) : undefined,
        "banner": obj.banner ? model.UploadData.getDeserializedJsonObj(obj.banner) : undefined,

        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getDeserializedJsonObj(item);
            })
          : undefined,

        "links": obj.links
          ? obj.links.map(item => {
              return model.Link.getDeserializedJsonObj(item);
            })
          : undefined,

        "supportedOperatingSystems": obj.supportedOperatingSystems
          ? obj.supportedOperatingSystems.map(item => {
              return model.OperatingSystem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}