// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// RPC interface for vtworker.
// The interface is very similar to the vtctld interface (see vtctlservice.proto).
//
'use strict';
var grpc = require('grpc');
var vtworkerdata_pb = require('./vtworkerdata_pb.js');

function serialize_vtworkerdata_ExecuteVtworkerCommandRequest(arg) {
  if (!(arg instanceof vtworkerdata_pb.ExecuteVtworkerCommandRequest)) {
    throw new Error('Expected argument of type vtworkerdata.ExecuteVtworkerCommandRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtworkerdata_ExecuteVtworkerCommandRequest(buffer_arg) {
  return vtworkerdata_pb.ExecuteVtworkerCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtworkerdata_ExecuteVtworkerCommandResponse(arg) {
  if (!(arg instanceof vtworkerdata_pb.ExecuteVtworkerCommandResponse)) {
    throw new Error('Expected argument of type vtworkerdata.ExecuteVtworkerCommandResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtworkerdata_ExecuteVtworkerCommandResponse(buffer_arg) {
  return vtworkerdata_pb.ExecuteVtworkerCommandResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Vtworker contains the vtworker RPC calls.
var VtworkerService = exports.VtworkerService = {
  // ExecuteVtworkerCommand allows to run a vtworker command by specifying the
  // same arguments as on the command line.
  executeVtworkerCommand: {
    path: '/vtworkerservice.Vtworker/ExecuteVtworkerCommand',
    requestStream: false,
    responseStream: true,
    requestType: vtworkerdata_pb.ExecuteVtworkerCommandRequest,
    responseType: vtworkerdata_pb.ExecuteVtworkerCommandResponse,
    requestSerialize: serialize_vtworkerdata_ExecuteVtworkerCommandRequest,
    requestDeserialize: deserialize_vtworkerdata_ExecuteVtworkerCommandRequest,
    responseSerialize: serialize_vtworkerdata_ExecuteVtworkerCommandResponse,
    responseDeserialize: deserialize_vtworkerdata_ExecuteVtworkerCommandResponse,
  },
};

exports.VtworkerClient = grpc.makeGenericClientConstructor(VtworkerService);
