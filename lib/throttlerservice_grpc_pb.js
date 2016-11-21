// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// gRPC RPC interface for the internal resharding throttler (go/vt/throttler)
// which is used by the resharding clone process (vtworker) and filtered
// replication (vttablet).
//
'use strict';
var grpc = require('grpc');
var throttlerdata_pb = require('./throttlerdata_pb.js');

function serialize_throttlerdata_MaxRatesRequest(arg) {
  if (!(arg instanceof throttlerdata_pb.MaxRatesRequest)) {
    throw new Error('Expected argument of type throttlerdata.MaxRatesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_throttlerdata_MaxRatesRequest(buffer_arg) {
  return throttlerdata_pb.MaxRatesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_throttlerdata_MaxRatesResponse(arg) {
  if (!(arg instanceof throttlerdata_pb.MaxRatesResponse)) {
    throw new Error('Expected argument of type throttlerdata.MaxRatesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_throttlerdata_MaxRatesResponse(buffer_arg) {
  return throttlerdata_pb.MaxRatesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_throttlerdata_SetMaxRateRequest(arg) {
  if (!(arg instanceof throttlerdata_pb.SetMaxRateRequest)) {
    throw new Error('Expected argument of type throttlerdata.SetMaxRateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_throttlerdata_SetMaxRateRequest(buffer_arg) {
  return throttlerdata_pb.SetMaxRateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_throttlerdata_SetMaxRateResponse(arg) {
  if (!(arg instanceof throttlerdata_pb.SetMaxRateResponse)) {
    throw new Error('Expected argument of type throttlerdata.SetMaxRateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_throttlerdata_SetMaxRateResponse(buffer_arg) {
  return throttlerdata_pb.SetMaxRateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Throttler defines the throttler RPC calls.
var ThrottlerService = exports.ThrottlerService = {
  // MaxRates returns the current max rate for each throttler of the process.
  maxRates: {
    path: '/throttlerservice.Throttler/MaxRates',
    requestStream: false,
    responseStream: false,
    requestType: throttlerdata_pb.MaxRatesRequest,
    responseType: throttlerdata_pb.MaxRatesResponse,
    requestSerialize: serialize_throttlerdata_MaxRatesRequest,
    requestDeserialize: deserialize_throttlerdata_MaxRatesRequest,
    responseSerialize: serialize_throttlerdata_MaxRatesResponse,
    responseDeserialize: deserialize_throttlerdata_MaxRatesResponse,
  },
  // SetMaxRate allows to change the current max rate for all throttlers
  // of the process.
  setMaxRate: {
    path: '/throttlerservice.Throttler/SetMaxRate',
    requestStream: false,
    responseStream: false,
    requestType: throttlerdata_pb.SetMaxRateRequest,
    responseType: throttlerdata_pb.SetMaxRateResponse,
    requestSerialize: serialize_throttlerdata_SetMaxRateRequest,
    requestDeserialize: deserialize_throttlerdata_SetMaxRateRequest,
    responseSerialize: serialize_throttlerdata_SetMaxRateResponse,
    responseDeserialize: deserialize_throttlerdata_SetMaxRateResponse,
  },
};

exports.ThrottlerClient = grpc.makeGenericClientConstructor(ThrottlerService);
