// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// This file contains the service VtTablet exposes for queries.
//
'use strict';
var grpc = require('grpc');
var query_pb = require('./query_pb.js');

function serialize_query_BeginExecuteBatchRequest(arg) {
  if (!(arg instanceof query_pb.BeginExecuteBatchRequest)) {
    throw new Error('Expected argument of type query.BeginExecuteBatchRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_BeginExecuteBatchRequest(buffer_arg) {
  return query_pb.BeginExecuteBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_BeginExecuteBatchResponse(arg) {
  if (!(arg instanceof query_pb.BeginExecuteBatchResponse)) {
    throw new Error('Expected argument of type query.BeginExecuteBatchResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_BeginExecuteBatchResponse(buffer_arg) {
  return query_pb.BeginExecuteBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_BeginExecuteRequest(arg) {
  if (!(arg instanceof query_pb.BeginExecuteRequest)) {
    throw new Error('Expected argument of type query.BeginExecuteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_BeginExecuteRequest(buffer_arg) {
  return query_pb.BeginExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_BeginExecuteResponse(arg) {
  if (!(arg instanceof query_pb.BeginExecuteResponse)) {
    throw new Error('Expected argument of type query.BeginExecuteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_BeginExecuteResponse(buffer_arg) {
  return query_pb.BeginExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_BeginRequest(arg) {
  if (!(arg instanceof query_pb.BeginRequest)) {
    throw new Error('Expected argument of type query.BeginRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_BeginRequest(buffer_arg) {
  return query_pb.BeginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_BeginResponse(arg) {
  if (!(arg instanceof query_pb.BeginResponse)) {
    throw new Error('Expected argument of type query.BeginResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_BeginResponse(buffer_arg) {
  return query_pb.BeginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_CommitRequest(arg) {
  if (!(arg instanceof query_pb.CommitRequest)) {
    throw new Error('Expected argument of type query.CommitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_CommitRequest(buffer_arg) {
  return query_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_CommitResponse(arg) {
  if (!(arg instanceof query_pb.CommitResponse)) {
    throw new Error('Expected argument of type query.CommitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_CommitResponse(buffer_arg) {
  return query_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_ExecuteBatchRequest(arg) {
  if (!(arg instanceof query_pb.ExecuteBatchRequest)) {
    throw new Error('Expected argument of type query.ExecuteBatchRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_ExecuteBatchRequest(buffer_arg) {
  return query_pb.ExecuteBatchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_ExecuteBatchResponse(arg) {
  if (!(arg instanceof query_pb.ExecuteBatchResponse)) {
    throw new Error('Expected argument of type query.ExecuteBatchResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_ExecuteBatchResponse(buffer_arg) {
  return query_pb.ExecuteBatchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_ExecuteRequest(arg) {
  if (!(arg instanceof query_pb.ExecuteRequest)) {
    throw new Error('Expected argument of type query.ExecuteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_ExecuteRequest(buffer_arg) {
  return query_pb.ExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_ExecuteResponse(arg) {
  if (!(arg instanceof query_pb.ExecuteResponse)) {
    throw new Error('Expected argument of type query.ExecuteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_ExecuteResponse(buffer_arg) {
  return query_pb.ExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_RollbackRequest(arg) {
  if (!(arg instanceof query_pb.RollbackRequest)) {
    throw new Error('Expected argument of type query.RollbackRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_RollbackRequest(buffer_arg) {
  return query_pb.RollbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_RollbackResponse(arg) {
  if (!(arg instanceof query_pb.RollbackResponse)) {
    throw new Error('Expected argument of type query.RollbackResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_RollbackResponse(buffer_arg) {
  return query_pb.RollbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_SplitQueryRequest(arg) {
  if (!(arg instanceof query_pb.SplitQueryRequest)) {
    throw new Error('Expected argument of type query.SplitQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_SplitQueryRequest(buffer_arg) {
  return query_pb.SplitQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_SplitQueryResponse(arg) {
  if (!(arg instanceof query_pb.SplitQueryResponse)) {
    throw new Error('Expected argument of type query.SplitQueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_SplitQueryResponse(buffer_arg) {
  return query_pb.SplitQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_StreamExecuteRequest(arg) {
  if (!(arg instanceof query_pb.StreamExecuteRequest)) {
    throw new Error('Expected argument of type query.StreamExecuteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_StreamExecuteRequest(buffer_arg) {
  return query_pb.StreamExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_StreamExecuteResponse(arg) {
  if (!(arg instanceof query_pb.StreamExecuteResponse)) {
    throw new Error('Expected argument of type query.StreamExecuteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_StreamExecuteResponse(buffer_arg) {
  return query_pb.StreamExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_StreamHealthRequest(arg) {
  if (!(arg instanceof query_pb.StreamHealthRequest)) {
    throw new Error('Expected argument of type query.StreamHealthRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_StreamHealthRequest(buffer_arg) {
  return query_pb.StreamHealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_query_StreamHealthResponse(arg) {
  if (!(arg instanceof query_pb.StreamHealthResponse)) {
    throw new Error('Expected argument of type query.StreamHealthResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_query_StreamHealthResponse(buffer_arg) {
  return query_pb.StreamHealthResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Query defines the tablet query service, implemented by vttablet.
var QueryService = exports.QueryService = {
  // Execute executes the specified SQL query (might be in a
  // transaction context, if Query.transaction_id is set).
  execute: {
    path: '/queryservice.Query/Execute',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.ExecuteRequest,
    responseType: query_pb.ExecuteResponse,
    requestSerialize: serialize_query_ExecuteRequest,
    requestDeserialize: deserialize_query_ExecuteRequest,
    responseSerialize: serialize_query_ExecuteResponse,
    responseDeserialize: deserialize_query_ExecuteResponse,
  },
  // ExecuteBatch executes a list of queries, and returns the result
  // for each query.
  executeBatch: {
    path: '/queryservice.Query/ExecuteBatch',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.ExecuteBatchRequest,
    responseType: query_pb.ExecuteBatchResponse,
    requestSerialize: serialize_query_ExecuteBatchRequest,
    requestDeserialize: deserialize_query_ExecuteBatchRequest,
    responseSerialize: serialize_query_ExecuteBatchResponse,
    responseDeserialize: deserialize_query_ExecuteBatchResponse,
  },
  // StreamExecute executes a streaming query. Use this method if the
  // query returns a large number of rows. The first QueryResult will
  // contain the Fields, subsequent QueryResult messages will contain
  // the rows.
  streamExecute: {
    path: '/queryservice.Query/StreamExecute',
    requestStream: false,
    responseStream: true,
    requestType: query_pb.StreamExecuteRequest,
    responseType: query_pb.StreamExecuteResponse,
    requestSerialize: serialize_query_StreamExecuteRequest,
    requestDeserialize: deserialize_query_StreamExecuteRequest,
    responseSerialize: serialize_query_StreamExecuteResponse,
    responseDeserialize: deserialize_query_StreamExecuteResponse,
  },
  // Begin a transaction.
  begin: {
    path: '/queryservice.Query/Begin',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.BeginRequest,
    responseType: query_pb.BeginResponse,
    requestSerialize: serialize_query_BeginRequest,
    requestDeserialize: deserialize_query_BeginRequest,
    responseSerialize: serialize_query_BeginResponse,
    responseDeserialize: deserialize_query_BeginResponse,
  },
  // Commit a transaction.
  commit: {
    path: '/queryservice.Query/Commit',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.CommitRequest,
    responseType: query_pb.CommitResponse,
    requestSerialize: serialize_query_CommitRequest,
    requestDeserialize: deserialize_query_CommitRequest,
    responseSerialize: serialize_query_CommitResponse,
    responseDeserialize: deserialize_query_CommitResponse,
  },
  // Rollback a transaction.
  rollback: {
    path: '/queryservice.Query/Rollback',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.RollbackRequest,
    responseType: query_pb.RollbackResponse,
    requestSerialize: serialize_query_RollbackRequest,
    requestDeserialize: deserialize_query_RollbackRequest,
    responseSerialize: serialize_query_RollbackResponse,
    responseDeserialize: deserialize_query_RollbackResponse,
  },
  // BeginExecute executes a begin and the specified SQL query.
  beginExecute: {
    path: '/queryservice.Query/BeginExecute',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.BeginExecuteRequest,
    responseType: query_pb.BeginExecuteResponse,
    requestSerialize: serialize_query_BeginExecuteRequest,
    requestDeserialize: deserialize_query_BeginExecuteRequest,
    responseSerialize: serialize_query_BeginExecuteResponse,
    responseDeserialize: deserialize_query_BeginExecuteResponse,
  },
  // BeginExecuteBatch executes a begin and a list of queries.
  beginExecuteBatch: {
    path: '/queryservice.Query/BeginExecuteBatch',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.BeginExecuteBatchRequest,
    responseType: query_pb.BeginExecuteBatchResponse,
    requestSerialize: serialize_query_BeginExecuteBatchRequest,
    requestDeserialize: deserialize_query_BeginExecuteBatchRequest,
    responseSerialize: serialize_query_BeginExecuteBatchResponse,
    responseDeserialize: deserialize_query_BeginExecuteBatchResponse,
  },
  // SplitQuery is the API to facilitate MapReduce-type iterations
  // over large data sets (like full table dumps).
  splitQuery: {
    path: '/queryservice.Query/SplitQuery',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.SplitQueryRequest,
    responseType: query_pb.SplitQueryResponse,
    requestSerialize: serialize_query_SplitQueryRequest,
    requestDeserialize: deserialize_query_SplitQueryRequest,
    responseSerialize: serialize_query_SplitQueryResponse,
    responseDeserialize: deserialize_query_SplitQueryResponse,
  },
  // StreamHealth runs a streaming RPC to the tablet, that returns the
  // current health of the tablet on a regular basis.
  streamHealth: {
    path: '/queryservice.Query/StreamHealth',
    requestStream: false,
    responseStream: true,
    requestType: query_pb.StreamHealthRequest,
    responseType: query_pb.StreamHealthResponse,
    requestSerialize: serialize_query_StreamHealthRequest,
    requestDeserialize: deserialize_query_StreamHealthRequest,
    responseSerialize: serialize_query_StreamHealthResponse,
    responseDeserialize: deserialize_query_StreamHealthResponse,
  },
};

exports.QueryClient = grpc.makeGenericClientConstructor(QueryService);
