// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// This file contains all the types and servers necessary to make
// RPC calls to VtTablet for the binlog protocol.
//
'use strict';
var grpc = require('grpc');
var binlogdata_pb = require('./binlogdata_pb.js');

function serialize_binlogdata_StreamKeyRangeRequest(arg) {
  if (!(arg instanceof binlogdata_pb.StreamKeyRangeRequest)) {
    throw new Error('Expected argument of type binlogdata.StreamKeyRangeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_binlogdata_StreamKeyRangeRequest(buffer_arg) {
  return binlogdata_pb.StreamKeyRangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_binlogdata_StreamKeyRangeResponse(arg) {
  if (!(arg instanceof binlogdata_pb.StreamKeyRangeResponse)) {
    throw new Error('Expected argument of type binlogdata.StreamKeyRangeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_binlogdata_StreamKeyRangeResponse(buffer_arg) {
  return binlogdata_pb.StreamKeyRangeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_binlogdata_StreamTablesRequest(arg) {
  if (!(arg instanceof binlogdata_pb.StreamTablesRequest)) {
    throw new Error('Expected argument of type binlogdata.StreamTablesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_binlogdata_StreamTablesRequest(buffer_arg) {
  return binlogdata_pb.StreamTablesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_binlogdata_StreamTablesResponse(arg) {
  if (!(arg instanceof binlogdata_pb.StreamTablesResponse)) {
    throw new Error('Expected argument of type binlogdata.StreamTablesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_binlogdata_StreamTablesResponse(buffer_arg) {
  return binlogdata_pb.StreamTablesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_binlogdata_StreamUpdateRequest(arg) {
  if (!(arg instanceof binlogdata_pb.StreamUpdateRequest)) {
    throw new Error('Expected argument of type binlogdata.StreamUpdateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_binlogdata_StreamUpdateRequest(buffer_arg) {
  return binlogdata_pb.StreamUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_binlogdata_StreamUpdateResponse(arg) {
  if (!(arg instanceof binlogdata_pb.StreamUpdateResponse)) {
    throw new Error('Expected argument of type binlogdata.StreamUpdateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_binlogdata_StreamUpdateResponse(buffer_arg) {
  return binlogdata_pb.StreamUpdateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// UpdateStream is the RPC version of binlog.UpdateStream.
var UpdateStreamService = exports.UpdateStreamService = {
  // StreamUpdate streams the binlog events, to know which objects have changed.
  streamUpdate: {
    path: '/binlogservice.UpdateStream/StreamUpdate',
    requestStream: false,
    responseStream: true,
    requestType: binlogdata_pb.StreamUpdateRequest,
    responseType: binlogdata_pb.StreamUpdateResponse,
    requestSerialize: serialize_binlogdata_StreamUpdateRequest,
    requestDeserialize: deserialize_binlogdata_StreamUpdateRequest,
    responseSerialize: serialize_binlogdata_StreamUpdateResponse,
    responseDeserialize: deserialize_binlogdata_StreamUpdateResponse,
  },
  // StreamKeyRange returns the binlog transactions related to
  // the specified Keyrange.
  streamKeyRange: {
    path: '/binlogservice.UpdateStream/StreamKeyRange',
    requestStream: false,
    responseStream: true,
    requestType: binlogdata_pb.StreamKeyRangeRequest,
    responseType: binlogdata_pb.StreamKeyRangeResponse,
    requestSerialize: serialize_binlogdata_StreamKeyRangeRequest,
    requestDeserialize: deserialize_binlogdata_StreamKeyRangeRequest,
    responseSerialize: serialize_binlogdata_StreamKeyRangeResponse,
    responseDeserialize: deserialize_binlogdata_StreamKeyRangeResponse,
  },
  // StreamTables returns the binlog transactions related to
  // the specified Tables.
  streamTables: {
    path: '/binlogservice.UpdateStream/StreamTables',
    requestStream: false,
    responseStream: true,
    requestType: binlogdata_pb.StreamTablesRequest,
    responseType: binlogdata_pb.StreamTablesResponse,
    requestSerialize: serialize_binlogdata_StreamTablesRequest,
    requestDeserialize: deserialize_binlogdata_StreamTablesRequest,
    responseSerialize: serialize_binlogdata_StreamTablesResponse,
    responseDeserialize: deserialize_binlogdata_StreamTablesResponse,
  },
};

exports.UpdateStreamClient = grpc.makeGenericClientConstructor(UpdateStreamService);
