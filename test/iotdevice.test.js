/* This code was initialised by Akka Serverless tooling.
 * As long as this file exists it will not be re-generated.
 * You are free to make changes to this file.
 */

import { MockEventSourcedEntity } from './testkit.js';
import { expect } from 'chai';
import iotDevice from '../src/iotdevice.js';
import worldMap from '../src/worldMap.js';

describe('IotDevice', () => {
  const region = {
    zoom: 18,
    topLeftLat: 1.234,
    topLeftLng: 2.345,
    botRightLat: 3.456,
    botRightLng: 4.567,
  };
  const entityId = worldMap.entityIdFor(region);
  const commandTelemetryRequest = iotDevice.lookupType('woe.twin.TelemetryRequest');
  const entity = new MockEventSourcedEntity(iotDevice, entityId);

  describe('Telemetry', () => {
    it('should create', () => {
      const telemetryRequest = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'create',
      });
      const result = entity.handleCommand('Telemetry', telemetryRequest);

      expect(result.httpStatusCode).to.equal(200);
      expect(entity.error).to.be.undefined;

      expect(entity.state.entityId).to.eql(entityId);
      expect(entity.state.region).to.eql(region);
      expect(entity.state.happy).to.true;
      // expect(entity.state).to.deep.equal({});
      // expect(entity.events).to.deep.equal([]);
    });

    it('should create and make sad', () => {
      const telemetryRequestCreate = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'create',
      });
      const telemetryRequestSad = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'sad',
      });
      entity.handleCommand('Telemetry', telemetryRequestCreate);
      const result = entity.handleCommand('Telemetry', telemetryRequestSad);

      expect(result.httpStatusCode).to.equal(200);
      expect(entity.error).to.be.undefined;

      expect(entity.state.entityId).to.eql(entityId);
      expect(entity.state.region).to.eql(region);
      expect(entity.state.happy).to.false;
    });

    it('should create and make sad then happy', () => {
      const telemetryRequestCreate = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'create',
      });
      const telemetryRequestSad = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'sad',
      });
      const telemetryRequestHappy = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'happy',
      });
      entity.handleCommand('Telemetry', telemetryRequestCreate);
      entity.handleCommand('Telemetry', telemetryRequestSad);
      const result = entity.handleCommand('Telemetry', telemetryRequestHappy);

      expect(result.httpStatusCode).to.equal(200);
      expect(entity.error).to.be.undefined;

      expect(entity.state.entityId).to.eql(entityId);
      expect(entity.state.region).to.eql(region);
      expect(entity.state.happy).to.true;
    });

    it('should create with ping of uncreated device', () => {
      const telemetryRequest = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'ping',
      });
      const result = entity.handleCommand('Telemetry', telemetryRequest);

      expect(result.httpStatusCode).to.equal(200);
      expect(entity.error).to.be.undefined;

      expect(entity.state.entityId).to.eql(entityId);
      expect(entity.state.region).to.eql(region);
      expect(entity.state.happy).to.true;
    });

    it('should create then delete device', () => {
      const telemetryRequestCreate = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'create',
      });
      const telemetryRequestDelete = commandTelemetryRequest.create({
        entityId: entityId,
        region: region,
        action: 'delete',
      });
      entity.handleCommand('Telemetry', telemetryRequestCreate);
      const result = entity.handleCommand('Telemetry', telemetryRequestDelete);

      expect(result.httpStatusCode).to.equal(200);
      expect(entity.error).to.be.undefined;

      expect(entity.state).to.eql({});
    });
  });
});
