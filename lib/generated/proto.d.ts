import * as $protobuf from "protobufjs";
/** Namespace woe. */
export namespace woe {

    /** Namespace twin. */
    namespace twin {

        /** Properties of a Region. */
        interface IRegion {

            /** Region zoom */
            zoom?: (number|null);

            /** Region topLeftLat */
            topLeftLat?: (number|null);

            /** Region topLeftLng */
            topLeftLng?: (number|null);

            /** Region botRightLat */
            botRightLat?: (number|null);

            /** Region botRightLng */
            botRightLng?: (number|null);
        }

        /** Represents a Region. */
        class Region implements IRegion {

            /**
             * Constructs a new Region.
             * @param [properties] Properties to set
             */
            constructor(properties?: woe.twin.IRegion);

            /** Region zoom. */
            public zoom: number;

            /** Region topLeftLat. */
            public topLeftLat: number;

            /** Region topLeftLng. */
            public topLeftLng: number;

            /** Region botRightLat. */
            public botRightLat: number;

            /** Region botRightLng. */
            public botRightLng: number;

            /**
             * Creates a new Region instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Region instance
             */
            public static create(properties?: woe.twin.IRegion): woe.twin.Region;

            /**
             * Encodes the specified Region message. Does not implicitly {@link woe.twin.Region.verify|verify} messages.
             * @param message Region message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: woe.twin.IRegion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Region message, length delimited. Does not implicitly {@link woe.twin.Region.verify|verify} messages.
             * @param message Region message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: woe.twin.IRegion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Region message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Region
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.Region;

            /**
             * Decodes a Region message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Region
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.Region;

            /**
             * Verifies a Region message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Region message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Region
             */
            public static fromObject(object: { [k: string]: any }): woe.twin.Region;

            /**
             * Creates a plain object from a Region message. Also converts values to other types if specified.
             * @param message Region
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: woe.twin.Region, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Region to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TelemetryRequest. */
        interface ITelemetryRequest {

            /** TelemetryRequest entityId */
            entityId?: (string|null);

            /** TelemetryRequest region */
            region?: (woe.twin.IRegion|null);

            /** TelemetryRequest action */
            action?: (string|null);

            /** TelemetryRequest startTimeNs */
            startTimeNs?: (number|Long|null);
        }

        /** Represents a TelemetryRequest. */
        class TelemetryRequest implements ITelemetryRequest {

            /**
             * Constructs a new TelemetryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: woe.twin.ITelemetryRequest);

            /** TelemetryRequest entityId. */
            public entityId: string;

            /** TelemetryRequest region. */
            public region?: (woe.twin.IRegion|null);

            /** TelemetryRequest action. */
            public action: string;

            /** TelemetryRequest startTimeNs. */
            public startTimeNs: (number|Long);

            /**
             * Creates a new TelemetryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TelemetryRequest instance
             */
            public static create(properties?: woe.twin.ITelemetryRequest): woe.twin.TelemetryRequest;

            /**
             * Encodes the specified TelemetryRequest message. Does not implicitly {@link woe.twin.TelemetryRequest.verify|verify} messages.
             * @param message TelemetryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: woe.twin.ITelemetryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TelemetryRequest message, length delimited. Does not implicitly {@link woe.twin.TelemetryRequest.verify|verify} messages.
             * @param message TelemetryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: woe.twin.ITelemetryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TelemetryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TelemetryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.TelemetryRequest;

            /**
             * Decodes a TelemetryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TelemetryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.TelemetryRequest;

            /**
             * Verifies a TelemetryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TelemetryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TelemetryRequest
             */
            public static fromObject(object: { [k: string]: any }): woe.twin.TelemetryRequest;

            /**
             * Creates a plain object from a TelemetryRequest message. Also converts values to other types if specified.
             * @param message TelemetryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: woe.twin.TelemetryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TelemetryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TelemetryResponse. */
        interface ITelemetryResponse {

            /** TelemetryResponse message */
            message?: (string|null);

            /** TelemetryResponse httpStatusCode */
            httpStatusCode?: (number|null);

            /** TelemetryResponse telemetryRequest */
            telemetryRequest?: (woe.twin.ITelemetryRequest|null);
        }

        /** Represents a TelemetryResponse. */
        class TelemetryResponse implements ITelemetryResponse {

            /**
             * Constructs a new TelemetryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: woe.twin.ITelemetryResponse);

            /** TelemetryResponse message. */
            public message: string;

            /** TelemetryResponse httpStatusCode. */
            public httpStatusCode: number;

            /** TelemetryResponse telemetryRequest. */
            public telemetryRequest?: (woe.twin.ITelemetryRequest|null);

            /**
             * Creates a new TelemetryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TelemetryResponse instance
             */
            public static create(properties?: woe.twin.ITelemetryResponse): woe.twin.TelemetryResponse;

            /**
             * Encodes the specified TelemetryResponse message. Does not implicitly {@link woe.twin.TelemetryResponse.verify|verify} messages.
             * @param message TelemetryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: woe.twin.ITelemetryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TelemetryResponse message, length delimited. Does not implicitly {@link woe.twin.TelemetryResponse.verify|verify} messages.
             * @param message TelemetryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: woe.twin.ITelemetryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TelemetryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TelemetryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.TelemetryResponse;

            /**
             * Decodes a TelemetryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TelemetryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.TelemetryResponse;

            /**
             * Verifies a TelemetryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TelemetryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TelemetryResponse
             */
            public static fromObject(object: { [k: string]: any }): woe.twin.TelemetryResponse;

            /**
             * Creates a plain object from a TelemetryResponse message. Also converts values to other types if specified.
             * @param message TelemetryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: woe.twin.TelemetryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TelemetryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents an IotDevice */
        class IotDevice extends $protobuf.rpc.Service {

            /**
             * Constructs a new IotDevice service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new IotDevice service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IotDevice;

            /**
             * Calls Telemetry.
             * @param request TelemetryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TelemetryResponse
             */
            public telemetry(request: woe.twin.ITelemetryRequest, callback: woe.twin.IotDevice.TelemetryCallback): void;

            /**
             * Calls Telemetry.
             * @param request TelemetryRequest message or plain object
             * @returns Promise
             */
            public telemetry(request: woe.twin.ITelemetryRequest): Promise<woe.twin.TelemetryResponse>;
        }

        namespace IotDevice {

            /**
             * Callback as used by {@link woe.twin.IotDevice#telemetry}.
             * @param error Error, if any
             * @param [response] TelemetryResponse
             */
            type TelemetryCallback = (error: (Error|null), response?: woe.twin.TelemetryResponse) => void;
        }

        /** Namespace domain. */
        namespace domain {

            /** Properties of a State. */
            interface IState {

                /** State entityId */
                entityId?: (string|null);

                /** State region */
                region?: (woe.twin.IRegion|null);

                /** State happy */
                happy?: (boolean|null);
            }

            /** Represents a State. */
            class State implements IState {

                /**
                 * Constructs a new State.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: woe.twin.domain.IState);

                /** State entityId. */
                public entityId: string;

                /** State region. */
                public region?: (woe.twin.IRegion|null);

                /** State happy. */
                public happy: boolean;

                /**
                 * Creates a new State instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns State instance
                 */
                public static create(properties?: woe.twin.domain.IState): woe.twin.domain.State;

                /**
                 * Encodes the specified State message. Does not implicitly {@link woe.twin.domain.State.verify|verify} messages.
                 * @param message State message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: woe.twin.domain.IState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified State message, length delimited. Does not implicitly {@link woe.twin.domain.State.verify|verify} messages.
                 * @param message State message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: woe.twin.domain.IState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a State message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.domain.State;

                /**
                 * Decodes a State message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.domain.State;

                /**
                 * Verifies a State message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a State message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns State
                 */
                public static fromObject(object: { [k: string]: any }): woe.twin.domain.State;

                /**
                 * Creates a plain object from a State message. Also converts values to other types if specified.
                 * @param message State
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: woe.twin.domain.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this State to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Created. */
            interface ICreated {

                /** Created entityId */
                entityId?: (string|null);

                /** Created region */
                region?: (woe.twin.IRegion|null);
            }

            /** Represents a Created. */
            class Created implements ICreated {

                /**
                 * Constructs a new Created.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: woe.twin.domain.ICreated);

                /** Created entityId. */
                public entityId: string;

                /** Created region. */
                public region?: (woe.twin.IRegion|null);

                /**
                 * Creates a new Created instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Created instance
                 */
                public static create(properties?: woe.twin.domain.ICreated): woe.twin.domain.Created;

                /**
                 * Encodes the specified Created message. Does not implicitly {@link woe.twin.domain.Created.verify|verify} messages.
                 * @param message Created message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: woe.twin.domain.ICreated, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Created message, length delimited. Does not implicitly {@link woe.twin.domain.Created.verify|verify} messages.
                 * @param message Created message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: woe.twin.domain.ICreated, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Created message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Created
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.domain.Created;

                /**
                 * Decodes a Created message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Created
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.domain.Created;

                /**
                 * Verifies a Created message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Created message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Created
                 */
                public static fromObject(object: { [k: string]: any }): woe.twin.domain.Created;

                /**
                 * Creates a plain object from a Created message. Also converts values to other types if specified.
                 * @param message Created
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: woe.twin.domain.Created, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Created to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Deleted. */
            interface IDeleted {

                /** Deleted entityId */
                entityId?: (string|null);

                /** Deleted region */
                region?: (woe.twin.IRegion|null);
            }

            /** Represents a Deleted. */
            class Deleted implements IDeleted {

                /**
                 * Constructs a new Deleted.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: woe.twin.domain.IDeleted);

                /** Deleted entityId. */
                public entityId: string;

                /** Deleted region. */
                public region?: (woe.twin.IRegion|null);

                /**
                 * Creates a new Deleted instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Deleted instance
                 */
                public static create(properties?: woe.twin.domain.IDeleted): woe.twin.domain.Deleted;

                /**
                 * Encodes the specified Deleted message. Does not implicitly {@link woe.twin.domain.Deleted.verify|verify} messages.
                 * @param message Deleted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: woe.twin.domain.IDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Deleted message, length delimited. Does not implicitly {@link woe.twin.domain.Deleted.verify|verify} messages.
                 * @param message Deleted message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: woe.twin.domain.IDeleted, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Deleted message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Deleted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.domain.Deleted;

                /**
                 * Decodes a Deleted message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Deleted
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.domain.Deleted;

                /**
                 * Verifies a Deleted message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Deleted message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Deleted
                 */
                public static fromObject(object: { [k: string]: any }): woe.twin.domain.Deleted;

                /**
                 * Creates a plain object from a Deleted message. Also converts values to other types if specified.
                 * @param message Deleted
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: woe.twin.domain.Deleted, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Deleted to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Happy. */
            interface IHappy {

                /** Happy entityId */
                entityId?: (string|null);

                /** Happy region */
                region?: (woe.twin.IRegion|null);
            }

            /** Represents a Happy. */
            class Happy implements IHappy {

                /**
                 * Constructs a new Happy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: woe.twin.domain.IHappy);

                /** Happy entityId. */
                public entityId: string;

                /** Happy region. */
                public region?: (woe.twin.IRegion|null);

                /**
                 * Creates a new Happy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Happy instance
                 */
                public static create(properties?: woe.twin.domain.IHappy): woe.twin.domain.Happy;

                /**
                 * Encodes the specified Happy message. Does not implicitly {@link woe.twin.domain.Happy.verify|verify} messages.
                 * @param message Happy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: woe.twin.domain.IHappy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Happy message, length delimited. Does not implicitly {@link woe.twin.domain.Happy.verify|verify} messages.
                 * @param message Happy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: woe.twin.domain.IHappy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Happy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Happy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.domain.Happy;

                /**
                 * Decodes a Happy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Happy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.domain.Happy;

                /**
                 * Verifies a Happy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Happy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Happy
                 */
                public static fromObject(object: { [k: string]: any }): woe.twin.domain.Happy;

                /**
                 * Creates a plain object from a Happy message. Also converts values to other types if specified.
                 * @param message Happy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: woe.twin.domain.Happy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Happy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Sad. */
            interface ISad {

                /** Sad entityId */
                entityId?: (string|null);

                /** Sad region */
                region?: (woe.twin.IRegion|null);
            }

            /** Represents a Sad. */
            class Sad implements ISad {

                /**
                 * Constructs a new Sad.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: woe.twin.domain.ISad);

                /** Sad entityId. */
                public entityId: string;

                /** Sad region. */
                public region?: (woe.twin.IRegion|null);

                /**
                 * Creates a new Sad instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Sad instance
                 */
                public static create(properties?: woe.twin.domain.ISad): woe.twin.domain.Sad;

                /**
                 * Encodes the specified Sad message. Does not implicitly {@link woe.twin.domain.Sad.verify|verify} messages.
                 * @param message Sad message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: woe.twin.domain.ISad, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Sad message, length delimited. Does not implicitly {@link woe.twin.domain.Sad.verify|verify} messages.
                 * @param message Sad message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: woe.twin.domain.ISad, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Sad message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Sad
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): woe.twin.domain.Sad;

                /**
                 * Decodes a Sad message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Sad
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): woe.twin.domain.Sad;

                /**
                 * Verifies a Sad message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Sad message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Sad
                 */
                public static fromObject(object: { [k: string]: any }): woe.twin.domain.Sad;

                /**
                 * Creates a plain object from a Sad message. Also converts values to other types if specified.
                 * @param message Sad
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: woe.twin.domain.Sad, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Sad to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
