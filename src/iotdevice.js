import akkaserverless from '@lightbend/akkaserverless-javascript-sdk';
import log from './logger.js';

const EventSourcedEntity = akkaserverless.EventSourcedEntity;

/**
 * Type definitions.
 * These types have been generated based on your proto source.
 * A TypeScript aware editor such as VS Code will be able to leverage them to provide hinting and validation.
 *
 * State; the serialisable and persistable state of the entity
 * @typedef { import("../lib/generated/iotdevice").State } State
 *
 * Event; the union of all possible event types
 * @typedef { import("../lib/generated/iotdevice").Event } Event
 *
 * IotDevice; a strongly typed extension of EventSourcedEntity derived from your proto source
 * @typedef { import("../lib/generated/iotdevice").IotDevice } IotDevice
 */

/**
 * @type IotDevice
 */
const entity = new EventSourcedEntity(['iot_device_api.proto', 'iot_device_domain.proto'], 'woe.twin.IotDevice', 'IotDevice', {
  includeDirs: ['./proto'],
  serializeFallbackToJson: true,
  forwardHeaders: [],
});

const telemetryResponse = entity.lookupType('woe.twin.TelemetryResponse');
const domainState = entity.lookupType('woe.twin.domain.State');
const eventCreated = entity.lookupType('woe.twin.domain.Created');
const eventDeleted = entity.lookupType('woe.twin.domain.Deleted');
const eventHappy = entity.lookupType('woe.twin.domain.Happy');
const eventSad = entity.lookupType('woe.twin.domain.Sad');

const telemetryCreate = (command, ctx) => {
  log(`Telemetry command ${command.action} ${command.entityId}`);
  ctx.emit(
    eventCreated.create({
      entityId: command.entityId,
      region: command.region,
    })
  );
  return telemetryResponse.create({
    message: `Created entity ${command.entityId}`,
    httpStatusCode: 200,
    telemetryRequest: command,
  });
};

const telemetryDelete = (command, ctx) => {
  log(`Telemetry command ${command.action} ${command.entityId}`);
  ctx.emit(
    eventDeleted.create({
      entityId: command.entityId,
      region: command.region,
    })
  );
  return telemetryResponse.create({
    message: `Deleted entity ${command.entityId}`,
    httpStatusCode: 200,
    telemetryRequest: command,
  });
};

const telemetryHappy = (command, ctx) => {
  log(`Telemetry command ${command.action} ${command.entityId}`);
  ctx.emit(
    eventHappy.create({
      entityId: command.entityId,
      region: command.region,
    })
  );
  return telemetryResponse.create({
    message: `Made happy entity ${command.entityId}`,
    httpStatusCode: 200,
    telemetryRequest: command,
  });
};

const telemetrySad = (command, ctx) => {
  log(`Telemetry command ${command.action} ${command.entityId}`);
  ctx.emit(
    eventSad.create({
      entityId: command.entityId,
      region: command.region,
    })
  );
  return telemetryResponse.create({
    message: `Made sad entity ${command.entityId}`,
    httpStatusCode: 200,
    telemetryRequest: command,
  });
};

const telemetryPing = (command, state, ctx) => {
  if (state && Object.keys(state).length === 0) {
    command.action = 'create';
    return telemetryCreate(command, ctx);
  }
  return telemetryResponse.create({
    message: `Ping entity ${command.entityId}`,
    httpStatusCode: 200,
    telemetryRequest: command,
  });
};

const telemetry = (command, state, ctx) => {
  switch (command.action) {
    case 'create':
      return telemetryCreate(command, ctx);
    case 'delete':
      return telemetryDelete(command, ctx);
    case 'happy':
      return telemetryHappy(command, ctx);
    case 'sad':
      return telemetrySad(command, ctx);
    case 'ping':
      return telemetryPing(command, state, ctx);
  }
  return ctx.fail(`Invalid telemetry command: ${command}`);
};

const created = (event, state) => {
  return domainState.create({
    entityId: event.entityId,
    region: event.region,
    happy: true,
  });
};

const deleted = (event, state) => {
  return {};
};

const happy = (event, state) => {
  return domainState.create({
    entityId: event.entityId,
    region: event.region,
    happy: true,
  });
};

const sad = (event, state) => {
  return domainState.create({
    entityId: event.entityId,
    region: event.region,
    happy: false,
  });
};

const commandHandlers = {
  Telemetry: telemetry,
};

const eventHandlers = {
  Created: created,
  Deleted: deleted,
  Happy: happy,
  Sad: sad,
};

entity.setBehavior((state) => ({
  commandHandlers: commandHandlers,
  eventHandlers: eventHandlers,
}));

entity.setInitial((entityId) => {
  log(`Start entity ${entityId}`);
  return {};
});

export default entity;
