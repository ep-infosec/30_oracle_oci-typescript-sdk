/**
 * Events API
 * API for the Events Service. Use this API to manage rules and actions that create automation 
in your tenancy. For more information, see [Overview of Events](/iaas/Content/Events/Concepts/eventsoverview.htm).

 * OpenAPI spec version: 20181201
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as events_waiter from "./lib/events-waiter";

export { models };
export { requests };
export { responses };
export import EventsClient = client.EventsClient;
export import EventsWaiter = events_waiter.EventsWaiter;