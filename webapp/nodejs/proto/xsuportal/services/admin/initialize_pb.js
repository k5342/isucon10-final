// source: xsuportal/services/admin/initialize.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var xsuportal_resources_contest_pb = require('../../../xsuportal/resources/contest_pb.js');
goog.object.extend(proto, xsuportal_resources_contest_pb);
goog.exportSymbol('proto.xsuportal.proto.services.admin.InitializeRequest', null, global);
goog.exportSymbol('proto.xsuportal.proto.services.admin.InitializeResponse', null, global);
goog.exportSymbol('proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xsuportal.proto.services.admin.InitializeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.services.admin.InitializeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.admin.InitializeRequest.displayName = 'proto.xsuportal.proto.services.admin.InitializeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xsuportal.proto.services.admin.InitializeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.services.admin.InitializeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.admin.InitializeResponse.displayName = 'proto.xsuportal.proto.services.admin.InitializeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.displayName = 'proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.services.admin.InitializeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.admin.InitializeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.admin.InitializeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.admin.InitializeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    contest: (f = msg.getContest()) && xsuportal_resources_contest_pb.Contest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xsuportal.proto.services.admin.InitializeRequest}
 */
proto.xsuportal.proto.services.admin.InitializeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.admin.InitializeRequest;
  return proto.xsuportal.proto.services.admin.InitializeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.admin.InitializeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.admin.InitializeRequest}
 */
proto.xsuportal.proto.services.admin.InitializeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new xsuportal_resources_contest_pb.Contest;
      reader.readMessage(value,xsuportal_resources_contest_pb.Contest.deserializeBinaryFromReader);
      msg.setContest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xsuportal.proto.services.admin.InitializeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.admin.InitializeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.admin.InitializeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.admin.InitializeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      xsuportal_resources_contest_pb.Contest.serializeBinaryToWriter
    );
  }
};


/**
 * optional xsuportal.proto.resources.Contest contest = 1;
 * @return {?proto.xsuportal.proto.resources.Contest}
 */
proto.xsuportal.proto.services.admin.InitializeRequest.prototype.getContest = function() {
  return /** @type{?proto.xsuportal.proto.resources.Contest} */ (
    jspb.Message.getWrapperField(this, xsuportal_resources_contest_pb.Contest, 1));
};


/**
 * @param {?proto.xsuportal.proto.resources.Contest|undefined} value
 * @return {!proto.xsuportal.proto.services.admin.InitializeRequest} returns this
*/
proto.xsuportal.proto.services.admin.InitializeRequest.prototype.setContest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.services.admin.InitializeRequest} returns this
 */
proto.xsuportal.proto.services.admin.InitializeRequest.prototype.clearContest = function() {
  return this.setContest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.services.admin.InitializeRequest.prototype.hasContest = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.admin.InitializeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.admin.InitializeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.admin.InitializeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    language: jspb.Message.getFieldWithDefault(msg, 1, ""),
    benchmarkServer: (f = msg.getBenchmarkServer()) && proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.admin.InitializeResponse;
  return proto.xsuportal.proto.services.admin.InitializeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.admin.InitializeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = new proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer;
      reader.readMessage(value,proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.deserializeBinaryFromReader);
      msg.setBenchmarkServer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.admin.InitializeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.admin.InitializeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.admin.InitializeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBenchmarkServer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer;
  return proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer} returns this
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 port = 2;
 * @return {number}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer} returns this
 */
proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse} returns this
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional BenchmarkServer benchmark_server = 2;
 * @return {?proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.getBenchmarkServer = function() {
  return /** @type{?proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer} */ (
    jspb.Message.getWrapperField(this, proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer, 2));
};


/**
 * @param {?proto.xsuportal.proto.services.admin.InitializeResponse.BenchmarkServer|undefined} value
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse} returns this
*/
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.setBenchmarkServer = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.services.admin.InitializeResponse} returns this
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.clearBenchmarkServer = function() {
  return this.setBenchmarkServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.services.admin.InitializeResponse.prototype.hasBenchmarkServer = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.xsuportal.proto.services.admin);
