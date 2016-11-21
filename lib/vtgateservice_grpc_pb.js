// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Service definition for vtgateservice.
// This is the main entry point to Vitess.
//
'use strict';
var grpc = require('grpc');
var vtgate_pb = require('./vtgate_pb.js');

function serialize_vtgate_BeginRequest(arg) {
  if (!(arg instanceof vtgate_pb.BeginRequest)) {
    throw new Error('Expected argument of type vtgate.BeginRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_BeginRequest(buffer_arg) {
  return vtgate_pb.BeginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_BeginResponse(arg) {
  if (!(arg instanceof vtgate_pb.BeginResponse)) {
    throw new Error('Expected argument of type vtgate.BeginResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_BeginResponse(buffer_arg) {
  return vtgate_pb.BeginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_CommitRequest(arg) {
  if (!(arg instanceof vtgate_pb.CommitRequest)) {
    throw new Error('Expected argument of type vtgate.CommitRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_CommitRequest(buffer_arg) {
  return vtgate_pb.CommitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_CommitResponse(arg) {
  if (!(arg instanceof vtgate_pb.CommitResponse)) {
    throw new Error('Expected argument of type vtgate.CommitResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_CommitResponse(buffer_arg) {
  return vtgate_pb.CommitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteBatchKeyspaceIdsRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteBatchKeyspaceIdsRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteBatchKeyspaceIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteBatchKeyspaceIdsRequest(buffer_arg) {
  return vtgate_pb.ExecuteBatchKeyspaceIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteBatchKeyspaceIdsResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteBatchKeyspaceIdsResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteBatchKeyspaceIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteBatchKeyspaceIdsResponse(buffer_arg) {
  return vtgate_pb.ExecuteBatchKeyspaceIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteBatchShardsRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteBatchShardsRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteBatchShardsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteBatchShardsRequest(buffer_arg) {
  return vtgate_pb.ExecuteBatchShardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteBatchShardsResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteBatchShardsResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteBatchShardsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteBatchShardsResponse(buffer_arg) {
  return vtgate_pb.ExecuteBatchShardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteEntityIdsRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteEntityIdsRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteEntityIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteEntityIdsRequest(buffer_arg) {
  return vtgate_pb.ExecuteEntityIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteEntityIdsResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteEntityIdsResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteEntityIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteEntityIdsResponse(buffer_arg) {
  return vtgate_pb.ExecuteEntityIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteKeyRangesRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteKeyRangesRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteKeyRangesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteKeyRangesRequest(buffer_arg) {
  return vtgate_pb.ExecuteKeyRangesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteKeyRangesResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteKeyRangesResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteKeyRangesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteKeyRangesResponse(buffer_arg) {
  return vtgate_pb.ExecuteKeyRangesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteKeyspaceIdsRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteKeyspaceIdsRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteKeyspaceIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteKeyspaceIdsRequest(buffer_arg) {
  return vtgate_pb.ExecuteKeyspaceIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteKeyspaceIdsResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteKeyspaceIdsResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteKeyspaceIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteKeyspaceIdsResponse(buffer_arg) {
  return vtgate_pb.ExecuteKeyspaceIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteRequest(buffer_arg) {
  return vtgate_pb.ExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteResponse(buffer_arg) {
  return vtgate_pb.ExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteShardsRequest(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteShardsRequest)) {
    throw new Error('Expected argument of type vtgate.ExecuteShardsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteShardsRequest(buffer_arg) {
  return vtgate_pb.ExecuteShardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_ExecuteShardsResponse(arg) {
  if (!(arg instanceof vtgate_pb.ExecuteShardsResponse)) {
    throw new Error('Expected argument of type vtgate.ExecuteShardsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_ExecuteShardsResponse(buffer_arg) {
  return vtgate_pb.ExecuteShardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_GetSrvKeyspaceRequest(arg) {
  if (!(arg instanceof vtgate_pb.GetSrvKeyspaceRequest)) {
    throw new Error('Expected argument of type vtgate.GetSrvKeyspaceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_GetSrvKeyspaceRequest(buffer_arg) {
  return vtgate_pb.GetSrvKeyspaceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_GetSrvKeyspaceResponse(arg) {
  if (!(arg instanceof vtgate_pb.GetSrvKeyspaceResponse)) {
    throw new Error('Expected argument of type vtgate.GetSrvKeyspaceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_GetSrvKeyspaceResponse(buffer_arg) {
  return vtgate_pb.GetSrvKeyspaceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_RollbackRequest(arg) {
  if (!(arg instanceof vtgate_pb.RollbackRequest)) {
    throw new Error('Expected argument of type vtgate.RollbackRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_RollbackRequest(buffer_arg) {
  return vtgate_pb.RollbackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_RollbackResponse(arg) {
  if (!(arg instanceof vtgate_pb.RollbackResponse)) {
    throw new Error('Expected argument of type vtgate.RollbackResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_RollbackResponse(buffer_arg) {
  return vtgate_pb.RollbackResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_SplitQueryRequest(arg) {
  if (!(arg instanceof vtgate_pb.SplitQueryRequest)) {
    throw new Error('Expected argument of type vtgate.SplitQueryRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_SplitQueryRequest(buffer_arg) {
  return vtgate_pb.SplitQueryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_SplitQueryResponse(arg) {
  if (!(arg instanceof vtgate_pb.SplitQueryResponse)) {
    throw new Error('Expected argument of type vtgate.SplitQueryResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_SplitQueryResponse(buffer_arg) {
  return vtgate_pb.SplitQueryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteKeyRangesRequest(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteKeyRangesRequest)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteKeyRangesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteKeyRangesRequest(buffer_arg) {
  return vtgate_pb.StreamExecuteKeyRangesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteKeyRangesResponse(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteKeyRangesResponse)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteKeyRangesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteKeyRangesResponse(buffer_arg) {
  return vtgate_pb.StreamExecuteKeyRangesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteKeyspaceIdsRequest(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteKeyspaceIdsRequest)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteKeyspaceIdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteKeyspaceIdsRequest(buffer_arg) {
  return vtgate_pb.StreamExecuteKeyspaceIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteKeyspaceIdsResponse(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteKeyspaceIdsResponse)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteKeyspaceIdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteKeyspaceIdsResponse(buffer_arg) {
  return vtgate_pb.StreamExecuteKeyspaceIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteRequest(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteRequest)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteRequest(buffer_arg) {
  return vtgate_pb.StreamExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteResponse(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteResponse)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteResponse(buffer_arg) {
  return vtgate_pb.StreamExecuteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteShardsRequest(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteShardsRequest)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteShardsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteShardsRequest(buffer_arg) {
  return vtgate_pb.StreamExecuteShardsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_vtgate_StreamExecuteShardsResponse(arg) {
  if (!(arg instanceof vtgate_pb.StreamExecuteShardsResponse)) {
    throw new Error('Expected argument of type vtgate.StreamExecuteShardsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_vtgate_StreamExecuteShardsResponse(buffer_arg) {
  return vtgate_pb.StreamExecuteShardsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Vitess is the main service to access a Vitess cluster. It is the API that vtgate
// exposes to serve all queries.
var VitessService = exports.VitessService = {
  // Execute tries to route the query to the right shard.
  // It depends on the query and bind variables to provide enough
  // information in conjonction with the vindexes to route the query.
  // API group: v3 API (alpha)
  execute: {
    path: '/vtgateservice.Vitess/Execute',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteRequest,
    responseType: vtgate_pb.ExecuteResponse,
    requestSerialize: serialize_vtgate_ExecuteRequest,
    requestDeserialize: deserialize_vtgate_ExecuteRequest,
    responseSerialize: serialize_vtgate_ExecuteResponse,
    responseDeserialize: deserialize_vtgate_ExecuteResponse,
  },
  // ExecuteShards executes the query on the specified shards.
  // API group: Custom Sharding
  executeShards: {
    path: '/vtgateservice.Vitess/ExecuteShards',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteShardsRequest,
    responseType: vtgate_pb.ExecuteShardsResponse,
    requestSerialize: serialize_vtgate_ExecuteShardsRequest,
    requestDeserialize: deserialize_vtgate_ExecuteShardsRequest,
    responseSerialize: serialize_vtgate_ExecuteShardsResponse,
    responseDeserialize: deserialize_vtgate_ExecuteShardsResponse,
  },
  // ExecuteKeyspaceIds executes the query based on the specified keyspace ids.
  // API group: Range-based Sharding
  executeKeyspaceIds: {
    path: '/vtgateservice.Vitess/ExecuteKeyspaceIds',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteKeyspaceIdsRequest,
    responseType: vtgate_pb.ExecuteKeyspaceIdsResponse,
    requestSerialize: serialize_vtgate_ExecuteKeyspaceIdsRequest,
    requestDeserialize: deserialize_vtgate_ExecuteKeyspaceIdsRequest,
    responseSerialize: serialize_vtgate_ExecuteKeyspaceIdsResponse,
    responseDeserialize: deserialize_vtgate_ExecuteKeyspaceIdsResponse,
  },
  // ExecuteKeyRanges executes the query based on the specified key ranges.
  // API group: Range-based Sharding
  executeKeyRanges: {
    path: '/vtgateservice.Vitess/ExecuteKeyRanges',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteKeyRangesRequest,
    responseType: vtgate_pb.ExecuteKeyRangesResponse,
    requestSerialize: serialize_vtgate_ExecuteKeyRangesRequest,
    requestDeserialize: deserialize_vtgate_ExecuteKeyRangesRequest,
    responseSerialize: serialize_vtgate_ExecuteKeyRangesResponse,
    responseDeserialize: deserialize_vtgate_ExecuteKeyRangesResponse,
  },
  // ExecuteEntityIds executes the query based on the specified external id to keyspace id map.
  // API group: Range-based Sharding
  executeEntityIds: {
    path: '/vtgateservice.Vitess/ExecuteEntityIds',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteEntityIdsRequest,
    responseType: vtgate_pb.ExecuteEntityIdsResponse,
    requestSerialize: serialize_vtgate_ExecuteEntityIdsRequest,
    requestDeserialize: deserialize_vtgate_ExecuteEntityIdsRequest,
    responseSerialize: serialize_vtgate_ExecuteEntityIdsResponse,
    responseDeserialize: deserialize_vtgate_ExecuteEntityIdsResponse,
  },
  // ExecuteBatchShards executes the list of queries on the specified shards.
  // API group: Custom Sharding
  executeBatchShards: {
    path: '/vtgateservice.Vitess/ExecuteBatchShards',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteBatchShardsRequest,
    responseType: vtgate_pb.ExecuteBatchShardsResponse,
    requestSerialize: serialize_vtgate_ExecuteBatchShardsRequest,
    requestDeserialize: deserialize_vtgate_ExecuteBatchShardsRequest,
    responseSerialize: serialize_vtgate_ExecuteBatchShardsResponse,
    responseDeserialize: deserialize_vtgate_ExecuteBatchShardsResponse,
  },
  // ExecuteBatchKeyspaceIds executes the list of queries based on the specified keyspace ids.
  // API group: Range-based Sharding
  executeBatchKeyspaceIds: {
    path: '/vtgateservice.Vitess/ExecuteBatchKeyspaceIds',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.ExecuteBatchKeyspaceIdsRequest,
    responseType: vtgate_pb.ExecuteBatchKeyspaceIdsResponse,
    requestSerialize: serialize_vtgate_ExecuteBatchKeyspaceIdsRequest,
    requestDeserialize: deserialize_vtgate_ExecuteBatchKeyspaceIdsRequest,
    responseSerialize: serialize_vtgate_ExecuteBatchKeyspaceIdsResponse,
    responseDeserialize: deserialize_vtgate_ExecuteBatchKeyspaceIdsResponse,
  },
  // StreamExecute executes a streaming query based on shards.
  // It depends on the query and bind variables to provide enough
  // information in conjonction with the vindexes to route the query.
  // Use this method if the query returns a large number of rows.
  // API group: v3 API (alpha)
  streamExecute: {
    path: '/vtgateservice.Vitess/StreamExecute',
    requestStream: false,
    responseStream: true,
    requestType: vtgate_pb.StreamExecuteRequest,
    responseType: vtgate_pb.StreamExecuteResponse,
    requestSerialize: serialize_vtgate_StreamExecuteRequest,
    requestDeserialize: deserialize_vtgate_StreamExecuteRequest,
    responseSerialize: serialize_vtgate_StreamExecuteResponse,
    responseDeserialize: deserialize_vtgate_StreamExecuteResponse,
  },
  // StreamExecuteShards executes a streaming query based on shards.
  // Use this method if the query returns a large number of rows.
  // API group: Custom Sharding
  streamExecuteShards: {
    path: '/vtgateservice.Vitess/StreamExecuteShards',
    requestStream: false,
    responseStream: true,
    requestType: vtgate_pb.StreamExecuteShardsRequest,
    responseType: vtgate_pb.StreamExecuteShardsResponse,
    requestSerialize: serialize_vtgate_StreamExecuteShardsRequest,
    requestDeserialize: deserialize_vtgate_StreamExecuteShardsRequest,
    responseSerialize: serialize_vtgate_StreamExecuteShardsResponse,
    responseDeserialize: deserialize_vtgate_StreamExecuteShardsResponse,
  },
  // StreamExecuteKeyspaceIds executes a streaming query based on keyspace ids.
  // Use this method if the query returns a large number of rows.
  // API group: Range-based Sharding
  streamExecuteKeyspaceIds: {
    path: '/vtgateservice.Vitess/StreamExecuteKeyspaceIds',
    requestStream: false,
    responseStream: true,
    requestType: vtgate_pb.StreamExecuteKeyspaceIdsRequest,
    responseType: vtgate_pb.StreamExecuteKeyspaceIdsResponse,
    requestSerialize: serialize_vtgate_StreamExecuteKeyspaceIdsRequest,
    requestDeserialize: deserialize_vtgate_StreamExecuteKeyspaceIdsRequest,
    responseSerialize: serialize_vtgate_StreamExecuteKeyspaceIdsResponse,
    responseDeserialize: deserialize_vtgate_StreamExecuteKeyspaceIdsResponse,
  },
  // StreamExecuteKeyRanges executes a streaming query based on key ranges.
  // Use this method if the query returns a large number of rows.
  // API group: Range-based Sharding
  streamExecuteKeyRanges: {
    path: '/vtgateservice.Vitess/StreamExecuteKeyRanges',
    requestStream: false,
    responseStream: true,
    requestType: vtgate_pb.StreamExecuteKeyRangesRequest,
    responseType: vtgate_pb.StreamExecuteKeyRangesResponse,
    requestSerialize: serialize_vtgate_StreamExecuteKeyRangesRequest,
    requestDeserialize: deserialize_vtgate_StreamExecuteKeyRangesRequest,
    responseSerialize: serialize_vtgate_StreamExecuteKeyRangesResponse,
    responseDeserialize: deserialize_vtgate_StreamExecuteKeyRangesResponse,
  },
  // Begin a transaction.
  // API group: Transactions
  begin: {
    path: '/vtgateservice.Vitess/Begin',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.BeginRequest,
    responseType: vtgate_pb.BeginResponse,
    requestSerialize: serialize_vtgate_BeginRequest,
    requestDeserialize: deserialize_vtgate_BeginRequest,
    responseSerialize: serialize_vtgate_BeginResponse,
    responseDeserialize: deserialize_vtgate_BeginResponse,
  },
  // Commit a transaction.
  // API group: Transactions
  commit: {
    path: '/vtgateservice.Vitess/Commit',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.CommitRequest,
    responseType: vtgate_pb.CommitResponse,
    requestSerialize: serialize_vtgate_CommitRequest,
    requestDeserialize: deserialize_vtgate_CommitRequest,
    responseSerialize: serialize_vtgate_CommitResponse,
    responseDeserialize: deserialize_vtgate_CommitResponse,
  },
  // Rollback a transaction.
  // API group: Transactions
  rollback: {
    path: '/vtgateservice.Vitess/Rollback',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.RollbackRequest,
    responseType: vtgate_pb.RollbackResponse,
    requestSerialize: serialize_vtgate_RollbackRequest,
    requestDeserialize: deserialize_vtgate_RollbackRequest,
    responseSerialize: serialize_vtgate_RollbackResponse,
    responseDeserialize: deserialize_vtgate_RollbackResponse,
  },
  // Split a query into non-overlapping sub queries
  // API group: Map Reduce
  splitQuery: {
    path: '/vtgateservice.Vitess/SplitQuery',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.SplitQueryRequest,
    responseType: vtgate_pb.SplitQueryResponse,
    requestSerialize: serialize_vtgate_SplitQueryRequest,
    requestDeserialize: deserialize_vtgate_SplitQueryRequest,
    responseSerialize: serialize_vtgate_SplitQueryResponse,
    responseDeserialize: deserialize_vtgate_SplitQueryResponse,
  },
  // GetSrvKeyspace returns a SrvKeyspace object (as seen by this vtgate).
  // This method is provided as a convenient way for clients to take a
  // look at the sharding configuration for a Keyspace. Looking at the
  // sharding information should not be used for routing queries (as the
  // information may change, use the Execute calls for that).
  // It is convenient for monitoring applications for instance, or if
  // using custom sharding.
  // API group: Topology
  getSrvKeyspace: {
    path: '/vtgateservice.Vitess/GetSrvKeyspace',
    requestStream: false,
    responseStream: false,
    requestType: vtgate_pb.GetSrvKeyspaceRequest,
    responseType: vtgate_pb.GetSrvKeyspaceResponse,
    requestSerialize: serialize_vtgate_GetSrvKeyspaceRequest,
    requestDeserialize: deserialize_vtgate_GetSrvKeyspaceRequest,
    responseSerialize: serialize_vtgate_GetSrvKeyspaceResponse,
    responseDeserialize: deserialize_vtgate_GetSrvKeyspaceResponse,
  },
};

exports.VitessClient = grpc.makeGenericClientConstructor(VitessService);
