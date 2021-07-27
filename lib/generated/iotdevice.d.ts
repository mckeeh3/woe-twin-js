/* This code is managed by Akka Serverless tooling.
 * It will be re-generated to reflect any changes to your protobuf definitions.
 * DO NOT EDIT
 */

import {
  TypedEventSourcedEntity,
  EventSourcedCommandContext
} from "../akkaserverless";
import proto from "./proto";

export type State = proto.woe.twin.domain.IState;
export type Event =
  | proto.woe.twin.domain.ICreated
  | proto.woe.twin.domain.IDeleted
  | proto.woe.twin.domain.IHappy
  | proto.woe.twin.domain.ISad;
export type Command = proto.woe.twin.ITelemetryRequest;

export type EventHandlers = {
  Created: (
    event: proto.woe.twin.domain.ICreated,
    state: State
  ) => State;
  Deleted: (
    event: proto.woe.twin.domain.IDeleted,
    state: State
  ) => State;
  Happy: (
    event: proto.woe.twin.domain.IHappy,
    state: State
  ) => State;
  Sad: (
    event: proto.woe.twin.domain.ISad,
    state: State
  ) => State;
};

export type CommandHandlers = {
  Telemetry: (
    command: proto.woe.twin.ITelemetryRequest,
    state: State,
    ctx: EventSourcedCommandContext<Event>
  ) => proto.woe.twin.ITelemetryResponse;
};

export type IotDevice = TypedEventSourcedEntity<
  State,
  EventHandlers,
  CommandHandlers
>;
