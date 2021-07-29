// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.woe = (function() {

    /**
     * Namespace woe.
     * @exports woe
     * @namespace
     */
    var woe = {};

    woe.twin = (function() {

        /**
         * Namespace twin.
         * @memberof woe
         * @namespace
         */
        var twin = {};

        twin.Region = (function() {

            /**
             * Properties of a Region.
             * @memberof woe.twin
             * @interface IRegion
             * @property {number|null} [zoom] Region zoom
             * @property {number|null} [topLeftLat] Region topLeftLat
             * @property {number|null} [topLeftLng] Region topLeftLng
             * @property {number|null} [botRightLat] Region botRightLat
             * @property {number|null} [botRightLng] Region botRightLng
             */

            /**
             * Constructs a new Region.
             * @memberof woe.twin
             * @classdesc Represents a Region.
             * @implements IRegion
             * @constructor
             * @param {woe.twin.IRegion=} [properties] Properties to set
             */
            function Region(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Region zoom.
             * @member {number} zoom
             * @memberof woe.twin.Region
             * @instance
             */
            Region.prototype.zoom = 0;

            /**
             * Region topLeftLat.
             * @member {number} topLeftLat
             * @memberof woe.twin.Region
             * @instance
             */
            Region.prototype.topLeftLat = 0;

            /**
             * Region topLeftLng.
             * @member {number} topLeftLng
             * @memberof woe.twin.Region
             * @instance
             */
            Region.prototype.topLeftLng = 0;

            /**
             * Region botRightLat.
             * @member {number} botRightLat
             * @memberof woe.twin.Region
             * @instance
             */
            Region.prototype.botRightLat = 0;

            /**
             * Region botRightLng.
             * @member {number} botRightLng
             * @memberof woe.twin.Region
             * @instance
             */
            Region.prototype.botRightLng = 0;

            /**
             * Creates a new Region instance using the specified properties.
             * @function create
             * @memberof woe.twin.Region
             * @static
             * @param {woe.twin.IRegion=} [properties] Properties to set
             * @returns {woe.twin.Region} Region instance
             */
            Region.create = function create(properties) {
                return new Region(properties);
            };

            /**
             * Encodes the specified Region message. Does not implicitly {@link woe.twin.Region.verify|verify} messages.
             * @function encode
             * @memberof woe.twin.Region
             * @static
             * @param {woe.twin.IRegion} message Region message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Region.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.zoom != null && Object.hasOwnProperty.call(message, "zoom"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.zoom);
                if (message.topLeftLat != null && Object.hasOwnProperty.call(message, "topLeftLat"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.topLeftLat);
                if (message.topLeftLng != null && Object.hasOwnProperty.call(message, "topLeftLng"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.topLeftLng);
                if (message.botRightLat != null && Object.hasOwnProperty.call(message, "botRightLat"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.botRightLat);
                if (message.botRightLng != null && Object.hasOwnProperty.call(message, "botRightLng"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.botRightLng);
                return writer;
            };

            /**
             * Encodes the specified Region message, length delimited. Does not implicitly {@link woe.twin.Region.verify|verify} messages.
             * @function encodeDelimited
             * @memberof woe.twin.Region
             * @static
             * @param {woe.twin.IRegion} message Region message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Region.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Region message from the specified reader or buffer.
             * @function decode
             * @memberof woe.twin.Region
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {woe.twin.Region} Region
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Region.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.Region();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.zoom = reader.int32();
                        break;
                    case 2:
                        message.topLeftLat = reader.double();
                        break;
                    case 3:
                        message.topLeftLng = reader.double();
                        break;
                    case 4:
                        message.botRightLat = reader.double();
                        break;
                    case 5:
                        message.botRightLng = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Region message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof woe.twin.Region
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {woe.twin.Region} Region
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Region.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Region message.
             * @function verify
             * @memberof woe.twin.Region
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Region.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.zoom != null && message.hasOwnProperty("zoom"))
                    if (!$util.isInteger(message.zoom))
                        return "zoom: integer expected";
                if (message.topLeftLat != null && message.hasOwnProperty("topLeftLat"))
                    if (typeof message.topLeftLat !== "number")
                        return "topLeftLat: number expected";
                if (message.topLeftLng != null && message.hasOwnProperty("topLeftLng"))
                    if (typeof message.topLeftLng !== "number")
                        return "topLeftLng: number expected";
                if (message.botRightLat != null && message.hasOwnProperty("botRightLat"))
                    if (typeof message.botRightLat !== "number")
                        return "botRightLat: number expected";
                if (message.botRightLng != null && message.hasOwnProperty("botRightLng"))
                    if (typeof message.botRightLng !== "number")
                        return "botRightLng: number expected";
                return null;
            };

            /**
             * Creates a Region message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof woe.twin.Region
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {woe.twin.Region} Region
             */
            Region.fromObject = function fromObject(object) {
                if (object instanceof $root.woe.twin.Region)
                    return object;
                var message = new $root.woe.twin.Region();
                if (object.zoom != null)
                    message.zoom = object.zoom | 0;
                if (object.topLeftLat != null)
                    message.topLeftLat = Number(object.topLeftLat);
                if (object.topLeftLng != null)
                    message.topLeftLng = Number(object.topLeftLng);
                if (object.botRightLat != null)
                    message.botRightLat = Number(object.botRightLat);
                if (object.botRightLng != null)
                    message.botRightLng = Number(object.botRightLng);
                return message;
            };

            /**
             * Creates a plain object from a Region message. Also converts values to other types if specified.
             * @function toObject
             * @memberof woe.twin.Region
             * @static
             * @param {woe.twin.Region} message Region
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Region.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.zoom = 0;
                    object.topLeftLat = 0;
                    object.topLeftLng = 0;
                    object.botRightLat = 0;
                    object.botRightLng = 0;
                }
                if (message.zoom != null && message.hasOwnProperty("zoom"))
                    object.zoom = message.zoom;
                if (message.topLeftLat != null && message.hasOwnProperty("topLeftLat"))
                    object.topLeftLat = options.json && !isFinite(message.topLeftLat) ? String(message.topLeftLat) : message.topLeftLat;
                if (message.topLeftLng != null && message.hasOwnProperty("topLeftLng"))
                    object.topLeftLng = options.json && !isFinite(message.topLeftLng) ? String(message.topLeftLng) : message.topLeftLng;
                if (message.botRightLat != null && message.hasOwnProperty("botRightLat"))
                    object.botRightLat = options.json && !isFinite(message.botRightLat) ? String(message.botRightLat) : message.botRightLat;
                if (message.botRightLng != null && message.hasOwnProperty("botRightLng"))
                    object.botRightLng = options.json && !isFinite(message.botRightLng) ? String(message.botRightLng) : message.botRightLng;
                return object;
            };

            /**
             * Converts this Region to JSON.
             * @function toJSON
             * @memberof woe.twin.Region
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Region.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Region;
        })();

        twin.TelemetryRequest = (function() {

            /**
             * Properties of a TelemetryRequest.
             * @memberof woe.twin
             * @interface ITelemetryRequest
             * @property {string|null} [entityId] TelemetryRequest entityId
             * @property {woe.twin.IRegion|null} [region] TelemetryRequest region
             * @property {string|null} [action] TelemetryRequest action
             * @property {number|Long|null} [startTimeNs] TelemetryRequest startTimeNs
             */

            /**
             * Constructs a new TelemetryRequest.
             * @memberof woe.twin
             * @classdesc Represents a TelemetryRequest.
             * @implements ITelemetryRequest
             * @constructor
             * @param {woe.twin.ITelemetryRequest=} [properties] Properties to set
             */
            function TelemetryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TelemetryRequest entityId.
             * @member {string} entityId
             * @memberof woe.twin.TelemetryRequest
             * @instance
             */
            TelemetryRequest.prototype.entityId = "";

            /**
             * TelemetryRequest region.
             * @member {woe.twin.IRegion|null|undefined} region
             * @memberof woe.twin.TelemetryRequest
             * @instance
             */
            TelemetryRequest.prototype.region = null;

            /**
             * TelemetryRequest action.
             * @member {string} action
             * @memberof woe.twin.TelemetryRequest
             * @instance
             */
            TelemetryRequest.prototype.action = "";

            /**
             * TelemetryRequest startTimeNs.
             * @member {number|Long} startTimeNs
             * @memberof woe.twin.TelemetryRequest
             * @instance
             */
            TelemetryRequest.prototype.startTimeNs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new TelemetryRequest instance using the specified properties.
             * @function create
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {woe.twin.ITelemetryRequest=} [properties] Properties to set
             * @returns {woe.twin.TelemetryRequest} TelemetryRequest instance
             */
            TelemetryRequest.create = function create(properties) {
                return new TelemetryRequest(properties);
            };

            /**
             * Encodes the specified TelemetryRequest message. Does not implicitly {@link woe.twin.TelemetryRequest.verify|verify} messages.
             * @function encode
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {woe.twin.ITelemetryRequest} message TelemetryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TelemetryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                    $root.woe.twin.Region.encode(message.region, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.action);
                if (message.startTimeNs != null && Object.hasOwnProperty.call(message, "startTimeNs"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.startTimeNs);
                return writer;
            };

            /**
             * Encodes the specified TelemetryRequest message, length delimited. Does not implicitly {@link woe.twin.TelemetryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {woe.twin.ITelemetryRequest} message TelemetryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TelemetryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TelemetryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {woe.twin.TelemetryRequest} TelemetryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TelemetryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.TelemetryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.entityId = reader.string();
                        break;
                    case 2:
                        message.region = $root.woe.twin.Region.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.action = reader.string();
                        break;
                    case 4:
                        message.startTimeNs = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TelemetryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {woe.twin.TelemetryRequest} TelemetryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TelemetryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TelemetryRequest message.
             * @function verify
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TelemetryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    if (!$util.isString(message.entityId))
                        return "entityId: string expected";
                if (message.region != null && message.hasOwnProperty("region")) {
                    var error = $root.woe.twin.Region.verify(message.region);
                    if (error)
                        return "region." + error;
                }
                if (message.action != null && message.hasOwnProperty("action"))
                    if (!$util.isString(message.action))
                        return "action: string expected";
                if (message.startTimeNs != null && message.hasOwnProperty("startTimeNs"))
                    if (!$util.isInteger(message.startTimeNs) && !(message.startTimeNs && $util.isInteger(message.startTimeNs.low) && $util.isInteger(message.startTimeNs.high)))
                        return "startTimeNs: integer|Long expected";
                return null;
            };

            /**
             * Creates a TelemetryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {woe.twin.TelemetryRequest} TelemetryRequest
             */
            TelemetryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.woe.twin.TelemetryRequest)
                    return object;
                var message = new $root.woe.twin.TelemetryRequest();
                if (object.entityId != null)
                    message.entityId = String(object.entityId);
                if (object.region != null) {
                    if (typeof object.region !== "object")
                        throw TypeError(".woe.twin.TelemetryRequest.region: object expected");
                    message.region = $root.woe.twin.Region.fromObject(object.region);
                }
                if (object.action != null)
                    message.action = String(object.action);
                if (object.startTimeNs != null)
                    if ($util.Long)
                        (message.startTimeNs = $util.Long.fromValue(object.startTimeNs)).unsigned = false;
                    else if (typeof object.startTimeNs === "string")
                        message.startTimeNs = parseInt(object.startTimeNs, 10);
                    else if (typeof object.startTimeNs === "number")
                        message.startTimeNs = object.startTimeNs;
                    else if (typeof object.startTimeNs === "object")
                        message.startTimeNs = new $util.LongBits(object.startTimeNs.low >>> 0, object.startTimeNs.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a TelemetryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof woe.twin.TelemetryRequest
             * @static
             * @param {woe.twin.TelemetryRequest} message TelemetryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TelemetryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.entityId = "";
                    object.region = null;
                    object.action = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.startTimeNs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.startTimeNs = options.longs === String ? "0" : 0;
                }
                if (message.entityId != null && message.hasOwnProperty("entityId"))
                    object.entityId = message.entityId;
                if (message.region != null && message.hasOwnProperty("region"))
                    object.region = $root.woe.twin.Region.toObject(message.region, options);
                if (message.action != null && message.hasOwnProperty("action"))
                    object.action = message.action;
                if (message.startTimeNs != null && message.hasOwnProperty("startTimeNs"))
                    if (typeof message.startTimeNs === "number")
                        object.startTimeNs = options.longs === String ? String(message.startTimeNs) : message.startTimeNs;
                    else
                        object.startTimeNs = options.longs === String ? $util.Long.prototype.toString.call(message.startTimeNs) : options.longs === Number ? new $util.LongBits(message.startTimeNs.low >>> 0, message.startTimeNs.high >>> 0).toNumber() : message.startTimeNs;
                return object;
            };

            /**
             * Converts this TelemetryRequest to JSON.
             * @function toJSON
             * @memberof woe.twin.TelemetryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TelemetryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TelemetryRequest;
        })();

        twin.TelemetryResponse = (function() {

            /**
             * Properties of a TelemetryResponse.
             * @memberof woe.twin
             * @interface ITelemetryResponse
             * @property {string|null} [message] TelemetryResponse message
             * @property {number|null} [httpStatusCode] TelemetryResponse httpStatusCode
             * @property {woe.twin.ITelemetryRequest|null} [telemetryRequest] TelemetryResponse telemetryRequest
             */

            /**
             * Constructs a new TelemetryResponse.
             * @memberof woe.twin
             * @classdesc Represents a TelemetryResponse.
             * @implements ITelemetryResponse
             * @constructor
             * @param {woe.twin.ITelemetryResponse=} [properties] Properties to set
             */
            function TelemetryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TelemetryResponse message.
             * @member {string} message
             * @memberof woe.twin.TelemetryResponse
             * @instance
             */
            TelemetryResponse.prototype.message = "";

            /**
             * TelemetryResponse httpStatusCode.
             * @member {number} httpStatusCode
             * @memberof woe.twin.TelemetryResponse
             * @instance
             */
            TelemetryResponse.prototype.httpStatusCode = 0;

            /**
             * TelemetryResponse telemetryRequest.
             * @member {woe.twin.ITelemetryRequest|null|undefined} telemetryRequest
             * @memberof woe.twin.TelemetryResponse
             * @instance
             */
            TelemetryResponse.prototype.telemetryRequest = null;

            /**
             * Creates a new TelemetryResponse instance using the specified properties.
             * @function create
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {woe.twin.ITelemetryResponse=} [properties] Properties to set
             * @returns {woe.twin.TelemetryResponse} TelemetryResponse instance
             */
            TelemetryResponse.create = function create(properties) {
                return new TelemetryResponse(properties);
            };

            /**
             * Encodes the specified TelemetryResponse message. Does not implicitly {@link woe.twin.TelemetryResponse.verify|verify} messages.
             * @function encode
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {woe.twin.ITelemetryResponse} message TelemetryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TelemetryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.httpStatusCode != null && Object.hasOwnProperty.call(message, "httpStatusCode"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.httpStatusCode);
                if (message.telemetryRequest != null && Object.hasOwnProperty.call(message, "telemetryRequest"))
                    $root.woe.twin.TelemetryRequest.encode(message.telemetryRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TelemetryResponse message, length delimited. Does not implicitly {@link woe.twin.TelemetryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {woe.twin.ITelemetryResponse} message TelemetryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TelemetryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TelemetryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {woe.twin.TelemetryResponse} TelemetryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TelemetryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.TelemetryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    case 2:
                        message.httpStatusCode = reader.int32();
                        break;
                    case 3:
                        message.telemetryRequest = $root.woe.twin.TelemetryRequest.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TelemetryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {woe.twin.TelemetryResponse} TelemetryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TelemetryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TelemetryResponse message.
             * @function verify
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TelemetryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.httpStatusCode != null && message.hasOwnProperty("httpStatusCode"))
                    if (!$util.isInteger(message.httpStatusCode))
                        return "httpStatusCode: integer expected";
                if (message.telemetryRequest != null && message.hasOwnProperty("telemetryRequest")) {
                    var error = $root.woe.twin.TelemetryRequest.verify(message.telemetryRequest);
                    if (error)
                        return "telemetryRequest." + error;
                }
                return null;
            };

            /**
             * Creates a TelemetryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {woe.twin.TelemetryResponse} TelemetryResponse
             */
            TelemetryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.woe.twin.TelemetryResponse)
                    return object;
                var message = new $root.woe.twin.TelemetryResponse();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.httpStatusCode != null)
                    message.httpStatusCode = object.httpStatusCode | 0;
                if (object.telemetryRequest != null) {
                    if (typeof object.telemetryRequest !== "object")
                        throw TypeError(".woe.twin.TelemetryResponse.telemetryRequest: object expected");
                    message.telemetryRequest = $root.woe.twin.TelemetryRequest.fromObject(object.telemetryRequest);
                }
                return message;
            };

            /**
             * Creates a plain object from a TelemetryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof woe.twin.TelemetryResponse
             * @static
             * @param {woe.twin.TelemetryResponse} message TelemetryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TelemetryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.httpStatusCode = 0;
                    object.telemetryRequest = null;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.httpStatusCode != null && message.hasOwnProperty("httpStatusCode"))
                    object.httpStatusCode = message.httpStatusCode;
                if (message.telemetryRequest != null && message.hasOwnProperty("telemetryRequest"))
                    object.telemetryRequest = $root.woe.twin.TelemetryRequest.toObject(message.telemetryRequest, options);
                return object;
            };

            /**
             * Converts this TelemetryResponse to JSON.
             * @function toJSON
             * @memberof woe.twin.TelemetryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TelemetryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TelemetryResponse;
        })();

        twin.IotDevice = (function() {

            /**
             * Constructs a new IotDevice service.
             * @memberof woe.twin
             * @classdesc Represents an IotDevice
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function IotDevice(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (IotDevice.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = IotDevice;

            /**
             * Creates new IotDevice service using the specified rpc implementation.
             * @function create
             * @memberof woe.twin.IotDevice
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {IotDevice} RPC service. Useful where requests and/or responses are streamed.
             */
            IotDevice.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link woe.twin.IotDevice#telemetry}.
             * @memberof woe.twin.IotDevice
             * @typedef TelemetryCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {woe.twin.TelemetryResponse} [response] TelemetryResponse
             */

            /**
             * Calls Telemetry.
             * @function telemetry
             * @memberof woe.twin.IotDevice
             * @instance
             * @param {woe.twin.ITelemetryRequest} request TelemetryRequest message or plain object
             * @param {woe.twin.IotDevice.TelemetryCallback} callback Node-style callback called with the error, if any, and TelemetryResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(IotDevice.prototype.telemetry = function telemetry(request, callback) {
                return this.rpcCall(telemetry, $root.woe.twin.TelemetryRequest, $root.woe.twin.TelemetryResponse, request, callback);
            }, "name", { value: "Telemetry" });

            /**
             * Calls Telemetry.
             * @function telemetry
             * @memberof woe.twin.IotDevice
             * @instance
             * @param {woe.twin.ITelemetryRequest} request TelemetryRequest message or plain object
             * @returns {Promise<woe.twin.TelemetryResponse>} Promise
             * @variation 2
             */

            return IotDevice;
        })();

        twin.domain = (function() {

            /**
             * Namespace domain.
             * @memberof woe.twin
             * @namespace
             */
            var domain = {};

            domain.State = (function() {

                /**
                 * Properties of a State.
                 * @memberof woe.twin.domain
                 * @interface IState
                 * @property {string|null} [entityId] State entityId
                 * @property {woe.twin.IRegion|null} [region] State region
                 * @property {boolean|null} [happy] State happy
                 */

                /**
                 * Constructs a new State.
                 * @memberof woe.twin.domain
                 * @classdesc Represents a State.
                 * @implements IState
                 * @constructor
                 * @param {woe.twin.domain.IState=} [properties] Properties to set
                 */
                function State(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * State entityId.
                 * @member {string} entityId
                 * @memberof woe.twin.domain.State
                 * @instance
                 */
                State.prototype.entityId = "";

                /**
                 * State region.
                 * @member {woe.twin.IRegion|null|undefined} region
                 * @memberof woe.twin.domain.State
                 * @instance
                 */
                State.prototype.region = null;

                /**
                 * State happy.
                 * @member {boolean} happy
                 * @memberof woe.twin.domain.State
                 * @instance
                 */
                State.prototype.happy = false;

                /**
                 * Creates a new State instance using the specified properties.
                 * @function create
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {woe.twin.domain.IState=} [properties] Properties to set
                 * @returns {woe.twin.domain.State} State instance
                 */
                State.create = function create(properties) {
                    return new State(properties);
                };

                /**
                 * Encodes the specified State message. Does not implicitly {@link woe.twin.domain.State.verify|verify} messages.
                 * @function encode
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {woe.twin.domain.IState} message State message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                State.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                    if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                        $root.woe.twin.Region.encode(message.region, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.happy != null && Object.hasOwnProperty.call(message, "happy"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.happy);
                    return writer;
                };

                /**
                 * Encodes the specified State message, length delimited. Does not implicitly {@link woe.twin.domain.State.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {woe.twin.domain.IState} message State message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                State.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a State message from the specified reader or buffer.
                 * @function decode
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {woe.twin.domain.State} State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                State.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.domain.State();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.entityId = reader.string();
                            break;
                        case 2:
                            message.region = $root.woe.twin.Region.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.happy = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a State message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {woe.twin.domain.State} State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                State.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a State message.
                 * @function verify
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                State.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        if (!$util.isString(message.entityId))
                            return "entityId: string expected";
                    if (message.region != null && message.hasOwnProperty("region")) {
                        var error = $root.woe.twin.Region.verify(message.region);
                        if (error)
                            return "region." + error;
                    }
                    if (message.happy != null && message.hasOwnProperty("happy"))
                        if (typeof message.happy !== "boolean")
                            return "happy: boolean expected";
                    return null;
                };

                /**
                 * Creates a State message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {woe.twin.domain.State} State
                 */
                State.fromObject = function fromObject(object) {
                    if (object instanceof $root.woe.twin.domain.State)
                        return object;
                    var message = new $root.woe.twin.domain.State();
                    if (object.entityId != null)
                        message.entityId = String(object.entityId);
                    if (object.region != null) {
                        if (typeof object.region !== "object")
                            throw TypeError(".woe.twin.domain.State.region: object expected");
                        message.region = $root.woe.twin.Region.fromObject(object.region);
                    }
                    if (object.happy != null)
                        message.happy = Boolean(object.happy);
                    return message;
                };

                /**
                 * Creates a plain object from a State message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof woe.twin.domain.State
                 * @static
                 * @param {woe.twin.domain.State} message State
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                State.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.entityId = "";
                        object.region = null;
                        object.happy = false;
                    }
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        object.entityId = message.entityId;
                    if (message.region != null && message.hasOwnProperty("region"))
                        object.region = $root.woe.twin.Region.toObject(message.region, options);
                    if (message.happy != null && message.hasOwnProperty("happy"))
                        object.happy = message.happy;
                    return object;
                };

                /**
                 * Converts this State to JSON.
                 * @function toJSON
                 * @memberof woe.twin.domain.State
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                State.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return State;
            })();

            domain.Created = (function() {

                /**
                 * Properties of a Created.
                 * @memberof woe.twin.domain
                 * @interface ICreated
                 * @property {string|null} [entityId] Created entityId
                 * @property {woe.twin.IRegion|null} [region] Created region
                 */

                /**
                 * Constructs a new Created.
                 * @memberof woe.twin.domain
                 * @classdesc Represents a Created.
                 * @implements ICreated
                 * @constructor
                 * @param {woe.twin.domain.ICreated=} [properties] Properties to set
                 */
                function Created(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Created entityId.
                 * @member {string} entityId
                 * @memberof woe.twin.domain.Created
                 * @instance
                 */
                Created.prototype.entityId = "";

                /**
                 * Created region.
                 * @member {woe.twin.IRegion|null|undefined} region
                 * @memberof woe.twin.domain.Created
                 * @instance
                 */
                Created.prototype.region = null;

                /**
                 * Creates a new Created instance using the specified properties.
                 * @function create
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {woe.twin.domain.ICreated=} [properties] Properties to set
                 * @returns {woe.twin.domain.Created} Created instance
                 */
                Created.create = function create(properties) {
                    return new Created(properties);
                };

                /**
                 * Encodes the specified Created message. Does not implicitly {@link woe.twin.domain.Created.verify|verify} messages.
                 * @function encode
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {woe.twin.domain.ICreated} message Created message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Created.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                    if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                        $root.woe.twin.Region.encode(message.region, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Created message, length delimited. Does not implicitly {@link woe.twin.domain.Created.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {woe.twin.domain.ICreated} message Created message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Created.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Created message from the specified reader or buffer.
                 * @function decode
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {woe.twin.domain.Created} Created
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Created.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.domain.Created();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.entityId = reader.string();
                            break;
                        case 2:
                            message.region = $root.woe.twin.Region.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Created message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {woe.twin.domain.Created} Created
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Created.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Created message.
                 * @function verify
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Created.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        if (!$util.isString(message.entityId))
                            return "entityId: string expected";
                    if (message.region != null && message.hasOwnProperty("region")) {
                        var error = $root.woe.twin.Region.verify(message.region);
                        if (error)
                            return "region." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Created message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {woe.twin.domain.Created} Created
                 */
                Created.fromObject = function fromObject(object) {
                    if (object instanceof $root.woe.twin.domain.Created)
                        return object;
                    var message = new $root.woe.twin.domain.Created();
                    if (object.entityId != null)
                        message.entityId = String(object.entityId);
                    if (object.region != null) {
                        if (typeof object.region !== "object")
                            throw TypeError(".woe.twin.domain.Created.region: object expected");
                        message.region = $root.woe.twin.Region.fromObject(object.region);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Created message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof woe.twin.domain.Created
                 * @static
                 * @param {woe.twin.domain.Created} message Created
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Created.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.entityId = "";
                        object.region = null;
                    }
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        object.entityId = message.entityId;
                    if (message.region != null && message.hasOwnProperty("region"))
                        object.region = $root.woe.twin.Region.toObject(message.region, options);
                    return object;
                };

                /**
                 * Converts this Created to JSON.
                 * @function toJSON
                 * @memberof woe.twin.domain.Created
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Created.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Created;
            })();

            domain.Deleted = (function() {

                /**
                 * Properties of a Deleted.
                 * @memberof woe.twin.domain
                 * @interface IDeleted
                 * @property {string|null} [entityId] Deleted entityId
                 * @property {woe.twin.IRegion|null} [region] Deleted region
                 */

                /**
                 * Constructs a new Deleted.
                 * @memberof woe.twin.domain
                 * @classdesc Represents a Deleted.
                 * @implements IDeleted
                 * @constructor
                 * @param {woe.twin.domain.IDeleted=} [properties] Properties to set
                 */
                function Deleted(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Deleted entityId.
                 * @member {string} entityId
                 * @memberof woe.twin.domain.Deleted
                 * @instance
                 */
                Deleted.prototype.entityId = "";

                /**
                 * Deleted region.
                 * @member {woe.twin.IRegion|null|undefined} region
                 * @memberof woe.twin.domain.Deleted
                 * @instance
                 */
                Deleted.prototype.region = null;

                /**
                 * Creates a new Deleted instance using the specified properties.
                 * @function create
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {woe.twin.domain.IDeleted=} [properties] Properties to set
                 * @returns {woe.twin.domain.Deleted} Deleted instance
                 */
                Deleted.create = function create(properties) {
                    return new Deleted(properties);
                };

                /**
                 * Encodes the specified Deleted message. Does not implicitly {@link woe.twin.domain.Deleted.verify|verify} messages.
                 * @function encode
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {woe.twin.domain.IDeleted} message Deleted message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Deleted.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                    if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                        $root.woe.twin.Region.encode(message.region, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Deleted message, length delimited. Does not implicitly {@link woe.twin.domain.Deleted.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {woe.twin.domain.IDeleted} message Deleted message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Deleted.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Deleted message from the specified reader or buffer.
                 * @function decode
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {woe.twin.domain.Deleted} Deleted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Deleted.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.domain.Deleted();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.entityId = reader.string();
                            break;
                        case 2:
                            message.region = $root.woe.twin.Region.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Deleted message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {woe.twin.domain.Deleted} Deleted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Deleted.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Deleted message.
                 * @function verify
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Deleted.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        if (!$util.isString(message.entityId))
                            return "entityId: string expected";
                    if (message.region != null && message.hasOwnProperty("region")) {
                        var error = $root.woe.twin.Region.verify(message.region);
                        if (error)
                            return "region." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Deleted message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {woe.twin.domain.Deleted} Deleted
                 */
                Deleted.fromObject = function fromObject(object) {
                    if (object instanceof $root.woe.twin.domain.Deleted)
                        return object;
                    var message = new $root.woe.twin.domain.Deleted();
                    if (object.entityId != null)
                        message.entityId = String(object.entityId);
                    if (object.region != null) {
                        if (typeof object.region !== "object")
                            throw TypeError(".woe.twin.domain.Deleted.region: object expected");
                        message.region = $root.woe.twin.Region.fromObject(object.region);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Deleted message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof woe.twin.domain.Deleted
                 * @static
                 * @param {woe.twin.domain.Deleted} message Deleted
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Deleted.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.entityId = "";
                        object.region = null;
                    }
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        object.entityId = message.entityId;
                    if (message.region != null && message.hasOwnProperty("region"))
                        object.region = $root.woe.twin.Region.toObject(message.region, options);
                    return object;
                };

                /**
                 * Converts this Deleted to JSON.
                 * @function toJSON
                 * @memberof woe.twin.domain.Deleted
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Deleted.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Deleted;
            })();

            domain.Happy = (function() {

                /**
                 * Properties of a Happy.
                 * @memberof woe.twin.domain
                 * @interface IHappy
                 * @property {string|null} [entityId] Happy entityId
                 * @property {woe.twin.IRegion|null} [region] Happy region
                 */

                /**
                 * Constructs a new Happy.
                 * @memberof woe.twin.domain
                 * @classdesc Represents a Happy.
                 * @implements IHappy
                 * @constructor
                 * @param {woe.twin.domain.IHappy=} [properties] Properties to set
                 */
                function Happy(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Happy entityId.
                 * @member {string} entityId
                 * @memberof woe.twin.domain.Happy
                 * @instance
                 */
                Happy.prototype.entityId = "";

                /**
                 * Happy region.
                 * @member {woe.twin.IRegion|null|undefined} region
                 * @memberof woe.twin.domain.Happy
                 * @instance
                 */
                Happy.prototype.region = null;

                /**
                 * Creates a new Happy instance using the specified properties.
                 * @function create
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {woe.twin.domain.IHappy=} [properties] Properties to set
                 * @returns {woe.twin.domain.Happy} Happy instance
                 */
                Happy.create = function create(properties) {
                    return new Happy(properties);
                };

                /**
                 * Encodes the specified Happy message. Does not implicitly {@link woe.twin.domain.Happy.verify|verify} messages.
                 * @function encode
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {woe.twin.domain.IHappy} message Happy message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Happy.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                    if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                        $root.woe.twin.Region.encode(message.region, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Happy message, length delimited. Does not implicitly {@link woe.twin.domain.Happy.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {woe.twin.domain.IHappy} message Happy message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Happy.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Happy message from the specified reader or buffer.
                 * @function decode
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {woe.twin.domain.Happy} Happy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Happy.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.domain.Happy();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.entityId = reader.string();
                            break;
                        case 2:
                            message.region = $root.woe.twin.Region.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Happy message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {woe.twin.domain.Happy} Happy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Happy.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Happy message.
                 * @function verify
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Happy.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        if (!$util.isString(message.entityId))
                            return "entityId: string expected";
                    if (message.region != null && message.hasOwnProperty("region")) {
                        var error = $root.woe.twin.Region.verify(message.region);
                        if (error)
                            return "region." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Happy message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {woe.twin.domain.Happy} Happy
                 */
                Happy.fromObject = function fromObject(object) {
                    if (object instanceof $root.woe.twin.domain.Happy)
                        return object;
                    var message = new $root.woe.twin.domain.Happy();
                    if (object.entityId != null)
                        message.entityId = String(object.entityId);
                    if (object.region != null) {
                        if (typeof object.region !== "object")
                            throw TypeError(".woe.twin.domain.Happy.region: object expected");
                        message.region = $root.woe.twin.Region.fromObject(object.region);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Happy message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof woe.twin.domain.Happy
                 * @static
                 * @param {woe.twin.domain.Happy} message Happy
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Happy.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.entityId = "";
                        object.region = null;
                    }
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        object.entityId = message.entityId;
                    if (message.region != null && message.hasOwnProperty("region"))
                        object.region = $root.woe.twin.Region.toObject(message.region, options);
                    return object;
                };

                /**
                 * Converts this Happy to JSON.
                 * @function toJSON
                 * @memberof woe.twin.domain.Happy
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Happy.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Happy;
            })();

            domain.Sad = (function() {

                /**
                 * Properties of a Sad.
                 * @memberof woe.twin.domain
                 * @interface ISad
                 * @property {string|null} [entityId] Sad entityId
                 * @property {woe.twin.IRegion|null} [region] Sad region
                 */

                /**
                 * Constructs a new Sad.
                 * @memberof woe.twin.domain
                 * @classdesc Represents a Sad.
                 * @implements ISad
                 * @constructor
                 * @param {woe.twin.domain.ISad=} [properties] Properties to set
                 */
                function Sad(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Sad entityId.
                 * @member {string} entityId
                 * @memberof woe.twin.domain.Sad
                 * @instance
                 */
                Sad.prototype.entityId = "";

                /**
                 * Sad region.
                 * @member {woe.twin.IRegion|null|undefined} region
                 * @memberof woe.twin.domain.Sad
                 * @instance
                 */
                Sad.prototype.region = null;

                /**
                 * Creates a new Sad instance using the specified properties.
                 * @function create
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {woe.twin.domain.ISad=} [properties] Properties to set
                 * @returns {woe.twin.domain.Sad} Sad instance
                 */
                Sad.create = function create(properties) {
                    return new Sad(properties);
                };

                /**
                 * Encodes the specified Sad message. Does not implicitly {@link woe.twin.domain.Sad.verify|verify} messages.
                 * @function encode
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {woe.twin.domain.ISad} message Sad message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sad.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.entityId);
                    if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                        $root.woe.twin.Region.encode(message.region, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Sad message, length delimited. Does not implicitly {@link woe.twin.domain.Sad.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {woe.twin.domain.ISad} message Sad message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Sad.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Sad message from the specified reader or buffer.
                 * @function decode
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {woe.twin.domain.Sad} Sad
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sad.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.woe.twin.domain.Sad();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.entityId = reader.string();
                            break;
                        case 2:
                            message.region = $root.woe.twin.Region.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Sad message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {woe.twin.domain.Sad} Sad
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Sad.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Sad message.
                 * @function verify
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Sad.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        if (!$util.isString(message.entityId))
                            return "entityId: string expected";
                    if (message.region != null && message.hasOwnProperty("region")) {
                        var error = $root.woe.twin.Region.verify(message.region);
                        if (error)
                            return "region." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Sad message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {woe.twin.domain.Sad} Sad
                 */
                Sad.fromObject = function fromObject(object) {
                    if (object instanceof $root.woe.twin.domain.Sad)
                        return object;
                    var message = new $root.woe.twin.domain.Sad();
                    if (object.entityId != null)
                        message.entityId = String(object.entityId);
                    if (object.region != null) {
                        if (typeof object.region !== "object")
                            throw TypeError(".woe.twin.domain.Sad.region: object expected");
                        message.region = $root.woe.twin.Region.fromObject(object.region);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Sad message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof woe.twin.domain.Sad
                 * @static
                 * @param {woe.twin.domain.Sad} message Sad
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Sad.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.entityId = "";
                        object.region = null;
                    }
                    if (message.entityId != null && message.hasOwnProperty("entityId"))
                        object.entityId = message.entityId;
                    if (message.region != null && message.hasOwnProperty("region"))
                        object.region = $root.woe.twin.Region.toObject(message.region, options);
                    return object;
                };

                /**
                 * Converts this Sad to JSON.
                 * @function toJSON
                 * @memberof woe.twin.domain.Sad
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Sad.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Sad;
            })();

            return domain;
        })();

        return twin;
    })();

    return woe;
})();