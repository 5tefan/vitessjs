// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// This file contains the service definition for making management API
// calls to mysqlctld.
//
'use strict';
var grpc = require('grpc');
var mysqlctl_pb = require('./mysqlctl_pb.js');

function serialize_mysqlctl_RunMysqlUpgradeRequest(arg) {
  if (!(arg instanceof mysqlctl_pb.RunMysqlUpgradeRequest)) {
    throw new Error('Expected argument of type mysqlctl.RunMysqlUpgradeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mysqlctl_RunMysqlUpgradeRequest(buffer_arg) {
  return mysqlctl_pb.RunMysqlUpgradeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mysqlctl_RunMysqlUpgradeResponse(arg) {
  if (!(arg instanceof mysqlctl_pb.RunMysqlUpgradeResponse)) {
    throw new Error('Expected argument of type mysqlctl.RunMysqlUpgradeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mysqlctl_RunMysqlUpgradeResponse(buffer_arg) {
  return mysqlctl_pb.RunMysqlUpgradeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mysqlctl_ShutdownRequest(arg) {
  if (!(arg instanceof mysqlctl_pb.ShutdownRequest)) {
    throw new Error('Expected argument of type mysqlctl.ShutdownRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mysqlctl_ShutdownRequest(buffer_arg) {
  return mysqlctl_pb.ShutdownRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mysqlctl_ShutdownResponse(arg) {
  if (!(arg instanceof mysqlctl_pb.ShutdownResponse)) {
    throw new Error('Expected argument of type mysqlctl.ShutdownResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mysqlctl_ShutdownResponse(buffer_arg) {
  return mysqlctl_pb.ShutdownResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mysqlctl_StartRequest(arg) {
  if (!(arg instanceof mysqlctl_pb.StartRequest)) {
    throw new Error('Expected argument of type mysqlctl.StartRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mysqlctl_StartRequest(buffer_arg) {
  return mysqlctl_pb.StartRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mysqlctl_StartResponse(arg) {
  if (!(arg instanceof mysqlctl_pb.StartResponse)) {
    throw new Error('Expected argument of type mysqlctl.StartResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mysqlctl_StartResponse(buffer_arg) {
  return mysqlctl_pb.StartResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// MysqlCtl is the service definition
var MysqlCtlService = exports.MysqlCtlService = {
  start: {
    path: '/mysqlctl.MysqlCtl/Start',
    requestStream: false,
    responseStream: false,
    requestType: mysqlctl_pb.StartRequest,
    responseType: mysqlctl_pb.StartResponse,
    requestSerialize: serialize_mysqlctl_StartRequest,
    requestDeserialize: deserialize_mysqlctl_StartRequest,
    responseSerialize: serialize_mysqlctl_StartResponse,
    responseDeserialize: deserialize_mysqlctl_StartResponse,
  },
  shutdown: {
    path: '/mysqlctl.MysqlCtl/Shutdown',
    requestStream: false,
    responseStream: false,
    requestType: mysqlctl_pb.ShutdownRequest,
    responseType: mysqlctl_pb.ShutdownResponse,
    requestSerialize: serialize_mysqlctl_ShutdownRequest,
    requestDeserialize: deserialize_mysqlctl_ShutdownRequest,
    responseSerialize: serialize_mysqlctl_ShutdownResponse,
    responseDeserialize: deserialize_mysqlctl_ShutdownResponse,
  },
  runMysqlUpgrade: {
    path: '/mysqlctl.MysqlCtl/RunMysqlUpgrade',
    requestStream: false,
    responseStream: false,
    requestType: mysqlctl_pb.RunMysqlUpgradeRequest,
    responseType: mysqlctl_pb.RunMysqlUpgradeResponse,
    requestSerialize: serialize_mysqlctl_RunMysqlUpgradeRequest,
    requestDeserialize: deserialize_mysqlctl_RunMysqlUpgradeRequest,
    responseSerialize: serialize_mysqlctl_RunMysqlUpgradeResponse,
    responseDeserialize: deserialize_mysqlctl_RunMysqlUpgradeResponse,
  },
};

exports.MysqlCtlClient = grpc.makeGenericClientConstructor(MysqlCtlService);
