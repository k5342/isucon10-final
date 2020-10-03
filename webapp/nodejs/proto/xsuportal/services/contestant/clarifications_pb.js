// source: xsuportal/services/contestant/clarifications.proto
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

var xsuportal_resources_clarification_pb = require('../../../xsuportal/resources/clarification_pb.js');
goog.object.extend(proto, xsuportal_resources_clarification_pb);
goog.exportSymbol('proto.xsuportal.proto.services.contestant.ListClarificationsRequest', null, global);
goog.exportSymbol('proto.xsuportal.proto.services.contestant.ListClarificationsResponse', null, global);
goog.exportSymbol('proto.xsuportal.proto.services.contestant.RequestClarificationRequest', null, global);
goog.exportSymbol('proto.xsuportal.proto.services.contestant.RequestClarificationResponse', null, global);
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
proto.xsuportal.proto.services.contestant.ListClarificationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.services.contestant.ListClarificationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.contestant.ListClarificationsRequest.displayName = 'proto.xsuportal.proto.services.contestant.ListClarificationsRequest';
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
proto.xsuportal.proto.services.contestant.ListClarificationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.xsuportal.proto.services.contestant.ListClarificationsResponse.repeatedFields_, null);
};
goog.inherits(proto.xsuportal.proto.services.contestant.ListClarificationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.contestant.ListClarificationsResponse.displayName = 'proto.xsuportal.proto.services.contestant.ListClarificationsResponse';
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
proto.xsuportal.proto.services.contestant.RequestClarificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.services.contestant.RequestClarificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.contestant.RequestClarificationRequest.displayName = 'proto.xsuportal.proto.services.contestant.RequestClarificationRequest';
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
proto.xsuportal.proto.services.contestant.RequestClarificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.xsuportal.proto.services.contestant.RequestClarificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.xsuportal.proto.services.contestant.RequestClarificationResponse.displayName = 'proto.xsuportal.proto.services.contestant.RequestClarificationResponse';
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
proto.xsuportal.proto.services.contestant.ListClarificationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.contestant.ListClarificationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.contestant.ListClarificationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.ListClarificationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.xsuportal.proto.services.contestant.ListClarificationsRequest}
 */
proto.xsuportal.proto.services.contestant.ListClarificationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.contestant.ListClarificationsRequest;
  return proto.xsuportal.proto.services.contestant.ListClarificationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.contestant.ListClarificationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.contestant.ListClarificationsRequest}
 */
proto.xsuportal.proto.services.contestant.ListClarificationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.xsuportal.proto.services.contestant.ListClarificationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.contestant.ListClarificationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.contestant.ListClarificationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.ListClarificationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.repeatedFields_ = [1];



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
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.contestant.ListClarificationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clarificationsList: jspb.Message.toObjectList(msg.getClarificationsList(),
    xsuportal_resources_clarification_pb.Clarification.toObject, includeInstance)
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
 * @return {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse}
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.contestant.ListClarificationsResponse;
  return proto.xsuportal.proto.services.contestant.ListClarificationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse}
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new xsuportal_resources_clarification_pb.Clarification;
      reader.readMessage(value,xsuportal_resources_clarification_pb.Clarification.deserializeBinaryFromReader);
      msg.addClarifications(value);
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
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.contestant.ListClarificationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClarificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      xsuportal_resources_clarification_pb.Clarification.serializeBinaryToWriter
    );
  }
};


/**
 * repeated xsuportal.proto.resources.Clarification clarifications = 1;
 * @return {!Array<!proto.xsuportal.proto.resources.Clarification>}
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.prototype.getClarificationsList = function() {
  return /** @type{!Array<!proto.xsuportal.proto.resources.Clarification>} */ (
    jspb.Message.getRepeatedWrapperField(this, xsuportal_resources_clarification_pb.Clarification, 1));
};


/**
 * @param {!Array<!proto.xsuportal.proto.resources.Clarification>} value
 * @return {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse} returns this
*/
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.prototype.setClarificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.xsuportal.proto.resources.Clarification=} opt_value
 * @param {number=} opt_index
 * @return {!proto.xsuportal.proto.resources.Clarification}
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.prototype.addClarifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.xsuportal.proto.resources.Clarification, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.xsuportal.proto.services.contestant.ListClarificationsResponse} returns this
 */
proto.xsuportal.proto.services.contestant.ListClarificationsResponse.prototype.clearClarificationsList = function() {
  return this.setClarificationsList([]);
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
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.contestant.RequestClarificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.contestant.RequestClarificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    question: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationRequest}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.contestant.RequestClarificationRequest;
  return proto.xsuportal.proto.services.contestant.RequestClarificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.contestant.RequestClarificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationRequest}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestion(value);
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
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.contestant.RequestClarificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.contestant.RequestClarificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuestion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string question = 1;
 * @return {string}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationRequest} returns this
 */
proto.xsuportal.proto.services.contestant.RequestClarificationRequest.prototype.setQuestion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.xsuportal.proto.services.contestant.RequestClarificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clarification: (f = msg.getClarification()) && xsuportal_resources_clarification_pb.Clarification.toObject(includeInstance, f)
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
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.xsuportal.proto.services.contestant.RequestClarificationResponse;
  return proto.xsuportal.proto.services.contestant.RequestClarificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new xsuportal_resources_clarification_pb.Clarification;
      reader.readMessage(value,xsuportal_resources_clarification_pb.Clarification.deserializeBinaryFromReader);
      msg.setClarification(value);
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
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.xsuportal.proto.services.contestant.RequestClarificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClarification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      xsuportal_resources_clarification_pb.Clarification.serializeBinaryToWriter
    );
  }
};


/**
 * optional xsuportal.proto.resources.Clarification clarification = 1;
 * @return {?proto.xsuportal.proto.resources.Clarification}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.prototype.getClarification = function() {
  return /** @type{?proto.xsuportal.proto.resources.Clarification} */ (
    jspb.Message.getWrapperField(this, xsuportal_resources_clarification_pb.Clarification, 1));
};


/**
 * @param {?proto.xsuportal.proto.resources.Clarification|undefined} value
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse} returns this
*/
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.prototype.setClarification = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.xsuportal.proto.services.contestant.RequestClarificationResponse} returns this
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.prototype.clearClarification = function() {
  return this.setClarification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.xsuportal.proto.services.contestant.RequestClarificationResponse.prototype.hasClarification = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.xsuportal.proto.services.contestant);
