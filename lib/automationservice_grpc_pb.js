// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Protobuf service for the automation framework.
//
'use strict';
var grpc = require('grpc');
var automation_pb = require('./automation_pb.js');

function serialize_automation_EnqueueClusterOperationRequest(arg) {
  if (!(arg instanceof automation_pb.EnqueueClusterOperationRequest)) {
    throw new Error('Expected argument of type automation.EnqueueClusterOperationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_automation_EnqueueClusterOperationRequest(buffer_arg) {
  return automation_pb.EnqueueClusterOperationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automation_EnqueueClusterOperationResponse(arg) {
  if (!(arg instanceof automation_pb.EnqueueClusterOperationResponse)) {
    throw new Error('Expected argument of type automation.EnqueueClusterOperationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_automation_EnqueueClusterOperationResponse(buffer_arg) {
  return automation_pb.EnqueueClusterOperationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automation_GetClusterOperationDetailsRequest(arg) {
  if (!(arg instanceof automation_pb.GetClusterOperationDetailsRequest)) {
    throw new Error('Expected argument of type automation.GetClusterOperationDetailsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_automation_GetClusterOperationDetailsRequest(buffer_arg) {
  return automation_pb.GetClusterOperationDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automation_GetClusterOperationDetailsResponse(arg) {
  if (!(arg instanceof automation_pb.GetClusterOperationDetailsResponse)) {
    throw new Error('Expected argument of type automation.GetClusterOperationDetailsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_automation_GetClusterOperationDetailsResponse(buffer_arg) {
  return automation_pb.GetClusterOperationDetailsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutomationService = exports.AutomationService = {
  // Start a cluster operation.
  enqueueClusterOperation: {
    path: '/automationservice.Automation/EnqueueClusterOperation',
    requestStream: false,
    responseStream: false,
    requestType: automation_pb.EnqueueClusterOperationRequest,
    responseType: automation_pb.EnqueueClusterOperationResponse,
    requestSerialize: serialize_automation_EnqueueClusterOperationRequest,
    requestDeserialize: deserialize_automation_EnqueueClusterOperationRequest,
    responseSerialize: serialize_automation_EnqueueClusterOperationResponse,
    responseDeserialize: deserialize_automation_EnqueueClusterOperationResponse,
  },
  // TODO(mberlin): Polling this is bad. Implement a subscribe mechanism to wait for changes?
  // Get all details of an active cluster operation.
  getClusterOperationDetails: {
    path: '/automationservice.Automation/GetClusterOperationDetails',
    requestStream: false,
    responseStream: false,
    requestType: automation_pb.GetClusterOperationDetailsRequest,
    responseType: automation_pb.GetClusterOperationDetailsResponse,
    requestSerialize: serialize_automation_GetClusterOperationDetailsRequest,
    requestDeserialize: deserialize_automation_GetClusterOperationDetailsRequest,
    responseSerialize: serialize_automation_GetClusterOperationDetailsResponse,
    responseDeserialize: deserialize_automation_GetClusterOperationDetailsResponse,
  },
};

exports.AutomationClient = grpc.makeGenericClientConstructor(AutomationService);
