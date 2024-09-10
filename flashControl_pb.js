// source: flashControl.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = window.jspb;
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_protobuf_empty_pb = google.protobuf.Empty; // Assuming it's already loaded from protobuf.js CDN
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.flashcontrol.CameraType', null, global);
goog.exportSymbol('proto.flashcontrol.FlashMode', null, global);
goog.exportSymbol('proto.flashcontrol.PhotoPathResponse', null, global);
goog.exportSymbol('proto.flashcontrol.PhotoRequest', null, global);
goog.exportSymbol('proto.flashcontrol.PhotoResponse', null, global);
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
proto.flashcontrol.PhotoPathResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flashcontrol.PhotoPathResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flashcontrol.PhotoPathResponse.displayName = 'proto.flashcontrol.PhotoPathResponse';
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
proto.flashcontrol.PhotoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flashcontrol.PhotoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flashcontrol.PhotoRequest.displayName = 'proto.flashcontrol.PhotoRequest';
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
proto.flashcontrol.PhotoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.flashcontrol.PhotoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.flashcontrol.PhotoResponse.displayName = 'proto.flashcontrol.PhotoResponse';
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
proto.flashcontrol.PhotoPathResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.flashcontrol.PhotoPathResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flashcontrol.PhotoPathResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flashcontrol.PhotoPathResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    filePath: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errorMsg: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.flashcontrol.PhotoPathResponse}
 */
proto.flashcontrol.PhotoPathResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flashcontrol.PhotoPathResponse;
  return proto.flashcontrol.PhotoPathResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flashcontrol.PhotoPathResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flashcontrol.PhotoPathResponse}
 */
proto.flashcontrol.PhotoPathResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilePath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMsg(value);
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
proto.flashcontrol.PhotoPathResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flashcontrol.PhotoPathResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flashcontrol.PhotoPathResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flashcontrol.PhotoPathResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilePath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrorMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string file_path = 1;
 * @return {string}
 */
proto.flashcontrol.PhotoPathResponse.prototype.getFilePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.flashcontrol.PhotoPathResponse} returns this
 */
proto.flashcontrol.PhotoPathResponse.prototype.setFilePath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error_msg = 2;
 * @return {string}
 */
proto.flashcontrol.PhotoPathResponse.prototype.getErrorMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flashcontrol.PhotoPathResponse} returns this
 */
proto.flashcontrol.PhotoPathResponse.prototype.setErrorMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.flashcontrol.PhotoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.flashcontrol.PhotoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flashcontrol.PhotoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flashcontrol.PhotoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    flashMode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cameraType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    imageWidth: jspb.Message.getFieldWithDefault(msg, 3, 0),
    imageHeight: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.flashcontrol.PhotoRequest}
 */
proto.flashcontrol.PhotoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flashcontrol.PhotoRequest;
  return proto.flashcontrol.PhotoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flashcontrol.PhotoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flashcontrol.PhotoRequest}
 */
proto.flashcontrol.PhotoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.flashcontrol.FlashMode} */ (reader.readEnum());
      msg.setFlashMode(value);
      break;
    case 2:
      var value = /** @type {!proto.flashcontrol.CameraType} */ (reader.readEnum());
      msg.setCameraType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImageWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImageHeight(value);
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
proto.flashcontrol.PhotoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flashcontrol.PhotoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flashcontrol.PhotoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flashcontrol.PhotoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlashMode();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCameraType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getImageWidth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getImageHeight();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional FlashMode flash_mode = 1;
 * @return {!proto.flashcontrol.FlashMode}
 */
proto.flashcontrol.PhotoRequest.prototype.getFlashMode = function() {
  return /** @type {!proto.flashcontrol.FlashMode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.flashcontrol.FlashMode} value
 * @return {!proto.flashcontrol.PhotoRequest} returns this
 */
proto.flashcontrol.PhotoRequest.prototype.setFlashMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional CameraType camera_type = 2;
 * @return {!proto.flashcontrol.CameraType}
 */
proto.flashcontrol.PhotoRequest.prototype.getCameraType = function() {
  return /** @type {!proto.flashcontrol.CameraType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.flashcontrol.CameraType} value
 * @return {!proto.flashcontrol.PhotoRequest} returns this
 */
proto.flashcontrol.PhotoRequest.prototype.setCameraType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional int32 image_width = 3;
 * @return {number}
 */
proto.flashcontrol.PhotoRequest.prototype.getImageWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.flashcontrol.PhotoRequest} returns this
 */
proto.flashcontrol.PhotoRequest.prototype.setImageWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 image_height = 4;
 * @return {number}
 */
proto.flashcontrol.PhotoRequest.prototype.getImageHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.flashcontrol.PhotoRequest} returns this
 */
proto.flashcontrol.PhotoRequest.prototype.setImageHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.flashcontrol.PhotoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.flashcontrol.PhotoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.flashcontrol.PhotoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flashcontrol.PhotoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageData: msg.getImageData_asB64(),
    filePath: jspb.Message.getFieldWithDefault(msg, 2, ""),
    imageFormat: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.flashcontrol.PhotoResponse}
 */
proto.flashcontrol.PhotoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.flashcontrol.PhotoResponse;
  return proto.flashcontrol.PhotoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.flashcontrol.PhotoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.flashcontrol.PhotoResponse}
 */
proto.flashcontrol.PhotoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setImageData(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilePath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageFormat(value);
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
proto.flashcontrol.PhotoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.flashcontrol.PhotoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.flashcontrol.PhotoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.flashcontrol.PhotoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImageData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFilePath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImageFormat();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bytes image_data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.flashcontrol.PhotoResponse.prototype.getImageData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes image_data = 1;
 * This is a type-conversion wrapper around `getImageData()`
 * @return {string}
 */
proto.flashcontrol.PhotoResponse.prototype.getImageData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getImageData()));
};


/**
 * optional bytes image_data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getImageData()`
 * @return {!Uint8Array}
 */
proto.flashcontrol.PhotoResponse.prototype.getImageData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getImageData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.flashcontrol.PhotoResponse} returns this
 */
proto.flashcontrol.PhotoResponse.prototype.setImageData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string file_path = 2;
 * @return {string}
 */
proto.flashcontrol.PhotoResponse.prototype.getFilePath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.flashcontrol.PhotoResponse} returns this
 */
proto.flashcontrol.PhotoResponse.prototype.setFilePath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image_format = 3;
 * @return {string}
 */
proto.flashcontrol.PhotoResponse.prototype.getImageFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.flashcontrol.PhotoResponse} returns this
 */
proto.flashcontrol.PhotoResponse.prototype.setImageFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.flashcontrol.FlashMode = {
  AUTO: 0,
  ON: 1,
  OFF: 2
};

/**
 * @enum {number}
 */
proto.flashcontrol.CameraType = {
  BACK: 0,
  FRONT: 1
};

goog.object.extend(exports, proto.flashcontrol);
