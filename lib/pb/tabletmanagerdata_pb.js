/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var query_pb = require('./query_pb.js');
var topodata_pb = require('./topodata_pb.js');
var replicationdata_pb = require('./replicationdata_pb.js');
var logutil_pb = require('./logutil_pb.js');
goog.exportSymbol('proto.tabletmanagerdata.ApplySchemaRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ApplySchemaResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.BackupRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.BackupResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.BlpPosition', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ChangeTypeRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ChangeTypeResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.DbPermission', null, global);
goog.exportSymbol('proto.tabletmanagerdata.DemoteMasterRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.DemoteMasterResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ExecuteFetchAsAppRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ExecuteFetchAsAppResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ExecuteFetchAsDbaRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ExecuteFetchAsDbaResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ExecuteHookRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ExecuteHookResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.GetPermissionsRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.GetPermissionsResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.GetSchemaRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.GetSchemaResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.GetSlavesRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.GetSlavesResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.IgnoreHealthErrorRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.IgnoreHealthErrorResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.InitMasterRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.InitMasterResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.InitSlaveRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.InitSlaveResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.MasterPositionRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.MasterPositionResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.Permissions', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PingRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PingResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PopulateReparentJournalRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PopulateReparentJournalResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PreflightSchemaRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PreflightSchemaResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PromoteSlaveRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PromoteSlaveResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.RefreshStateRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.RefreshStateResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ReloadSchemaRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ReloadSchemaResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ResetReplicationRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.ResetReplicationResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.RunBlpUntilRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.RunBlpUntilResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.RunHealthCheckRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.RunHealthCheckResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SchemaChangeResult', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SchemaDefinition', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SetMasterRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SetMasterResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SetReadOnlyRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SetReadOnlyResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SetReadWriteRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SetReadWriteResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SlaveStatusRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SlaveStatusResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SlaveWasPromotedRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SlaveWasPromotedResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SlaveWasRestartedRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SlaveWasRestartedResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SleepRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.SleepResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StartBlpRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StartBlpResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StartSlaveRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StartSlaveResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopBlpRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopBlpResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopReplicationAndGetStatusRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopReplicationAndGetStatusResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopSlaveMinimumRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopSlaveMinimumResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopSlaveRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.StopSlaveResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.TableDefinition', null, global);
goog.exportSymbol('proto.tabletmanagerdata.TabletExternallyElectedRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.TabletExternallyElectedResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.TabletExternallyReparentedRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.TabletExternallyReparentedResponse', null, global);
goog.exportSymbol('proto.tabletmanagerdata.UserPermission', null, global);
goog.exportSymbol('proto.tabletmanagerdata.WaitBlpPositionRequest', null, global);
goog.exportSymbol('proto.tabletmanagerdata.WaitBlpPositionResponse', null, global);

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
proto.tabletmanagerdata.TableDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.TableDefinition.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.TableDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.TableDefinition.displayName = 'proto.tabletmanagerdata.TableDefinition';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.TableDefinition.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.TableDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.TableDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.TableDefinition} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.TableDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    schema: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnsList: jspb.Message.getField(msg, 3),
    primaryKeyColumnsList: jspb.Message.getField(msg, 4),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dataLength: jspb.Message.getFieldWithDefault(msg, 6, 0),
    rowCount: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.tabletmanagerdata.TableDefinition}
 */
proto.tabletmanagerdata.TableDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.TableDefinition;
  return proto.tabletmanagerdata.TableDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.TableDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.TableDefinition}
 */
proto.tabletmanagerdata.TableDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSchema(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPrimaryKeyColumns(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDataLength(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRowCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.TableDefinition} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TableDefinition.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.TableDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TableDefinition.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getSchema();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = this.getPrimaryKeyColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = this.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getDataLength();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = this.getRowCount();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.TableDefinition.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string schema = 2;
 * @return {string}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.TableDefinition.prototype.setSchema = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string columns = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getColumnsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.TableDefinition.prototype.setColumnsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.TableDefinition.prototype.addColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tabletmanagerdata.TableDefinition.prototype.clearColumnsList = function() {
  this.setColumnsList([]);
};


/**
 * repeated string primary_key_columns = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getPrimaryKeyColumnsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 4));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.TableDefinition.prototype.setPrimaryKeyColumnsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.TableDefinition.prototype.addPrimaryKeyColumns = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.tabletmanagerdata.TableDefinition.prototype.clearPrimaryKeyColumnsList = function() {
  this.setPrimaryKeyColumnsList([]);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.TableDefinition.prototype.setType = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 data_length = 6;
 * @return {number}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getDataLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.TableDefinition.prototype.setDataLength = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint64 row_count = 7;
 * @return {number}
 */
proto.tabletmanagerdata.TableDefinition.prototype.getRowCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.TableDefinition.prototype.setRowCount = function(value) {
  jspb.Message.setField(this, 7, value);
};



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
proto.tabletmanagerdata.SchemaDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.SchemaDefinition.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.SchemaDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SchemaDefinition.displayName = 'proto.tabletmanagerdata.SchemaDefinition';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.SchemaDefinition.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SchemaDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SchemaDefinition} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SchemaDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    databaseSchema: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tableDefinitionsList: jspb.Message.toObjectList(msg.getTableDefinitionsList(),
    proto.tabletmanagerdata.TableDefinition.toObject, includeInstance),
    version: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.SchemaDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SchemaDefinition;
  return proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SchemaDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatabaseSchema(value);
      break;
    case 2:
      var value = new proto.tabletmanagerdata.TableDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.TableDefinition.deserializeBinaryFromReader);
      msg.addTableDefinitions(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SchemaDefinition} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDatabaseSchema();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTableDefinitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tabletmanagerdata.TableDefinition.serializeBinaryToWriter
    );
  }
  f = this.getVersion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string database_schema = 1;
 * @return {string}
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.getDatabaseSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.SchemaDefinition.prototype.setDatabaseSchema = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated TableDefinition table_definitions = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tabletmanagerdata.TableDefinition>}
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.getTableDefinitionsList = function() {
  return /** @type{!Array.<!proto.tabletmanagerdata.TableDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tabletmanagerdata.TableDefinition, 2));
};


/** @param {!Array.<!proto.tabletmanagerdata.TableDefinition>} value */
proto.tabletmanagerdata.SchemaDefinition.prototype.setTableDefinitionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tabletmanagerdata.TableDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tabletmanagerdata.TableDefinition}
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.addTableDefinitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tabletmanagerdata.TableDefinition, opt_index);
};


proto.tabletmanagerdata.SchemaDefinition.prototype.clearTableDefinitionsList = function() {
  this.setTableDefinitionsList([]);
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.tabletmanagerdata.SchemaDefinition.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.SchemaDefinition.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.tabletmanagerdata.SchemaChangeResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SchemaChangeResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SchemaChangeResult.displayName = 'proto.tabletmanagerdata.SchemaChangeResult';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SchemaChangeResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SchemaChangeResult} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SchemaChangeResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    beforeSchema: (f = msg.getBeforeSchema()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f),
    afterSchema: (f = msg.getAfterSchema()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.SchemaChangeResult}
 */
proto.tabletmanagerdata.SchemaChangeResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SchemaChangeResult;
  return proto.tabletmanagerdata.SchemaChangeResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SchemaChangeResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SchemaChangeResult}
 */
proto.tabletmanagerdata.SchemaChangeResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setBeforeSchema(value);
      break;
    case 2:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setAfterSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SchemaChangeResult} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SchemaChangeResult.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBeforeSchema();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
  f = this.getAfterSchema();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional SchemaDefinition before_schema = 1;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.getBeforeSchema = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 1));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.SchemaChangeResult.prototype.setBeforeSchema = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.SchemaChangeResult.prototype.clearBeforeSchema = function() {
  this.setBeforeSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.hasBeforeSchema = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SchemaDefinition after_schema = 2;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.getAfterSchema = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 2));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.SchemaChangeResult.prototype.setAfterSchema = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tabletmanagerdata.SchemaChangeResult.prototype.clearAfterSchema = function() {
  this.setAfterSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.SchemaChangeResult.prototype.hasAfterSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.tabletmanagerdata.UserPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.UserPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.UserPermission.displayName = 'proto.tabletmanagerdata.UserPermission';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.UserPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.UserPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.UserPermission} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.UserPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: jspb.Message.getFieldWithDefault(msg, 2, ""),
    passwordChecksum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    privilegesMap: (f = msg.getPrivilegesMap()) ? f.toArray() : []
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
 * @return {!proto.tabletmanagerdata.UserPermission}
 */
proto.tabletmanagerdata.UserPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.UserPermission;
  return proto.tabletmanagerdata.UserPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.UserPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.UserPermission}
 */
proto.tabletmanagerdata.UserPermission.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPasswordChecksum(value);
      break;
    case 4:
      var value = msg.getPrivilegesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.UserPermission} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.UserPermission.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.UserPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.UserPermission.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getUser();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getPasswordChecksum();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = this.getPrivilegesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.tabletmanagerdata.UserPermission.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.UserPermission.prototype.setHost = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string user = 2;
 * @return {string}
 */
proto.tabletmanagerdata.UserPermission.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.UserPermission.prototype.setUser = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 password_checksum = 3;
 * @return {number}
 */
proto.tabletmanagerdata.UserPermission.prototype.getPasswordChecksum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.UserPermission.prototype.setPasswordChecksum = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * map<string, string> privileges = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.tabletmanagerdata.UserPermission.prototype.getPrivilegesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.tabletmanagerdata.UserPermission.prototype.clearPrivilegesMap = function() {
  this.getPrivilegesMap().clear();
};



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
proto.tabletmanagerdata.DbPermission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.DbPermission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.DbPermission.displayName = 'proto.tabletmanagerdata.DbPermission';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.DbPermission.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.DbPermission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.DbPermission} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.DbPermission.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    db: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: jspb.Message.getFieldWithDefault(msg, 3, ""),
    privilegesMap: (f = msg.getPrivilegesMap()) ? f.toArray() : []
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
 * @return {!proto.tabletmanagerdata.DbPermission}
 */
proto.tabletmanagerdata.DbPermission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.DbPermission;
  return proto.tabletmanagerdata.DbPermission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.DbPermission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.DbPermission}
 */
proto.tabletmanagerdata.DbPermission.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setDb(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 4:
      var value = msg.getPrivilegesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.DbPermission} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.DbPermission.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.DbPermission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.DbPermission.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getDb();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getUser();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPrivilegesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.tabletmanagerdata.DbPermission.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.DbPermission.prototype.setHost = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string db = 2;
 * @return {string}
 */
proto.tabletmanagerdata.DbPermission.prototype.getDb = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.DbPermission.prototype.setDb = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string user = 3;
 * @return {string}
 */
proto.tabletmanagerdata.DbPermission.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.DbPermission.prototype.setUser = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * map<string, string> privileges = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.tabletmanagerdata.DbPermission.prototype.getPrivilegesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


proto.tabletmanagerdata.DbPermission.prototype.clearPrivilegesMap = function() {
  this.getPrivilegesMap().clear();
};



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
proto.tabletmanagerdata.Permissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.Permissions.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.Permissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.Permissions.displayName = 'proto.tabletmanagerdata.Permissions';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.Permissions.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.Permissions.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.Permissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.Permissions} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.Permissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    userPermissionsList: jspb.Message.toObjectList(msg.getUserPermissionsList(),
    proto.tabletmanagerdata.UserPermission.toObject, includeInstance),
    dbPermissionsList: jspb.Message.toObjectList(msg.getDbPermissionsList(),
    proto.tabletmanagerdata.DbPermission.toObject, includeInstance)
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
 * @return {!proto.tabletmanagerdata.Permissions}
 */
proto.tabletmanagerdata.Permissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.Permissions;
  return proto.tabletmanagerdata.Permissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.Permissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.Permissions}
 */
proto.tabletmanagerdata.Permissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.UserPermission;
      reader.readMessage(value,proto.tabletmanagerdata.UserPermission.deserializeBinaryFromReader);
      msg.addUserPermissions(value);
      break;
    case 2:
      var value = new proto.tabletmanagerdata.DbPermission;
      reader.readMessage(value,proto.tabletmanagerdata.DbPermission.deserializeBinaryFromReader);
      msg.addDbPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.Permissions} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.Permissions.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.Permissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.Permissions.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUserPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tabletmanagerdata.UserPermission.serializeBinaryToWriter
    );
  }
  f = this.getDbPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.tabletmanagerdata.DbPermission.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UserPermission user_permissions = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tabletmanagerdata.UserPermission>}
 */
proto.tabletmanagerdata.Permissions.prototype.getUserPermissionsList = function() {
  return /** @type{!Array.<!proto.tabletmanagerdata.UserPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tabletmanagerdata.UserPermission, 1));
};


/** @param {!Array.<!proto.tabletmanagerdata.UserPermission>} value */
proto.tabletmanagerdata.Permissions.prototype.setUserPermissionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tabletmanagerdata.UserPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tabletmanagerdata.UserPermission}
 */
proto.tabletmanagerdata.Permissions.prototype.addUserPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tabletmanagerdata.UserPermission, opt_index);
};


proto.tabletmanagerdata.Permissions.prototype.clearUserPermissionsList = function() {
  this.setUserPermissionsList([]);
};


/**
 * repeated DbPermission db_permissions = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tabletmanagerdata.DbPermission>}
 */
proto.tabletmanagerdata.Permissions.prototype.getDbPermissionsList = function() {
  return /** @type{!Array.<!proto.tabletmanagerdata.DbPermission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tabletmanagerdata.DbPermission, 2));
};


/** @param {!Array.<!proto.tabletmanagerdata.DbPermission>} value */
proto.tabletmanagerdata.Permissions.prototype.setDbPermissionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.tabletmanagerdata.DbPermission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tabletmanagerdata.DbPermission}
 */
proto.tabletmanagerdata.Permissions.prototype.addDbPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.tabletmanagerdata.DbPermission, opt_index);
};


proto.tabletmanagerdata.Permissions.prototype.clearDbPermissionsList = function() {
  this.setDbPermissionsList([]);
};



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
proto.tabletmanagerdata.BlpPosition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.BlpPosition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.BlpPosition.displayName = 'proto.tabletmanagerdata.BlpPosition';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.BlpPosition.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.BlpPosition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.BlpPosition} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.BlpPosition.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.tabletmanagerdata.BlpPosition}
 */
proto.tabletmanagerdata.BlpPosition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.BlpPosition;
  return proto.tabletmanagerdata.BlpPosition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.BlpPosition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.BlpPosition}
 */
proto.tabletmanagerdata.BlpPosition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.BlpPosition} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.BlpPosition.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.BlpPosition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.BlpPosition.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 uid = 1;
 * @return {number}
 */
proto.tabletmanagerdata.BlpPosition.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.BlpPosition.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string position = 2;
 * @return {string}
 */
proto.tabletmanagerdata.BlpPosition.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.BlpPosition.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.tabletmanagerdata.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PingRequest.displayName = 'proto.tabletmanagerdata.PingRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.PingRequest}
 */
proto.tabletmanagerdata.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PingRequest;
  return proto.tabletmanagerdata.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PingRequest}
 */
proto.tabletmanagerdata.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PingRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PingRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payload = 1;
 * @return {string}
 */
proto.tabletmanagerdata.PingRequest.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PingRequest.prototype.setPayload = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PingResponse.displayName = 'proto.tabletmanagerdata.PingResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    payload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.PingResponse}
 */
proto.tabletmanagerdata.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PingResponse;
  return proto.tabletmanagerdata.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PingResponse}
 */
proto.tabletmanagerdata.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PingResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PingResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string payload = 1;
 * @return {string}
 */
proto.tabletmanagerdata.PingResponse.prototype.getPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PingResponse.prototype.setPayload = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.SleepRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SleepRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SleepRequest.displayName = 'proto.tabletmanagerdata.SleepRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SleepRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SleepRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SleepRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SleepRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.tabletmanagerdata.SleepRequest}
 */
proto.tabletmanagerdata.SleepRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SleepRequest;
  return proto.tabletmanagerdata.SleepRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SleepRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SleepRequest}
 */
proto.tabletmanagerdata.SleepRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SleepRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SleepRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SleepRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SleepRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 duration = 1;
 * @return {number}
 */
proto.tabletmanagerdata.SleepRequest.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.SleepRequest.prototype.setDuration = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.SleepResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SleepResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SleepResponse.displayName = 'proto.tabletmanagerdata.SleepResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SleepResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SleepResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SleepResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SleepResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SleepResponse}
 */
proto.tabletmanagerdata.SleepResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SleepResponse;
  return proto.tabletmanagerdata.SleepResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SleepResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SleepResponse}
 */
proto.tabletmanagerdata.SleepResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SleepResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SleepResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SleepResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SleepResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.ExecuteHookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.ExecuteHookRequest.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.ExecuteHookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ExecuteHookRequest.displayName = 'proto.tabletmanagerdata.ExecuteHookRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.ExecuteHookRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ExecuteHookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ExecuteHookRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteHookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parametersList: jspb.Message.getField(msg, 2),
    extraEnvMap: (f = msg.getExtraEnvMap()) ? f.toArray() : []
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
 * @return {!proto.tabletmanagerdata.ExecuteHookRequest}
 */
proto.tabletmanagerdata.ExecuteHookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ExecuteHookRequest;
  return proto.tabletmanagerdata.ExecuteHookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ExecuteHookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ExecuteHookRequest}
 */
proto.tabletmanagerdata.ExecuteHookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addParameters(value);
      break;
    case 3:
      var value = msg.getExtraEnvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ExecuteHookRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteHookRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = this.getExtraEnvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated string parameters = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.getParametersList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.setParametersList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.addParameters = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.tabletmanagerdata.ExecuteHookRequest.prototype.clearParametersList = function() {
  this.setParametersList([]);
};


/**
 * map<string, string> extra_env = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.tabletmanagerdata.ExecuteHookRequest.prototype.getExtraEnvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.tabletmanagerdata.ExecuteHookRequest.prototype.clearExtraEnvMap = function() {
  this.getExtraEnvMap().clear();
};



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
proto.tabletmanagerdata.ExecuteHookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ExecuteHookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ExecuteHookResponse.displayName = 'proto.tabletmanagerdata.ExecuteHookResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ExecuteHookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ExecuteHookResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteHookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exitStatus: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stdout: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stderr: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.tabletmanagerdata.ExecuteHookResponse}
 */
proto.tabletmanagerdata.ExecuteHookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ExecuteHookResponse;
  return proto.tabletmanagerdata.ExecuteHookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ExecuteHookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ExecuteHookResponse}
 */
proto.tabletmanagerdata.ExecuteHookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExitStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStdout(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStderr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ExecuteHookResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteHookResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getExitStatus();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getStdout();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getStderr();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 exit_status = 1;
 * @return {number}
 */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.getExitStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.setExitStatus = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string stdout = 2;
 * @return {string}
 */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.getStdout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.setStdout = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string stderr = 3;
 * @return {string}
 */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.getStderr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ExecuteHookResponse.prototype.setStderr = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.tabletmanagerdata.GetSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.GetSchemaRequest.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.GetSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.GetSchemaRequest.displayName = 'proto.tabletmanagerdata.GetSchemaRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.GetSchemaRequest.repeatedFields_ = [1,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.GetSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.GetSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tablesList: jspb.Message.getField(msg, 1),
    includeViews: jspb.Message.getFieldWithDefault(msg, 2, false),
    excludeTablesList: jspb.Message.getField(msg, 3)
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
 * @return {!proto.tabletmanagerdata.GetSchemaRequest}
 */
proto.tabletmanagerdata.GetSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.GetSchemaRequest;
  return proto.tabletmanagerdata.GetSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.GetSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.GetSchemaRequest}
 */
proto.tabletmanagerdata.GetSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTables(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeViews(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addExcludeTables(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.GetSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTablesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = this.getIncludeViews();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getExcludeTablesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string tables = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.getTablesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.GetSchemaRequest.prototype.setTablesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.addTables = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tabletmanagerdata.GetSchemaRequest.prototype.clearTablesList = function() {
  this.setTablesList([]);
};


/**
 * optional bool include_views = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.getIncludeViews = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.tabletmanagerdata.GetSchemaRequest.prototype.setIncludeViews = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string exclude_tables = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.getExcludeTablesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 3));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.GetSchemaRequest.prototype.setExcludeTablesList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.GetSchemaRequest.prototype.addExcludeTables = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.tabletmanagerdata.GetSchemaRequest.prototype.clearExcludeTablesList = function() {
  this.setExcludeTablesList([]);
};



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
proto.tabletmanagerdata.GetSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.GetSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.GetSchemaResponse.displayName = 'proto.tabletmanagerdata.GetSchemaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.GetSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.GetSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    schemaDefinition: (f = msg.getSchemaDefinition()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.GetSchemaResponse}
 */
proto.tabletmanagerdata.GetSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.GetSchemaResponse;
  return proto.tabletmanagerdata.GetSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.GetSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.GetSchemaResponse}
 */
proto.tabletmanagerdata.GetSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setSchemaDefinition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.GetSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.GetSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSchemaResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSchemaDefinition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional SchemaDefinition schema_definition = 1;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.GetSchemaResponse.prototype.getSchemaDefinition = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 1));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.GetSchemaResponse.prototype.setSchemaDefinition = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.GetSchemaResponse.prototype.clearSchemaDefinition = function() {
  this.setSchemaDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.GetSchemaResponse.prototype.hasSchemaDefinition = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.GetPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.GetPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.GetPermissionsRequest.displayName = 'proto.tabletmanagerdata.GetPermissionsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.GetPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.GetPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.GetPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.GetPermissionsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.GetPermissionsRequest}
 */
proto.tabletmanagerdata.GetPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.GetPermissionsRequest;
  return proto.tabletmanagerdata.GetPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.GetPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.GetPermissionsRequest}
 */
proto.tabletmanagerdata.GetPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.GetPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.GetPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetPermissionsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.GetPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.GetPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.GetPermissionsResponse.displayName = 'proto.tabletmanagerdata.GetPermissionsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.GetPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.GetPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.GetPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.GetPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissions: (f = msg.getPermissions()) && proto.tabletmanagerdata.Permissions.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.GetPermissionsResponse}
 */
proto.tabletmanagerdata.GetPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.GetPermissionsResponse;
  return proto.tabletmanagerdata.GetPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.GetPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.GetPermissionsResponse}
 */
proto.tabletmanagerdata.GetPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.Permissions;
      reader.readMessage(value,proto.tabletmanagerdata.Permissions.deserializeBinaryFromReader);
      msg.setPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.GetPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.GetPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetPermissionsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPermissions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tabletmanagerdata.Permissions.serializeBinaryToWriter
    );
  }
};


/**
 * optional Permissions permissions = 1;
 * @return {?proto.tabletmanagerdata.Permissions}
 */
proto.tabletmanagerdata.GetPermissionsResponse.prototype.getPermissions = function() {
  return /** @type{?proto.tabletmanagerdata.Permissions} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.Permissions, 1));
};


/** @param {?proto.tabletmanagerdata.Permissions|undefined} value */
proto.tabletmanagerdata.GetPermissionsResponse.prototype.setPermissions = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.GetPermissionsResponse.prototype.clearPermissions = function() {
  this.setPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.GetPermissionsResponse.prototype.hasPermissions = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.SetReadOnlyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SetReadOnlyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SetReadOnlyRequest.displayName = 'proto.tabletmanagerdata.SetReadOnlyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadOnlyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SetReadOnlyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SetReadOnlyRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadOnlyRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SetReadOnlyRequest}
 */
proto.tabletmanagerdata.SetReadOnlyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SetReadOnlyRequest;
  return proto.tabletmanagerdata.SetReadOnlyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SetReadOnlyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SetReadOnlyRequest}
 */
proto.tabletmanagerdata.SetReadOnlyRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SetReadOnlyRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadOnlyRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SetReadOnlyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadOnlyRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SetReadOnlyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SetReadOnlyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SetReadOnlyResponse.displayName = 'proto.tabletmanagerdata.SetReadOnlyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadOnlyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SetReadOnlyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SetReadOnlyResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadOnlyResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SetReadOnlyResponse}
 */
proto.tabletmanagerdata.SetReadOnlyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SetReadOnlyResponse;
  return proto.tabletmanagerdata.SetReadOnlyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SetReadOnlyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SetReadOnlyResponse}
 */
proto.tabletmanagerdata.SetReadOnlyResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SetReadOnlyResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadOnlyResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SetReadOnlyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadOnlyResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SetReadWriteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SetReadWriteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SetReadWriteRequest.displayName = 'proto.tabletmanagerdata.SetReadWriteRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadWriteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SetReadWriteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SetReadWriteRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadWriteRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SetReadWriteRequest}
 */
proto.tabletmanagerdata.SetReadWriteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SetReadWriteRequest;
  return proto.tabletmanagerdata.SetReadWriteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SetReadWriteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SetReadWriteRequest}
 */
proto.tabletmanagerdata.SetReadWriteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SetReadWriteRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadWriteRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SetReadWriteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadWriteRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SetReadWriteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SetReadWriteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SetReadWriteResponse.displayName = 'proto.tabletmanagerdata.SetReadWriteResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadWriteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SetReadWriteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SetReadWriteResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SetReadWriteResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SetReadWriteResponse}
 */
proto.tabletmanagerdata.SetReadWriteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SetReadWriteResponse;
  return proto.tabletmanagerdata.SetReadWriteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SetReadWriteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SetReadWriteResponse}
 */
proto.tabletmanagerdata.SetReadWriteResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SetReadWriteResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadWriteResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SetReadWriteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetReadWriteResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.ChangeTypeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ChangeTypeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ChangeTypeRequest.displayName = 'proto.tabletmanagerdata.ChangeTypeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ChangeTypeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ChangeTypeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ChangeTypeRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ChangeTypeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tabletType: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.tabletmanagerdata.ChangeTypeRequest}
 */
proto.tabletmanagerdata.ChangeTypeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ChangeTypeRequest;
  return proto.tabletmanagerdata.ChangeTypeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ChangeTypeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ChangeTypeRequest}
 */
proto.tabletmanagerdata.ChangeTypeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.topodata.TabletType} */ (reader.readEnum());
      msg.setTabletType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ChangeTypeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ChangeTypeRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ChangeTypeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ChangeTypeRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTabletType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional topodata.TabletType tablet_type = 1;
 * @return {!proto.topodata.TabletType}
 */
proto.tabletmanagerdata.ChangeTypeRequest.prototype.getTabletType = function() {
  return /** @type {!proto.topodata.TabletType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.topodata.TabletType} value */
proto.tabletmanagerdata.ChangeTypeRequest.prototype.setTabletType = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.ChangeTypeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ChangeTypeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ChangeTypeResponse.displayName = 'proto.tabletmanagerdata.ChangeTypeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ChangeTypeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ChangeTypeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ChangeTypeResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ChangeTypeResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.ChangeTypeResponse}
 */
proto.tabletmanagerdata.ChangeTypeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ChangeTypeResponse;
  return proto.tabletmanagerdata.ChangeTypeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ChangeTypeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ChangeTypeResponse}
 */
proto.tabletmanagerdata.ChangeTypeResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ChangeTypeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ChangeTypeResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ChangeTypeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ChangeTypeResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.RefreshStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.RefreshStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.RefreshStateRequest.displayName = 'proto.tabletmanagerdata.RefreshStateRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.RefreshStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.RefreshStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.RefreshStateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.RefreshStateRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.RefreshStateRequest}
 */
proto.tabletmanagerdata.RefreshStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.RefreshStateRequest;
  return proto.tabletmanagerdata.RefreshStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.RefreshStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.RefreshStateRequest}
 */
proto.tabletmanagerdata.RefreshStateRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.RefreshStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RefreshStateRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.RefreshStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RefreshStateRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.RefreshStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.RefreshStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.RefreshStateResponse.displayName = 'proto.tabletmanagerdata.RefreshStateResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.RefreshStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.RefreshStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.RefreshStateResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.RefreshStateResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.RefreshStateResponse}
 */
proto.tabletmanagerdata.RefreshStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.RefreshStateResponse;
  return proto.tabletmanagerdata.RefreshStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.RefreshStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.RefreshStateResponse}
 */
proto.tabletmanagerdata.RefreshStateResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.RefreshStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RefreshStateResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.RefreshStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RefreshStateResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.RunHealthCheckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.RunHealthCheckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.RunHealthCheckRequest.displayName = 'proto.tabletmanagerdata.RunHealthCheckRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.RunHealthCheckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.RunHealthCheckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.RunHealthCheckRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.RunHealthCheckRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.RunHealthCheckRequest}
 */
proto.tabletmanagerdata.RunHealthCheckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.RunHealthCheckRequest;
  return proto.tabletmanagerdata.RunHealthCheckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.RunHealthCheckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.RunHealthCheckRequest}
 */
proto.tabletmanagerdata.RunHealthCheckRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.RunHealthCheckRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunHealthCheckRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.RunHealthCheckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunHealthCheckRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.RunHealthCheckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.RunHealthCheckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.RunHealthCheckResponse.displayName = 'proto.tabletmanagerdata.RunHealthCheckResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.RunHealthCheckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.RunHealthCheckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.RunHealthCheckResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.RunHealthCheckResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.RunHealthCheckResponse}
 */
proto.tabletmanagerdata.RunHealthCheckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.RunHealthCheckResponse;
  return proto.tabletmanagerdata.RunHealthCheckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.RunHealthCheckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.RunHealthCheckResponse}
 */
proto.tabletmanagerdata.RunHealthCheckResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.RunHealthCheckResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunHealthCheckResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.RunHealthCheckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunHealthCheckResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.IgnoreHealthErrorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.IgnoreHealthErrorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.IgnoreHealthErrorRequest.displayName = 'proto.tabletmanagerdata.IgnoreHealthErrorRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.IgnoreHealthErrorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.IgnoreHealthErrorRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pattern: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.IgnoreHealthErrorRequest}
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.IgnoreHealthErrorRequest;
  return proto.tabletmanagerdata.IgnoreHealthErrorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.IgnoreHealthErrorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.IgnoreHealthErrorRequest}
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.IgnoreHealthErrorRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPattern();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string pattern = 1;
 * @return {string}
 */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.prototype.getPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.IgnoreHealthErrorRequest.prototype.setPattern = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.IgnoreHealthErrorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.IgnoreHealthErrorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.IgnoreHealthErrorResponse.displayName = 'proto.tabletmanagerdata.IgnoreHealthErrorResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.IgnoreHealthErrorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.IgnoreHealthErrorResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.IgnoreHealthErrorResponse}
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.IgnoreHealthErrorResponse;
  return proto.tabletmanagerdata.IgnoreHealthErrorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.IgnoreHealthErrorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.IgnoreHealthErrorResponse}
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.IgnoreHealthErrorResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.IgnoreHealthErrorResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.ReloadSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ReloadSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ReloadSchemaRequest.displayName = 'proto.tabletmanagerdata.ReloadSchemaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ReloadSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ReloadSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ReloadSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ReloadSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    waitPosition: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.ReloadSchemaRequest}
 */
proto.tabletmanagerdata.ReloadSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ReloadSchemaRequest;
  return proto.tabletmanagerdata.ReloadSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ReloadSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ReloadSchemaRequest}
 */
proto.tabletmanagerdata.ReloadSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaitPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ReloadSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ReloadSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ReloadSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ReloadSchemaRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getWaitPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string wait_position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.ReloadSchemaRequest.prototype.getWaitPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ReloadSchemaRequest.prototype.setWaitPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.ReloadSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ReloadSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ReloadSchemaResponse.displayName = 'proto.tabletmanagerdata.ReloadSchemaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ReloadSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ReloadSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ReloadSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ReloadSchemaResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.ReloadSchemaResponse}
 */
proto.tabletmanagerdata.ReloadSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ReloadSchemaResponse;
  return proto.tabletmanagerdata.ReloadSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ReloadSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ReloadSchemaResponse}
 */
proto.tabletmanagerdata.ReloadSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ReloadSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ReloadSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ReloadSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ReloadSchemaResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.PreflightSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.PreflightSchemaRequest.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.PreflightSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PreflightSchemaRequest.displayName = 'proto.tabletmanagerdata.PreflightSchemaRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.PreflightSchemaRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PreflightSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PreflightSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PreflightSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PreflightSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    changesList: jspb.Message.getField(msg, 1)
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
 * @return {!proto.tabletmanagerdata.PreflightSchemaRequest}
 */
proto.tabletmanagerdata.PreflightSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PreflightSchemaRequest;
  return proto.tabletmanagerdata.PreflightSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PreflightSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PreflightSchemaRequest}
 */
proto.tabletmanagerdata.PreflightSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addChanges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PreflightSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PreflightSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PreflightSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PreflightSchemaRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChangesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string changes = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.PreflightSchemaRequest.prototype.getChangesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.PreflightSchemaRequest.prototype.setChangesList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.PreflightSchemaRequest.prototype.addChanges = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tabletmanagerdata.PreflightSchemaRequest.prototype.clearChangesList = function() {
  this.setChangesList([]);
};



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
proto.tabletmanagerdata.PreflightSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.PreflightSchemaResponse.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.PreflightSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PreflightSchemaResponse.displayName = 'proto.tabletmanagerdata.PreflightSchemaResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.PreflightSchemaResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PreflightSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PreflightSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    changeResultsList: jspb.Message.toObjectList(msg.getChangeResultsList(),
    proto.tabletmanagerdata.SchemaChangeResult.toObject, includeInstance)
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
 * @return {!proto.tabletmanagerdata.PreflightSchemaResponse}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PreflightSchemaResponse;
  return proto.tabletmanagerdata.PreflightSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PreflightSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PreflightSchemaResponse}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.SchemaChangeResult;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaChangeResult.deserializeBinaryFromReader);
      msg.addChangeResults(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PreflightSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PreflightSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PreflightSchemaResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getChangeResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tabletmanagerdata.SchemaChangeResult.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SchemaChangeResult change_results = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tabletmanagerdata.SchemaChangeResult>}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.prototype.getChangeResultsList = function() {
  return /** @type{!Array.<!proto.tabletmanagerdata.SchemaChangeResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tabletmanagerdata.SchemaChangeResult, 1));
};


/** @param {!Array.<!proto.tabletmanagerdata.SchemaChangeResult>} value */
proto.tabletmanagerdata.PreflightSchemaResponse.prototype.setChangeResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tabletmanagerdata.SchemaChangeResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tabletmanagerdata.SchemaChangeResult}
 */
proto.tabletmanagerdata.PreflightSchemaResponse.prototype.addChangeResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tabletmanagerdata.SchemaChangeResult, opt_index);
};


proto.tabletmanagerdata.PreflightSchemaResponse.prototype.clearChangeResultsList = function() {
  this.setChangeResultsList([]);
};



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
proto.tabletmanagerdata.ApplySchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ApplySchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ApplySchemaRequest.displayName = 'proto.tabletmanagerdata.ApplySchemaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ApplySchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ApplySchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ApplySchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sql: jspb.Message.getFieldWithDefault(msg, 1, ""),
    force: jspb.Message.getFieldWithDefault(msg, 2, false),
    allowReplication: jspb.Message.getFieldWithDefault(msg, 3, false),
    beforeSchema: (f = msg.getBeforeSchema()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f),
    afterSchema: (f = msg.getAfterSchema()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.ApplySchemaRequest}
 */
proto.tabletmanagerdata.ApplySchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ApplySchemaRequest;
  return proto.tabletmanagerdata.ApplySchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ApplySchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ApplySchemaRequest}
 */
proto.tabletmanagerdata.ApplySchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSql(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowReplication(value);
      break;
    case 4:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setBeforeSchema(value);
      break;
    case 5:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setAfterSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ApplySchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ApplySchemaRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSql();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getAllowReplication();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getBeforeSchema();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
  f = this.getAfterSchema();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sql = 1;
 * @return {string}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.getSql = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.setSql = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool force = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.setForce = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool allow_replication = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.getAllowReplication = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.setAllowReplication = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional SchemaDefinition before_schema = 4;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.getBeforeSchema = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 4));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.setBeforeSchema = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.tabletmanagerdata.ApplySchemaRequest.prototype.clearBeforeSchema = function() {
  this.setBeforeSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.hasBeforeSchema = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SchemaDefinition after_schema = 5;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.getAfterSchema = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 5));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.setAfterSchema = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.tabletmanagerdata.ApplySchemaRequest.prototype.clearAfterSchema = function() {
  this.setAfterSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.ApplySchemaRequest.prototype.hasAfterSchema = function() {
  return jspb.Message.getField(this, 5) != null;
};



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
proto.tabletmanagerdata.ApplySchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ApplySchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ApplySchemaResponse.displayName = 'proto.tabletmanagerdata.ApplySchemaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ApplySchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ApplySchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ApplySchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    beforeSchema: (f = msg.getBeforeSchema()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f),
    afterSchema: (f = msg.getAfterSchema()) && proto.tabletmanagerdata.SchemaDefinition.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.ApplySchemaResponse}
 */
proto.tabletmanagerdata.ApplySchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ApplySchemaResponse;
  return proto.tabletmanagerdata.ApplySchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ApplySchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ApplySchemaResponse}
 */
proto.tabletmanagerdata.ApplySchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setBeforeSchema(value);
      break;
    case 2:
      var value = new proto.tabletmanagerdata.SchemaDefinition;
      reader.readMessage(value,proto.tabletmanagerdata.SchemaDefinition.deserializeBinaryFromReader);
      msg.setAfterSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ApplySchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ApplySchemaResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBeforeSchema();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
  f = this.getAfterSchema();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.tabletmanagerdata.SchemaDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional SchemaDefinition before_schema = 1;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.getBeforeSchema = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 1));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.setBeforeSchema = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.ApplySchemaResponse.prototype.clearBeforeSchema = function() {
  this.setBeforeSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.hasBeforeSchema = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SchemaDefinition after_schema = 2;
 * @return {?proto.tabletmanagerdata.SchemaDefinition}
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.getAfterSchema = function() {
  return /** @type{?proto.tabletmanagerdata.SchemaDefinition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.SchemaDefinition, 2));
};


/** @param {?proto.tabletmanagerdata.SchemaDefinition|undefined} value */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.setAfterSchema = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.tabletmanagerdata.ApplySchemaResponse.prototype.clearAfterSchema = function() {
  this.setAfterSchema(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.ApplySchemaResponse.prototype.hasAfterSchema = function() {
  return jspb.Message.getField(this, 2) != null;
};



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
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ExecuteFetchAsDbaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.displayName = 'proto.tabletmanagerdata.ExecuteFetchAsDbaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsDbaRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dbName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    maxRows: jspb.Message.getFieldWithDefault(msg, 3, 0),
    disableBinlogs: jspb.Message.getFieldWithDefault(msg, 4, false),
    reloadSchema: jspb.Message.getFieldWithDefault(msg, 5, false)
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
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsDbaRequest}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ExecuteFetchAsDbaRequest;
  return proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsDbaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsDbaRequest}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDbName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxRows(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableBinlogs(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReloadSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsDbaRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getDbName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getMaxRows();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = this.getDisableBinlogs();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = this.getReloadSchema();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string db_name = 2;
 * @return {string}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.getDbName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.setDbName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint64 max_rows = 3;
 * @return {number}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.getMaxRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.setMaxRows = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bool disable_binlogs = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.getDisableBinlogs = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.setDisableBinlogs = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool reload_schema = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.getReloadSchema = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.tabletmanagerdata.ExecuteFetchAsDbaRequest.prototype.setReloadSchema = function(value) {
  jspb.Message.setField(this, 5, value);
};



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
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ExecuteFetchAsDbaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.displayName = 'proto.tabletmanagerdata.ExecuteFetchAsDbaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsDbaResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && query_pb.QueryResult.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsDbaResponse}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ExecuteFetchAsDbaResponse;
  return proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsDbaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsDbaResponse}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new query_pb.QueryResult;
      reader.readMessage(value,query_pb.QueryResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsDbaResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      query_pb.QueryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional query.QueryResult result = 1;
 * @return {?proto.query.QueryResult}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.getResult = function() {
  return /** @type{?proto.query.QueryResult} */ (
    jspb.Message.getWrapperField(this, query_pb.QueryResult, 1));
};


/** @param {?proto.query.QueryResult|undefined} value */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.ExecuteFetchAsDbaResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.ExecuteFetchAsAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ExecuteFetchAsAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ExecuteFetchAsAppRequest.displayName = 'proto.tabletmanagerdata.ExecuteFetchAsAppRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ExecuteFetchAsAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsAppRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, ""),
    maxRows: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsAppRequest}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ExecuteFetchAsAppRequest;
  return proto.tabletmanagerdata.ExecuteFetchAsAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsAppRequest}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMaxRows();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.setQuery = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint64 max_rows = 2;
 * @return {number}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.getMaxRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.ExecuteFetchAsAppRequest.prototype.setMaxRows = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.tabletmanagerdata.ExecuteFetchAsAppResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ExecuteFetchAsAppResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ExecuteFetchAsAppResponse.displayName = 'proto.tabletmanagerdata.ExecuteFetchAsAppResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ExecuteFetchAsAppResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsAppResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && query_pb.QueryResult.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsAppResponse}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ExecuteFetchAsAppResponse;
  return proto.tabletmanagerdata.ExecuteFetchAsAppResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsAppResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ExecuteFetchAsAppResponse}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new query_pb.QueryResult;
      reader.readMessage(value,query_pb.QueryResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ExecuteFetchAsAppResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      query_pb.QueryResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional query.QueryResult result = 1;
 * @return {?proto.query.QueryResult}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.getResult = function() {
  return /** @type{?proto.query.QueryResult} */ (
    jspb.Message.getWrapperField(this, query_pb.QueryResult, 1));
};


/** @param {?proto.query.QueryResult|undefined} value */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.ExecuteFetchAsAppResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.SlaveStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SlaveStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SlaveStatusRequest.displayName = 'proto.tabletmanagerdata.SlaveStatusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SlaveStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SlaveStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SlaveStatusRequest}
 */
proto.tabletmanagerdata.SlaveStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SlaveStatusRequest;
  return proto.tabletmanagerdata.SlaveStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SlaveStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SlaveStatusRequest}
 */
proto.tabletmanagerdata.SlaveStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SlaveStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveStatusRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SlaveStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveStatusRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SlaveStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SlaveStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SlaveStatusResponse.displayName = 'proto.tabletmanagerdata.SlaveStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SlaveStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SlaveStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && replicationdata_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.SlaveStatusResponse}
 */
proto.tabletmanagerdata.SlaveStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SlaveStatusResponse;
  return proto.tabletmanagerdata.SlaveStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SlaveStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SlaveStatusResponse}
 */
proto.tabletmanagerdata.SlaveStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new replicationdata_pb.Status;
      reader.readMessage(value,replicationdata_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SlaveStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveStatusResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SlaveStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveStatusResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      replicationdata_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional replicationdata.Status status = 1;
 * @return {?proto.replicationdata.Status}
 */
proto.tabletmanagerdata.SlaveStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.replicationdata.Status} */ (
    jspb.Message.getWrapperField(this, replicationdata_pb.Status, 1));
};


/** @param {?proto.replicationdata.Status|undefined} value */
proto.tabletmanagerdata.SlaveStatusResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.SlaveStatusResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.SlaveStatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.MasterPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.MasterPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.MasterPositionRequest.displayName = 'proto.tabletmanagerdata.MasterPositionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.MasterPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.MasterPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.MasterPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.MasterPositionRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.MasterPositionRequest}
 */
proto.tabletmanagerdata.MasterPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.MasterPositionRequest;
  return proto.tabletmanagerdata.MasterPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.MasterPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.MasterPositionRequest}
 */
proto.tabletmanagerdata.MasterPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.MasterPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.MasterPositionRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.MasterPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.MasterPositionRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.MasterPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.MasterPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.MasterPositionResponse.displayName = 'proto.tabletmanagerdata.MasterPositionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.MasterPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.MasterPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.MasterPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.MasterPositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.MasterPositionResponse}
 */
proto.tabletmanagerdata.MasterPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.MasterPositionResponse;
  return proto.tabletmanagerdata.MasterPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.MasterPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.MasterPositionResponse}
 */
proto.tabletmanagerdata.MasterPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.MasterPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.MasterPositionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.MasterPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.MasterPositionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.MasterPositionResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.MasterPositionResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.StopSlaveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopSlaveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopSlaveRequest.displayName = 'proto.tabletmanagerdata.StopSlaveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopSlaveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopSlaveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StopSlaveRequest}
 */
proto.tabletmanagerdata.StopSlaveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopSlaveRequest;
  return proto.tabletmanagerdata.StopSlaveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopSlaveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopSlaveRequest}
 */
proto.tabletmanagerdata.StopSlaveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopSlaveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopSlaveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StopSlaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopSlaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopSlaveResponse.displayName = 'proto.tabletmanagerdata.StopSlaveResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopSlaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopSlaveResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StopSlaveResponse}
 */
proto.tabletmanagerdata.StopSlaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopSlaveResponse;
  return proto.tabletmanagerdata.StopSlaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopSlaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopSlaveResponse}
 */
proto.tabletmanagerdata.StopSlaveResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopSlaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopSlaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StopSlaveMinimumRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopSlaveMinimumRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopSlaveMinimumRequest.displayName = 'proto.tabletmanagerdata.StopSlaveMinimumRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopSlaveMinimumRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopSlaveMinimumRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, ""),
    waitTimeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tabletmanagerdata.StopSlaveMinimumRequest}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopSlaveMinimumRequest;
  return proto.tabletmanagerdata.StopSlaveMinimumRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopSlaveMinimumRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopSlaveMinimumRequest}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWaitTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopSlaveMinimumRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getWaitTimeout();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 wait_timeout = 2;
 * @return {number}
 */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.getWaitTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.StopSlaveMinimumRequest.prototype.setWaitTimeout = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.tabletmanagerdata.StopSlaveMinimumResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopSlaveMinimumResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopSlaveMinimumResponse.displayName = 'proto.tabletmanagerdata.StopSlaveMinimumResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopSlaveMinimumResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopSlaveMinimumResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.StopSlaveMinimumResponse}
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopSlaveMinimumResponse;
  return proto.tabletmanagerdata.StopSlaveMinimumResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopSlaveMinimumResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopSlaveMinimumResponse}
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopSlaveMinimumResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.StopSlaveMinimumResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.StopSlaveMinimumResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.StartSlaveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StartSlaveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StartSlaveRequest.displayName = 'proto.tabletmanagerdata.StartSlaveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StartSlaveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StartSlaveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StartSlaveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StartSlaveRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StartSlaveRequest}
 */
proto.tabletmanagerdata.StartSlaveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StartSlaveRequest;
  return proto.tabletmanagerdata.StartSlaveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StartSlaveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StartSlaveRequest}
 */
proto.tabletmanagerdata.StartSlaveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StartSlaveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartSlaveRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StartSlaveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartSlaveRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StartSlaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StartSlaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StartSlaveResponse.displayName = 'proto.tabletmanagerdata.StartSlaveResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StartSlaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StartSlaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StartSlaveResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StartSlaveResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StartSlaveResponse}
 */
proto.tabletmanagerdata.StartSlaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StartSlaveResponse;
  return proto.tabletmanagerdata.StartSlaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StartSlaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StartSlaveResponse}
 */
proto.tabletmanagerdata.StartSlaveResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StartSlaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartSlaveResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StartSlaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartSlaveResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.TabletExternallyReparentedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.TabletExternallyReparentedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.TabletExternallyReparentedRequest.displayName = 'proto.tabletmanagerdata.TabletExternallyReparentedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.TabletExternallyReparentedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.TabletExternallyReparentedRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    externalId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.TabletExternallyReparentedRequest}
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.TabletExternallyReparentedRequest;
  return proto.tabletmanagerdata.TabletExternallyReparentedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.TabletExternallyReparentedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.TabletExternallyReparentedRequest}
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.TabletExternallyReparentedRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string external_id = 1;
 * @return {string}
 */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.TabletExternallyReparentedRequest.prototype.setExternalId = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.TabletExternallyReparentedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.TabletExternallyReparentedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.TabletExternallyReparentedResponse.displayName = 'proto.tabletmanagerdata.TabletExternallyReparentedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.TabletExternallyReparentedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.TabletExternallyReparentedResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.TabletExternallyReparentedResponse}
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.TabletExternallyReparentedResponse;
  return proto.tabletmanagerdata.TabletExternallyReparentedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.TabletExternallyReparentedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.TabletExternallyReparentedResponse}
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.TabletExternallyReparentedResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyReparentedResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.TabletExternallyElectedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.TabletExternallyElectedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.TabletExternallyElectedRequest.displayName = 'proto.tabletmanagerdata.TabletExternallyElectedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.TabletExternallyElectedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.TabletExternallyElectedRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.TabletExternallyElectedRequest}
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.TabletExternallyElectedRequest;
  return proto.tabletmanagerdata.TabletExternallyElectedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.TabletExternallyElectedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.TabletExternallyElectedRequest}
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.TabletExternallyElectedRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyElectedRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.TabletExternallyElectedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.TabletExternallyElectedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.TabletExternallyElectedResponse.displayName = 'proto.tabletmanagerdata.TabletExternallyElectedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.TabletExternallyElectedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.TabletExternallyElectedResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.TabletExternallyElectedResponse}
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.TabletExternallyElectedResponse;
  return proto.tabletmanagerdata.TabletExternallyElectedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.TabletExternallyElectedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.TabletExternallyElectedResponse}
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.TabletExternallyElectedResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.TabletExternallyElectedResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.GetSlavesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.GetSlavesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.GetSlavesRequest.displayName = 'proto.tabletmanagerdata.GetSlavesRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSlavesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.GetSlavesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.GetSlavesRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSlavesRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.GetSlavesRequest}
 */
proto.tabletmanagerdata.GetSlavesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.GetSlavesRequest;
  return proto.tabletmanagerdata.GetSlavesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.GetSlavesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.GetSlavesRequest}
 */
proto.tabletmanagerdata.GetSlavesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.GetSlavesRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSlavesRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.GetSlavesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSlavesRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.GetSlavesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.GetSlavesResponse.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.GetSlavesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.GetSlavesResponse.displayName = 'proto.tabletmanagerdata.GetSlavesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.GetSlavesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSlavesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.GetSlavesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.GetSlavesResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.GetSlavesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    addrsList: jspb.Message.getField(msg, 1)
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
 * @return {!proto.tabletmanagerdata.GetSlavesResponse}
 */
proto.tabletmanagerdata.GetSlavesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.GetSlavesResponse;
  return proto.tabletmanagerdata.GetSlavesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.GetSlavesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.GetSlavesResponse}
 */
proto.tabletmanagerdata.GetSlavesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAddrs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.GetSlavesResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSlavesResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.GetSlavesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.GetSlavesResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAddrsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string addrs = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.tabletmanagerdata.GetSlavesResponse.prototype.getAddrsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<string>} value */
proto.tabletmanagerdata.GetSlavesResponse.prototype.setAddrsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.tabletmanagerdata.GetSlavesResponse.prototype.addAddrs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.tabletmanagerdata.GetSlavesResponse.prototype.clearAddrsList = function() {
  this.setAddrsList([]);
};



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
proto.tabletmanagerdata.WaitBlpPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.WaitBlpPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.WaitBlpPositionRequest.displayName = 'proto.tabletmanagerdata.WaitBlpPositionRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.WaitBlpPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.WaitBlpPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blpPosition: (f = msg.getBlpPosition()) && proto.tabletmanagerdata.BlpPosition.toObject(includeInstance, f),
    waitTimeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tabletmanagerdata.WaitBlpPositionRequest}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.WaitBlpPositionRequest;
  return proto.tabletmanagerdata.WaitBlpPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.WaitBlpPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.WaitBlpPositionRequest}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.BlpPosition;
      reader.readMessage(value,proto.tabletmanagerdata.BlpPosition.deserializeBinaryFromReader);
      msg.setBlpPosition(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWaitTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.WaitBlpPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBlpPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tabletmanagerdata.BlpPosition.serializeBinaryToWriter
    );
  }
  f = this.getWaitTimeout();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional BlpPosition blp_position = 1;
 * @return {?proto.tabletmanagerdata.BlpPosition}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.getBlpPosition = function() {
  return /** @type{?proto.tabletmanagerdata.BlpPosition} */ (
    jspb.Message.getWrapperField(this, proto.tabletmanagerdata.BlpPosition, 1));
};


/** @param {?proto.tabletmanagerdata.BlpPosition|undefined} value */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.setBlpPosition = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.clearBlpPosition = function() {
  this.setBlpPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.hasBlpPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 wait_timeout = 2;
 * @return {number}
 */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.getWaitTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.WaitBlpPositionRequest.prototype.setWaitTimeout = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.tabletmanagerdata.WaitBlpPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.WaitBlpPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.WaitBlpPositionResponse.displayName = 'proto.tabletmanagerdata.WaitBlpPositionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.WaitBlpPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.WaitBlpPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.WaitBlpPositionResponse}
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.WaitBlpPositionResponse;
  return proto.tabletmanagerdata.WaitBlpPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.WaitBlpPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.WaitBlpPositionResponse}
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.WaitBlpPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.WaitBlpPositionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StopBlpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopBlpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopBlpRequest.displayName = 'proto.tabletmanagerdata.StopBlpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopBlpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopBlpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopBlpRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopBlpRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StopBlpRequest}
 */
proto.tabletmanagerdata.StopBlpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopBlpRequest;
  return proto.tabletmanagerdata.StopBlpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopBlpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopBlpRequest}
 */
proto.tabletmanagerdata.StopBlpRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopBlpRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopBlpRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopBlpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopBlpRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StopBlpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.StopBlpResponse.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.StopBlpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopBlpResponse.displayName = 'proto.tabletmanagerdata.StopBlpResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.StopBlpResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopBlpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopBlpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopBlpResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopBlpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blpPositionsList: jspb.Message.toObjectList(msg.getBlpPositionsList(),
    proto.tabletmanagerdata.BlpPosition.toObject, includeInstance)
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
 * @return {!proto.tabletmanagerdata.StopBlpResponse}
 */
proto.tabletmanagerdata.StopBlpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopBlpResponse;
  return proto.tabletmanagerdata.StopBlpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopBlpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopBlpResponse}
 */
proto.tabletmanagerdata.StopBlpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.BlpPosition;
      reader.readMessage(value,proto.tabletmanagerdata.BlpPosition.deserializeBinaryFromReader);
      msg.addBlpPositions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopBlpResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopBlpResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopBlpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopBlpResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBlpPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tabletmanagerdata.BlpPosition.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BlpPosition blp_positions = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tabletmanagerdata.BlpPosition>}
 */
proto.tabletmanagerdata.StopBlpResponse.prototype.getBlpPositionsList = function() {
  return /** @type{!Array.<!proto.tabletmanagerdata.BlpPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tabletmanagerdata.BlpPosition, 1));
};


/** @param {!Array.<!proto.tabletmanagerdata.BlpPosition>} value */
proto.tabletmanagerdata.StopBlpResponse.prototype.setBlpPositionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tabletmanagerdata.BlpPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tabletmanagerdata.BlpPosition}
 */
proto.tabletmanagerdata.StopBlpResponse.prototype.addBlpPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tabletmanagerdata.BlpPosition, opt_index);
};


proto.tabletmanagerdata.StopBlpResponse.prototype.clearBlpPositionsList = function() {
  this.setBlpPositionsList([]);
};



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
proto.tabletmanagerdata.StartBlpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StartBlpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StartBlpRequest.displayName = 'proto.tabletmanagerdata.StartBlpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StartBlpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StartBlpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StartBlpRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StartBlpRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StartBlpRequest}
 */
proto.tabletmanagerdata.StartBlpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StartBlpRequest;
  return proto.tabletmanagerdata.StartBlpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StartBlpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StartBlpRequest}
 */
proto.tabletmanagerdata.StartBlpRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StartBlpRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartBlpRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StartBlpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartBlpRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StartBlpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StartBlpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StartBlpResponse.displayName = 'proto.tabletmanagerdata.StartBlpResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StartBlpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StartBlpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StartBlpResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StartBlpResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StartBlpResponse}
 */
proto.tabletmanagerdata.StartBlpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StartBlpResponse;
  return proto.tabletmanagerdata.StartBlpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StartBlpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StartBlpResponse}
 */
proto.tabletmanagerdata.StartBlpResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StartBlpResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartBlpResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StartBlpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StartBlpResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.RunBlpUntilRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tabletmanagerdata.RunBlpUntilRequest.repeatedFields_, null);
};
goog.inherits(proto.tabletmanagerdata.RunBlpUntilRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.RunBlpUntilRequest.displayName = 'proto.tabletmanagerdata.RunBlpUntilRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tabletmanagerdata.RunBlpUntilRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.RunBlpUntilRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.RunBlpUntilRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blpPositionsList: jspb.Message.toObjectList(msg.getBlpPositionsList(),
    proto.tabletmanagerdata.BlpPosition.toObject, includeInstance),
    waitTimeout: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tabletmanagerdata.RunBlpUntilRequest}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.RunBlpUntilRequest;
  return proto.tabletmanagerdata.RunBlpUntilRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.RunBlpUntilRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.RunBlpUntilRequest}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tabletmanagerdata.BlpPosition;
      reader.readMessage(value,proto.tabletmanagerdata.BlpPosition.deserializeBinaryFromReader);
      msg.addBlpPositions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWaitTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.RunBlpUntilRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunBlpUntilRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBlpPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tabletmanagerdata.BlpPosition.serializeBinaryToWriter
    );
  }
  f = this.getWaitTimeout();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated BlpPosition blp_positions = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.tabletmanagerdata.BlpPosition>}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.getBlpPositionsList = function() {
  return /** @type{!Array.<!proto.tabletmanagerdata.BlpPosition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tabletmanagerdata.BlpPosition, 1));
};


/** @param {!Array.<!proto.tabletmanagerdata.BlpPosition>} value */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.setBlpPositionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tabletmanagerdata.BlpPosition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tabletmanagerdata.BlpPosition}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.addBlpPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tabletmanagerdata.BlpPosition, opt_index);
};


proto.tabletmanagerdata.RunBlpUntilRequest.prototype.clearBlpPositionsList = function() {
  this.setBlpPositionsList([]);
};


/**
 * optional int64 wait_timeout = 2;
 * @return {number}
 */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.getWaitTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.RunBlpUntilRequest.prototype.setWaitTimeout = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.tabletmanagerdata.RunBlpUntilResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.RunBlpUntilResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.RunBlpUntilResponse.displayName = 'proto.tabletmanagerdata.RunBlpUntilResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.RunBlpUntilResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.RunBlpUntilResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.RunBlpUntilResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.RunBlpUntilResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.RunBlpUntilResponse}
 */
proto.tabletmanagerdata.RunBlpUntilResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.RunBlpUntilResponse;
  return proto.tabletmanagerdata.RunBlpUntilResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.RunBlpUntilResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.RunBlpUntilResponse}
 */
proto.tabletmanagerdata.RunBlpUntilResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.RunBlpUntilResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunBlpUntilResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.RunBlpUntilResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.RunBlpUntilResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.RunBlpUntilResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.RunBlpUntilResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.ResetReplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ResetReplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ResetReplicationRequest.displayName = 'proto.tabletmanagerdata.ResetReplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ResetReplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ResetReplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ResetReplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ResetReplicationRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.ResetReplicationRequest}
 */
proto.tabletmanagerdata.ResetReplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ResetReplicationRequest;
  return proto.tabletmanagerdata.ResetReplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ResetReplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ResetReplicationRequest}
 */
proto.tabletmanagerdata.ResetReplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ResetReplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ResetReplicationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ResetReplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ResetReplicationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.ResetReplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.ResetReplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.ResetReplicationResponse.displayName = 'proto.tabletmanagerdata.ResetReplicationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.ResetReplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.ResetReplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.ResetReplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.ResetReplicationResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.ResetReplicationResponse}
 */
proto.tabletmanagerdata.ResetReplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.ResetReplicationResponse;
  return proto.tabletmanagerdata.ResetReplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.ResetReplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.ResetReplicationResponse}
 */
proto.tabletmanagerdata.ResetReplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.ResetReplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ResetReplicationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.ResetReplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.ResetReplicationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.InitMasterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.InitMasterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.InitMasterRequest.displayName = 'proto.tabletmanagerdata.InitMasterRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.InitMasterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.InitMasterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.InitMasterRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.InitMasterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.InitMasterRequest}
 */
proto.tabletmanagerdata.InitMasterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.InitMasterRequest;
  return proto.tabletmanagerdata.InitMasterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.InitMasterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.InitMasterRequest}
 */
proto.tabletmanagerdata.InitMasterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.InitMasterRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitMasterRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.InitMasterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitMasterRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.InitMasterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.InitMasterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.InitMasterResponse.displayName = 'proto.tabletmanagerdata.InitMasterResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.InitMasterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.InitMasterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.InitMasterResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.InitMasterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.InitMasterResponse}
 */
proto.tabletmanagerdata.InitMasterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.InitMasterResponse;
  return proto.tabletmanagerdata.InitMasterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.InitMasterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.InitMasterResponse}
 */
proto.tabletmanagerdata.InitMasterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.InitMasterResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitMasterResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.InitMasterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitMasterResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.InitMasterResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.InitMasterResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.PopulateReparentJournalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PopulateReparentJournalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PopulateReparentJournalRequest.displayName = 'proto.tabletmanagerdata.PopulateReparentJournalRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PopulateReparentJournalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PopulateReparentJournalRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeCreatedNs: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    masterAlias: (f = msg.getMasterAlias()) && topodata_pb.TabletAlias.toObject(includeInstance, f),
    replicationPosition: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.tabletmanagerdata.PopulateReparentJournalRequest}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PopulateReparentJournalRequest;
  return proto.tabletmanagerdata.PopulateReparentJournalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PopulateReparentJournalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PopulateReparentJournalRequest}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeCreatedNs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionName(value);
      break;
    case 3:
      var value = new topodata_pb.TabletAlias;
      reader.readMessage(value,topodata_pb.TabletAlias.deserializeBinaryFromReader);
      msg.setMasterAlias(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplicationPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PopulateReparentJournalRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimeCreatedNs();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getActionName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getMasterAlias();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      topodata_pb.TabletAlias.serializeBinaryToWriter
    );
  }
  f = this.getReplicationPosition();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 time_created_ns = 1;
 * @return {number}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.getTimeCreatedNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.setTimeCreatedNs = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string action_name = 2;
 * @return {string}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.getActionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.setActionName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional topodata.TabletAlias master_alias = 3;
 * @return {?proto.topodata.TabletAlias}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.getMasterAlias = function() {
  return /** @type{?proto.topodata.TabletAlias} */ (
    jspb.Message.getWrapperField(this, topodata_pb.TabletAlias, 3));
};


/** @param {?proto.topodata.TabletAlias|undefined} value */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.setMasterAlias = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.clearMasterAlias = function() {
  this.setMasterAlias(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.hasMasterAlias = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string replication_position = 4;
 * @return {string}
 */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.getReplicationPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PopulateReparentJournalRequest.prototype.setReplicationPosition = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
proto.tabletmanagerdata.PopulateReparentJournalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PopulateReparentJournalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PopulateReparentJournalResponse.displayName = 'proto.tabletmanagerdata.PopulateReparentJournalResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PopulateReparentJournalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PopulateReparentJournalResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.PopulateReparentJournalResponse}
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PopulateReparentJournalResponse;
  return proto.tabletmanagerdata.PopulateReparentJournalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PopulateReparentJournalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PopulateReparentJournalResponse}
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PopulateReparentJournalResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PopulateReparentJournalResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.InitSlaveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.InitSlaveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.InitSlaveRequest.displayName = 'proto.tabletmanagerdata.InitSlaveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.InitSlaveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.InitSlaveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.InitSlaveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: (f = msg.getParent()) && topodata_pb.TabletAlias.toObject(includeInstance, f),
    replicationPosition: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timeCreatedNs: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.tabletmanagerdata.InitSlaveRequest}
 */
proto.tabletmanagerdata.InitSlaveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.InitSlaveRequest;
  return proto.tabletmanagerdata.InitSlaveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.InitSlaveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.InitSlaveRequest}
 */
proto.tabletmanagerdata.InitSlaveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new topodata_pb.TabletAlias;
      reader.readMessage(value,topodata_pb.TabletAlias.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReplicationPosition(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeCreatedNs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.InitSlaveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitSlaveRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getParent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      topodata_pb.TabletAlias.serializeBinaryToWriter
    );
  }
  f = this.getReplicationPosition();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getTimeCreatedNs();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional topodata.TabletAlias parent = 1;
 * @return {?proto.topodata.TabletAlias}
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.getParent = function() {
  return /** @type{?proto.topodata.TabletAlias} */ (
    jspb.Message.getWrapperField(this, topodata_pb.TabletAlias, 1));
};


/** @param {?proto.topodata.TabletAlias|undefined} value */
proto.tabletmanagerdata.InitSlaveRequest.prototype.setParent = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.InitSlaveRequest.prototype.clearParent = function() {
  this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string replication_position = 2;
 * @return {string}
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.getReplicationPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.InitSlaveRequest.prototype.setReplicationPosition = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 time_created_ns = 3;
 * @return {number}
 */
proto.tabletmanagerdata.InitSlaveRequest.prototype.getTimeCreatedNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.InitSlaveRequest.prototype.setTimeCreatedNs = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.tabletmanagerdata.InitSlaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.InitSlaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.InitSlaveResponse.displayName = 'proto.tabletmanagerdata.InitSlaveResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.InitSlaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.InitSlaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.InitSlaveResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.InitSlaveResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.InitSlaveResponse}
 */
proto.tabletmanagerdata.InitSlaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.InitSlaveResponse;
  return proto.tabletmanagerdata.InitSlaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.InitSlaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.InitSlaveResponse}
 */
proto.tabletmanagerdata.InitSlaveResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.InitSlaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitSlaveResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.InitSlaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.InitSlaveResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.DemoteMasterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.DemoteMasterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.DemoteMasterRequest.displayName = 'proto.tabletmanagerdata.DemoteMasterRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.DemoteMasterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.DemoteMasterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.DemoteMasterRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.DemoteMasterRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.DemoteMasterRequest}
 */
proto.tabletmanagerdata.DemoteMasterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.DemoteMasterRequest;
  return proto.tabletmanagerdata.DemoteMasterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.DemoteMasterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.DemoteMasterRequest}
 */
proto.tabletmanagerdata.DemoteMasterRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.DemoteMasterRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.DemoteMasterRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.DemoteMasterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.DemoteMasterRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.DemoteMasterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.DemoteMasterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.DemoteMasterResponse.displayName = 'proto.tabletmanagerdata.DemoteMasterResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.DemoteMasterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.DemoteMasterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.DemoteMasterResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.DemoteMasterResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.DemoteMasterResponse}
 */
proto.tabletmanagerdata.DemoteMasterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.DemoteMasterResponse;
  return proto.tabletmanagerdata.DemoteMasterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.DemoteMasterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.DemoteMasterResponse}
 */
proto.tabletmanagerdata.DemoteMasterResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.DemoteMasterResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.DemoteMasterResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.DemoteMasterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.DemoteMasterResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.DemoteMasterResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.DemoteMasterResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.displayName = 'proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest;
  return proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.displayName = 'proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse;
  return proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.SlaveWasPromotedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SlaveWasPromotedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SlaveWasPromotedRequest.displayName = 'proto.tabletmanagerdata.SlaveWasPromotedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SlaveWasPromotedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SlaveWasPromotedRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SlaveWasPromotedRequest}
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SlaveWasPromotedRequest;
  return proto.tabletmanagerdata.SlaveWasPromotedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SlaveWasPromotedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SlaveWasPromotedRequest}
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SlaveWasPromotedRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasPromotedRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SlaveWasPromotedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SlaveWasPromotedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SlaveWasPromotedResponse.displayName = 'proto.tabletmanagerdata.SlaveWasPromotedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SlaveWasPromotedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SlaveWasPromotedResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SlaveWasPromotedResponse}
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SlaveWasPromotedResponse;
  return proto.tabletmanagerdata.SlaveWasPromotedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SlaveWasPromotedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SlaveWasPromotedResponse}
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SlaveWasPromotedResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasPromotedResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SetMasterRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SetMasterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SetMasterRequest.displayName = 'proto.tabletmanagerdata.SetMasterRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SetMasterRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SetMasterRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SetMasterRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: (f = msg.getParent()) && topodata_pb.TabletAlias.toObject(includeInstance, f),
    timeCreatedNs: jspb.Message.getFieldWithDefault(msg, 2, 0),
    forceStartSlave: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.tabletmanagerdata.SetMasterRequest}
 */
proto.tabletmanagerdata.SetMasterRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SetMasterRequest;
  return proto.tabletmanagerdata.SetMasterRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SetMasterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SetMasterRequest}
 */
proto.tabletmanagerdata.SetMasterRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new topodata_pb.TabletAlias;
      reader.readMessage(value,topodata_pb.TabletAlias.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeCreatedNs(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceStartSlave(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SetMasterRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetMasterRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getParent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      topodata_pb.TabletAlias.serializeBinaryToWriter
    );
  }
  f = this.getTimeCreatedNs();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getForceStartSlave();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional topodata.TabletAlias parent = 1;
 * @return {?proto.topodata.TabletAlias}
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.getParent = function() {
  return /** @type{?proto.topodata.TabletAlias} */ (
    jspb.Message.getWrapperField(this, topodata_pb.TabletAlias, 1));
};


/** @param {?proto.topodata.TabletAlias|undefined} value */
proto.tabletmanagerdata.SetMasterRequest.prototype.setParent = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.SetMasterRequest.prototype.clearParent = function() {
  this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 time_created_ns = 2;
 * @return {number}
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.getTimeCreatedNs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.SetMasterRequest.prototype.setTimeCreatedNs = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool force_start_slave = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.tabletmanagerdata.SetMasterRequest.prototype.getForceStartSlave = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.tabletmanagerdata.SetMasterRequest.prototype.setForceStartSlave = function(value) {
  jspb.Message.setField(this, 3, value);
};



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
proto.tabletmanagerdata.SetMasterResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SetMasterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SetMasterResponse.displayName = 'proto.tabletmanagerdata.SetMasterResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SetMasterResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SetMasterResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SetMasterResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SetMasterResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SetMasterResponse}
 */
proto.tabletmanagerdata.SetMasterResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SetMasterResponse;
  return proto.tabletmanagerdata.SetMasterResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SetMasterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SetMasterResponse}
 */
proto.tabletmanagerdata.SetMasterResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SetMasterResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetMasterResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SetMasterResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SetMasterResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.SlaveWasRestartedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SlaveWasRestartedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SlaveWasRestartedRequest.displayName = 'proto.tabletmanagerdata.SlaveWasRestartedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SlaveWasRestartedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SlaveWasRestartedRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: (f = msg.getParent()) && topodata_pb.TabletAlias.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.SlaveWasRestartedRequest}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SlaveWasRestartedRequest;
  return proto.tabletmanagerdata.SlaveWasRestartedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SlaveWasRestartedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SlaveWasRestartedRequest}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new topodata_pb.TabletAlias;
      reader.readMessage(value,topodata_pb.TabletAlias.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SlaveWasRestartedRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getParent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      topodata_pb.TabletAlias.serializeBinaryToWriter
    );
  }
};


/**
 * optional topodata.TabletAlias parent = 1;
 * @return {?proto.topodata.TabletAlias}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.getParent = function() {
  return /** @type{?proto.topodata.TabletAlias} */ (
    jspb.Message.getWrapperField(this, topodata_pb.TabletAlias, 1));
};


/** @param {?proto.topodata.TabletAlias|undefined} value */
proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.setParent = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.clearParent = function() {
  this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.SlaveWasRestartedRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.SlaveWasRestartedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.SlaveWasRestartedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.SlaveWasRestartedResponse.displayName = 'proto.tabletmanagerdata.SlaveWasRestartedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.SlaveWasRestartedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.SlaveWasRestartedResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.SlaveWasRestartedResponse}
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.SlaveWasRestartedResponse;
  return proto.tabletmanagerdata.SlaveWasRestartedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.SlaveWasRestartedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.SlaveWasRestartedResponse}
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.SlaveWasRestartedResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.SlaveWasRestartedResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopReplicationAndGetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.displayName = 'proto.tabletmanagerdata.StopReplicationAndGetStatusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopReplicationAndGetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.StopReplicationAndGetStatusRequest}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopReplicationAndGetStatusRequest;
  return proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopReplicationAndGetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopReplicationAndGetStatusRequest}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopReplicationAndGetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.StopReplicationAndGetStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.displayName = 'proto.tabletmanagerdata.StopReplicationAndGetStatusResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.StopReplicationAndGetStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && replicationdata_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.StopReplicationAndGetStatusResponse}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.StopReplicationAndGetStatusResponse;
  return proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.StopReplicationAndGetStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.StopReplicationAndGetStatusResponse}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new replicationdata_pb.Status;
      reader.readMessage(value,replicationdata_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.StopReplicationAndGetStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      replicationdata_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional replicationdata.Status status = 1;
 * @return {?proto.replicationdata.Status}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.replicationdata.Status} */ (
    jspb.Message.getWrapperField(this, replicationdata_pb.Status, 1));
};


/** @param {?proto.replicationdata.Status|undefined} value */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.StopReplicationAndGetStatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.tabletmanagerdata.PromoteSlaveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PromoteSlaveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PromoteSlaveRequest.displayName = 'proto.tabletmanagerdata.PromoteSlaveRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PromoteSlaveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PromoteSlaveRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.tabletmanagerdata.PromoteSlaveRequest}
 */
proto.tabletmanagerdata.PromoteSlaveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PromoteSlaveRequest;
  return proto.tabletmanagerdata.PromoteSlaveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PromoteSlaveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PromoteSlaveRequest}
 */
proto.tabletmanagerdata.PromoteSlaveRequest.deserializeBinaryFromReader = function(msg, reader) {
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
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PromoteSlaveRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PromoteSlaveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};



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
proto.tabletmanagerdata.PromoteSlaveResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.PromoteSlaveResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.PromoteSlaveResponse.displayName = 'proto.tabletmanagerdata.PromoteSlaveResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.PromoteSlaveResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.PromoteSlaveResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.PromoteSlaveResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tabletmanagerdata.PromoteSlaveResponse}
 */
proto.tabletmanagerdata.PromoteSlaveResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.PromoteSlaveResponse;
  return proto.tabletmanagerdata.PromoteSlaveResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.PromoteSlaveResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.PromoteSlaveResponse}
 */
proto.tabletmanagerdata.PromoteSlaveResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.PromoteSlaveResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.PromoteSlaveResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.PromoteSlaveResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPosition();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string position = 1;
 * @return {string}
 */
proto.tabletmanagerdata.PromoteSlaveResponse.prototype.getPosition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.tabletmanagerdata.PromoteSlaveResponse.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.BackupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.BackupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.BackupRequest.displayName = 'proto.tabletmanagerdata.BackupRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.BackupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.BackupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.BackupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.BackupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    concurrency: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.tabletmanagerdata.BackupRequest}
 */
proto.tabletmanagerdata.BackupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.BackupRequest;
  return proto.tabletmanagerdata.BackupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.BackupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.BackupRequest}
 */
proto.tabletmanagerdata.BackupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConcurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.BackupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.BackupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.BackupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.BackupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getConcurrency();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 concurrency = 1;
 * @return {number}
 */
proto.tabletmanagerdata.BackupRequest.prototype.getConcurrency = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.tabletmanagerdata.BackupRequest.prototype.setConcurrency = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.tabletmanagerdata.BackupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tabletmanagerdata.BackupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.tabletmanagerdata.BackupResponse.displayName = 'proto.tabletmanagerdata.BackupResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tabletmanagerdata.BackupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tabletmanagerdata.BackupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tabletmanagerdata.BackupResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.tabletmanagerdata.BackupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: (f = msg.getEvent()) && logutil_pb.Event.toObject(includeInstance, f)
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
 * @return {!proto.tabletmanagerdata.BackupResponse}
 */
proto.tabletmanagerdata.BackupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tabletmanagerdata.BackupResponse;
  return proto.tabletmanagerdata.BackupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tabletmanagerdata.BackupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tabletmanagerdata.BackupResponse}
 */
proto.tabletmanagerdata.BackupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new logutil_pb.Event;
      reader.readMessage(value,logutil_pb.Event.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.tabletmanagerdata.BackupResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.BackupResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tabletmanagerdata.BackupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.tabletmanagerdata.BackupResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getEvent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      logutil_pb.Event.serializeBinaryToWriter
    );
  }
};


/**
 * optional logutil.Event event = 1;
 * @return {?proto.logutil.Event}
 */
proto.tabletmanagerdata.BackupResponse.prototype.getEvent = function() {
  return /** @type{?proto.logutil.Event} */ (
    jspb.Message.getWrapperField(this, logutil_pb.Event, 1));
};


/** @param {?proto.logutil.Event|undefined} value */
proto.tabletmanagerdata.BackupResponse.prototype.setEvent = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.tabletmanagerdata.BackupResponse.prototype.clearEvent = function() {
  this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.tabletmanagerdata.BackupResponse.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.tabletmanagerdata);
