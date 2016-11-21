// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// This package contains a service allowing you to use vtctld as a
// proxy for vt commands.
//
'use strict';
var grpc = require('grpc');
var vtctldata_pb = require('./vtctldata_pb.js');

function serialize_vtctldata_ExecuteVtctlCommandRequest(arg) {
  if (!(arg instanceof vtctldata_pb.ExecuteVtctlCommandRequest)) {
    throw new Error('Expected argument of type vtctldata.ExecuteVtctlCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtctldata_ExecuteVtctlCommandRequest(buffer_arg) {
  return vtctldata_pb.ExecuteVtctlCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtctldata_ExecuteVtctlCommandResponse(arg) {
  if (!(arg instanceof vtctldata_pb.ExecuteVtctlCommandResponse)) {
    throw new Error('Expected argument of type vtctldata.ExecuteVtctlCommandResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtctldata_ExecuteVtctlCommandResponse(buffer_arg) {
  return vtctldata_pb.ExecuteVtctlCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service Vtctl allows you to call vt commands through gRPC.
var VtctlService = exports.VtctlService = {
  executeVtctlCommand: {
    path: '/vtctlservice.Vtctl/ExecuteVtctlCommand',
    requestStream: false,
    responseStream: true,
    requestType: vtctldata_pb.ExecuteVtctlCommandRequest,
    responseType: vtctldata_pb.ExecuteVtctlCommandResponse,
    requestSerialize: serialize_vtctldata_ExecuteVtctlCommandRequest,
    requestDeserialize: deserialize_vtctldata_ExecuteVtctlCommandRequest,
    responseSerialize: serialize_vtctldata_ExecuteVtctlCommandResponse,
    responseDeserialize: deserialize_vtctldata_ExecuteVtctlCommandResponse,
  },
};

exports.VtctlClient = grpc.makeGenericClientConstructor(VtctlService);
