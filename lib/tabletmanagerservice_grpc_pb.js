// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// This file contains the service definition for making management API
// calls to VtTablet.
//
'use strict';
var grpc = require('grpc');
var tabletmanagerdata_pb = require('./tabletmanagerdata_pb.js');

function serialize_tabletmanagerdata_ApplySchemaRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ApplySchemaRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ApplySchemaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ApplySchemaRequest(buffer_arg) {
  return tabletmanagerdata_pb.ApplySchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ApplySchemaResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ApplySchemaResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ApplySchemaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ApplySchemaResponse(buffer_arg) {
  return tabletmanagerdata_pb.ApplySchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_BackupRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.BackupRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.BackupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_BackupRequest(buffer_arg) {
  return tabletmanagerdata_pb.BackupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_BackupResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.BackupResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.BackupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_BackupResponse(buffer_arg) {
  return tabletmanagerdata_pb.BackupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ChangeTypeRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ChangeTypeRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ChangeTypeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ChangeTypeRequest(buffer_arg) {
  return tabletmanagerdata_pb.ChangeTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ChangeTypeResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ChangeTypeResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ChangeTypeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ChangeTypeResponse(buffer_arg) {
  return tabletmanagerdata_pb.ChangeTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_DemoteMasterRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.DemoteMasterRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.DemoteMasterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_DemoteMasterRequest(buffer_arg) {
  return tabletmanagerdata_pb.DemoteMasterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_DemoteMasterResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.DemoteMasterResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.DemoteMasterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_DemoteMasterResponse(buffer_arg) {
  return tabletmanagerdata_pb.DemoteMasterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ExecuteFetchAsAppRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ExecuteFetchAsAppRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ExecuteFetchAsAppRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ExecuteFetchAsAppRequest(buffer_arg) {
  return tabletmanagerdata_pb.ExecuteFetchAsAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ExecuteFetchAsAppResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ExecuteFetchAsAppResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ExecuteFetchAsAppResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ExecuteFetchAsAppResponse(buffer_arg) {
  return tabletmanagerdata_pb.ExecuteFetchAsAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ExecuteFetchAsDbaRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ExecuteFetchAsDbaRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ExecuteFetchAsDbaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ExecuteFetchAsDbaRequest(buffer_arg) {
  return tabletmanagerdata_pb.ExecuteFetchAsDbaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ExecuteFetchAsDbaResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ExecuteFetchAsDbaResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ExecuteFetchAsDbaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ExecuteFetchAsDbaResponse(buffer_arg) {
  return tabletmanagerdata_pb.ExecuteFetchAsDbaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ExecuteHookRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ExecuteHookRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ExecuteHookRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ExecuteHookRequest(buffer_arg) {
  return tabletmanagerdata_pb.ExecuteHookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ExecuteHookResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ExecuteHookResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ExecuteHookResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ExecuteHookResponse(buffer_arg) {
  return tabletmanagerdata_pb.ExecuteHookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_GetPermissionsRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.GetPermissionsRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.GetPermissionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_GetPermissionsRequest(buffer_arg) {
  return tabletmanagerdata_pb.GetPermissionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_GetPermissionsResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.GetPermissionsResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.GetPermissionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_GetPermissionsResponse(buffer_arg) {
  return tabletmanagerdata_pb.GetPermissionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_GetSchemaRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.GetSchemaRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.GetSchemaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_GetSchemaRequest(buffer_arg) {
  return tabletmanagerdata_pb.GetSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_GetSchemaResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.GetSchemaResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.GetSchemaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_GetSchemaResponse(buffer_arg) {
  return tabletmanagerdata_pb.GetSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_GetSlavesRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.GetSlavesRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.GetSlavesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_GetSlavesRequest(buffer_arg) {
  return tabletmanagerdata_pb.GetSlavesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_GetSlavesResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.GetSlavesResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.GetSlavesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_GetSlavesResponse(buffer_arg) {
  return tabletmanagerdata_pb.GetSlavesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_IgnoreHealthErrorRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.IgnoreHealthErrorRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.IgnoreHealthErrorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_IgnoreHealthErrorRequest(buffer_arg) {
  return tabletmanagerdata_pb.IgnoreHealthErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_IgnoreHealthErrorResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.IgnoreHealthErrorResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.IgnoreHealthErrorResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_IgnoreHealthErrorResponse(buffer_arg) {
  return tabletmanagerdata_pb.IgnoreHealthErrorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_InitMasterRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.InitMasterRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.InitMasterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_InitMasterRequest(buffer_arg) {
  return tabletmanagerdata_pb.InitMasterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_InitMasterResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.InitMasterResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.InitMasterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_InitMasterResponse(buffer_arg) {
  return tabletmanagerdata_pb.InitMasterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_InitSlaveRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.InitSlaveRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.InitSlaveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_InitSlaveRequest(buffer_arg) {
  return tabletmanagerdata_pb.InitSlaveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_InitSlaveResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.InitSlaveResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.InitSlaveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_InitSlaveResponse(buffer_arg) {
  return tabletmanagerdata_pb.InitSlaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_MasterPositionRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.MasterPositionRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.MasterPositionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_MasterPositionRequest(buffer_arg) {
  return tabletmanagerdata_pb.MasterPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_MasterPositionResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.MasterPositionResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.MasterPositionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_MasterPositionResponse(buffer_arg) {
  return tabletmanagerdata_pb.MasterPositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PingRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PingRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.PingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PingRequest(buffer_arg) {
  return tabletmanagerdata_pb.PingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PingResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PingResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.PingResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PingResponse(buffer_arg) {
  return tabletmanagerdata_pb.PingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PopulateReparentJournalRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PopulateReparentJournalRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.PopulateReparentJournalRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PopulateReparentJournalRequest(buffer_arg) {
  return tabletmanagerdata_pb.PopulateReparentJournalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PopulateReparentJournalResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PopulateReparentJournalResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.PopulateReparentJournalResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PopulateReparentJournalResponse(buffer_arg) {
  return tabletmanagerdata_pb.PopulateReparentJournalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PreflightSchemaRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PreflightSchemaRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.PreflightSchemaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PreflightSchemaRequest(buffer_arg) {
  return tabletmanagerdata_pb.PreflightSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PreflightSchemaResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PreflightSchemaResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.PreflightSchemaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PreflightSchemaResponse(buffer_arg) {
  return tabletmanagerdata_pb.PreflightSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PromoteSlaveRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PromoteSlaveRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.PromoteSlaveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PromoteSlaveRequest(buffer_arg) {
  return tabletmanagerdata_pb.PromoteSlaveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PromoteSlaveResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PromoteSlaveResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.PromoteSlaveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PromoteSlaveResponse(buffer_arg) {
  return tabletmanagerdata_pb.PromoteSlaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PromoteSlaveWhenCaughtUpRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.PromoteSlaveWhenCaughtUpRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpRequest(buffer_arg) {
  return tabletmanagerdata_pb.PromoteSlaveWhenCaughtUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.PromoteSlaveWhenCaughtUpResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.PromoteSlaveWhenCaughtUpResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpResponse(buffer_arg) {
  return tabletmanagerdata_pb.PromoteSlaveWhenCaughtUpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_RefreshStateRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.RefreshStateRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.RefreshStateRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_RefreshStateRequest(buffer_arg) {
  return tabletmanagerdata_pb.RefreshStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_RefreshStateResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.RefreshStateResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.RefreshStateResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_RefreshStateResponse(buffer_arg) {
  return tabletmanagerdata_pb.RefreshStateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ReloadSchemaRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ReloadSchemaRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ReloadSchemaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ReloadSchemaRequest(buffer_arg) {
  return tabletmanagerdata_pb.ReloadSchemaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ReloadSchemaResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ReloadSchemaResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ReloadSchemaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ReloadSchemaResponse(buffer_arg) {
  return tabletmanagerdata_pb.ReloadSchemaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ResetReplicationRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ResetReplicationRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.ResetReplicationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ResetReplicationRequest(buffer_arg) {
  return tabletmanagerdata_pb.ResetReplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_ResetReplicationResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.ResetReplicationResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.ResetReplicationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_ResetReplicationResponse(buffer_arg) {
  return tabletmanagerdata_pb.ResetReplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_RunBlpUntilRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.RunBlpUntilRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.RunBlpUntilRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_RunBlpUntilRequest(buffer_arg) {
  return tabletmanagerdata_pb.RunBlpUntilRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_RunBlpUntilResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.RunBlpUntilResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.RunBlpUntilResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_RunBlpUntilResponse(buffer_arg) {
  return tabletmanagerdata_pb.RunBlpUntilResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_RunHealthCheckRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.RunHealthCheckRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.RunHealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_RunHealthCheckRequest(buffer_arg) {
  return tabletmanagerdata_pb.RunHealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_RunHealthCheckResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.RunHealthCheckResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.RunHealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_RunHealthCheckResponse(buffer_arg) {
  return tabletmanagerdata_pb.RunHealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SetMasterRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SetMasterRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SetMasterRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SetMasterRequest(buffer_arg) {
  return tabletmanagerdata_pb.SetMasterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SetMasterResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SetMasterResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SetMasterResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SetMasterResponse(buffer_arg) {
  return tabletmanagerdata_pb.SetMasterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SetReadOnlyRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SetReadOnlyRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SetReadOnlyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SetReadOnlyRequest(buffer_arg) {
  return tabletmanagerdata_pb.SetReadOnlyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SetReadOnlyResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SetReadOnlyResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SetReadOnlyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SetReadOnlyResponse(buffer_arg) {
  return tabletmanagerdata_pb.SetReadOnlyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SetReadWriteRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SetReadWriteRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SetReadWriteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SetReadWriteRequest(buffer_arg) {
  return tabletmanagerdata_pb.SetReadWriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SetReadWriteResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SetReadWriteResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SetReadWriteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SetReadWriteResponse(buffer_arg) {
  return tabletmanagerdata_pb.SetReadWriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SlaveStatusRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SlaveStatusRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SlaveStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SlaveStatusRequest(buffer_arg) {
  return tabletmanagerdata_pb.SlaveStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SlaveStatusResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SlaveStatusResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SlaveStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SlaveStatusResponse(buffer_arg) {
  return tabletmanagerdata_pb.SlaveStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SlaveWasPromotedRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SlaveWasPromotedRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SlaveWasPromotedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SlaveWasPromotedRequest(buffer_arg) {
  return tabletmanagerdata_pb.SlaveWasPromotedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SlaveWasPromotedResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SlaveWasPromotedResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SlaveWasPromotedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SlaveWasPromotedResponse(buffer_arg) {
  return tabletmanagerdata_pb.SlaveWasPromotedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SlaveWasRestartedRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SlaveWasRestartedRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SlaveWasRestartedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SlaveWasRestartedRequest(buffer_arg) {
  return tabletmanagerdata_pb.SlaveWasRestartedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SlaveWasRestartedResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SlaveWasRestartedResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SlaveWasRestartedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SlaveWasRestartedResponse(buffer_arg) {
  return tabletmanagerdata_pb.SlaveWasRestartedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SleepRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SleepRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.SleepRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SleepRequest(buffer_arg) {
  return tabletmanagerdata_pb.SleepRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_SleepResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.SleepResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.SleepResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_SleepResponse(buffer_arg) {
  return tabletmanagerdata_pb.SleepResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StartBlpRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StartBlpRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.StartBlpRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StartBlpRequest(buffer_arg) {
  return tabletmanagerdata_pb.StartBlpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StartBlpResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StartBlpResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.StartBlpResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StartBlpResponse(buffer_arg) {
  return tabletmanagerdata_pb.StartBlpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StartSlaveRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StartSlaveRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.StartSlaveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StartSlaveRequest(buffer_arg) {
  return tabletmanagerdata_pb.StartSlaveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StartSlaveResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StartSlaveResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.StartSlaveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StartSlaveResponse(buffer_arg) {
  return tabletmanagerdata_pb.StartSlaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopBlpRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopBlpRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopBlpRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopBlpRequest(buffer_arg) {
  return tabletmanagerdata_pb.StopBlpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopBlpResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopBlpResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopBlpResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopBlpResponse(buffer_arg) {
  return tabletmanagerdata_pb.StopBlpResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopReplicationAndGetStatusRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopReplicationAndGetStatusRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopReplicationAndGetStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopReplicationAndGetStatusRequest(buffer_arg) {
  return tabletmanagerdata_pb.StopReplicationAndGetStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopReplicationAndGetStatusResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopReplicationAndGetStatusResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopReplicationAndGetStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopReplicationAndGetStatusResponse(buffer_arg) {
  return tabletmanagerdata_pb.StopReplicationAndGetStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopSlaveMinimumRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopSlaveMinimumRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopSlaveMinimumRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopSlaveMinimumRequest(buffer_arg) {
  return tabletmanagerdata_pb.StopSlaveMinimumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopSlaveMinimumResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopSlaveMinimumResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopSlaveMinimumResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopSlaveMinimumResponse(buffer_arg) {
  return tabletmanagerdata_pb.StopSlaveMinimumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopSlaveRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopSlaveRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopSlaveRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopSlaveRequest(buffer_arg) {
  return tabletmanagerdata_pb.StopSlaveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_StopSlaveResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.StopSlaveResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.StopSlaveResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_StopSlaveResponse(buffer_arg) {
  return tabletmanagerdata_pb.StopSlaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_TabletExternallyElectedRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.TabletExternallyElectedRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.TabletExternallyElectedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_TabletExternallyElectedRequest(buffer_arg) {
  return tabletmanagerdata_pb.TabletExternallyElectedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_TabletExternallyElectedResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.TabletExternallyElectedResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.TabletExternallyElectedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_TabletExternallyElectedResponse(buffer_arg) {
  return tabletmanagerdata_pb.TabletExternallyElectedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_TabletExternallyReparentedRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.TabletExternallyReparentedRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.TabletExternallyReparentedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_TabletExternallyReparentedRequest(buffer_arg) {
  return tabletmanagerdata_pb.TabletExternallyReparentedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_TabletExternallyReparentedResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.TabletExternallyReparentedResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.TabletExternallyReparentedResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_TabletExternallyReparentedResponse(buffer_arg) {
  return tabletmanagerdata_pb.TabletExternallyReparentedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_WaitBlpPositionRequest(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.WaitBlpPositionRequest)) {
    throw new Error('Expected argument of type tabletmanagerdata.WaitBlpPositionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_WaitBlpPositionRequest(buffer_arg) {
  return tabletmanagerdata_pb.WaitBlpPositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tabletmanagerdata_WaitBlpPositionResponse(arg) {
  if (!(arg instanceof tabletmanagerdata_pb.WaitBlpPositionResponse)) {
    throw new Error('Expected argument of type tabletmanagerdata.WaitBlpPositionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tabletmanagerdata_WaitBlpPositionResponse(buffer_arg) {
  return tabletmanagerdata_pb.WaitBlpPositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// TabletManager is a service definition for tabletmanagerdata.TabletManager.
var TabletManagerService = exports.TabletManagerService = {
  // Ping returns the input payload
  ping: {
    path: '/tabletmanagerservice.TabletManager/Ping',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.PingRequest,
    responseType: tabletmanagerdata_pb.PingResponse,
    requestSerialize: serialize_tabletmanagerdata_PingRequest,
    requestDeserialize: deserialize_tabletmanagerdata_PingRequest,
    responseSerialize: serialize_tabletmanagerdata_PingResponse,
    responseDeserialize: deserialize_tabletmanagerdata_PingResponse,
  },
  // Sleep sleeps for the provided duration
  sleep: {
    path: '/tabletmanagerservice.TabletManager/Sleep',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SleepRequest,
    responseType: tabletmanagerdata_pb.SleepResponse,
    requestSerialize: serialize_tabletmanagerdata_SleepRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SleepRequest,
    responseSerialize: serialize_tabletmanagerdata_SleepResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SleepResponse,
  },
  // ExecuteHook executes the hook remotely
  executeHook: {
    path: '/tabletmanagerservice.TabletManager/ExecuteHook',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ExecuteHookRequest,
    responseType: tabletmanagerdata_pb.ExecuteHookResponse,
    requestSerialize: serialize_tabletmanagerdata_ExecuteHookRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ExecuteHookRequest,
    responseSerialize: serialize_tabletmanagerdata_ExecuteHookResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ExecuteHookResponse,
  },
  // GetSchema asks the tablet for its schema
  getSchema: {
    path: '/tabletmanagerservice.TabletManager/GetSchema',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.GetSchemaRequest,
    responseType: tabletmanagerdata_pb.GetSchemaResponse,
    requestSerialize: serialize_tabletmanagerdata_GetSchemaRequest,
    requestDeserialize: deserialize_tabletmanagerdata_GetSchemaRequest,
    responseSerialize: serialize_tabletmanagerdata_GetSchemaResponse,
    responseDeserialize: deserialize_tabletmanagerdata_GetSchemaResponse,
  },
  // GetPermissions asks the tablet for its permissions
  getPermissions: {
    path: '/tabletmanagerservice.TabletManager/GetPermissions',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.GetPermissionsRequest,
    responseType: tabletmanagerdata_pb.GetPermissionsResponse,
    requestSerialize: serialize_tabletmanagerdata_GetPermissionsRequest,
    requestDeserialize: deserialize_tabletmanagerdata_GetPermissionsRequest,
    responseSerialize: serialize_tabletmanagerdata_GetPermissionsResponse,
    responseDeserialize: deserialize_tabletmanagerdata_GetPermissionsResponse,
  },
  //
  // Various read-write methods
  //
  //
  setReadOnly: {
    path: '/tabletmanagerservice.TabletManager/SetReadOnly',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SetReadOnlyRequest,
    responseType: tabletmanagerdata_pb.SetReadOnlyResponse,
    requestSerialize: serialize_tabletmanagerdata_SetReadOnlyRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SetReadOnlyRequest,
    responseSerialize: serialize_tabletmanagerdata_SetReadOnlyResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SetReadOnlyResponse,
  },
  setReadWrite: {
    path: '/tabletmanagerservice.TabletManager/SetReadWrite',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SetReadWriteRequest,
    responseType: tabletmanagerdata_pb.SetReadWriteResponse,
    requestSerialize: serialize_tabletmanagerdata_SetReadWriteRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SetReadWriteRequest,
    responseSerialize: serialize_tabletmanagerdata_SetReadWriteResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SetReadWriteResponse,
  },
  // ChangeType asks the remote tablet to change its type
  changeType: {
    path: '/tabletmanagerservice.TabletManager/ChangeType',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ChangeTypeRequest,
    responseType: tabletmanagerdata_pb.ChangeTypeResponse,
    requestSerialize: serialize_tabletmanagerdata_ChangeTypeRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ChangeTypeRequest,
    responseSerialize: serialize_tabletmanagerdata_ChangeTypeResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ChangeTypeResponse,
  },
  refreshState: {
    path: '/tabletmanagerservice.TabletManager/RefreshState',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.RefreshStateRequest,
    responseType: tabletmanagerdata_pb.RefreshStateResponse,
    requestSerialize: serialize_tabletmanagerdata_RefreshStateRequest,
    requestDeserialize: deserialize_tabletmanagerdata_RefreshStateRequest,
    responseSerialize: serialize_tabletmanagerdata_RefreshStateResponse,
    responseDeserialize: deserialize_tabletmanagerdata_RefreshStateResponse,
  },
  runHealthCheck: {
    path: '/tabletmanagerservice.TabletManager/RunHealthCheck',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.RunHealthCheckRequest,
    responseType: tabletmanagerdata_pb.RunHealthCheckResponse,
    requestSerialize: serialize_tabletmanagerdata_RunHealthCheckRequest,
    requestDeserialize: deserialize_tabletmanagerdata_RunHealthCheckRequest,
    responseSerialize: serialize_tabletmanagerdata_RunHealthCheckResponse,
    responseDeserialize: deserialize_tabletmanagerdata_RunHealthCheckResponse,
  },
  ignoreHealthError: {
    path: '/tabletmanagerservice.TabletManager/IgnoreHealthError',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.IgnoreHealthErrorRequest,
    responseType: tabletmanagerdata_pb.IgnoreHealthErrorResponse,
    requestSerialize: serialize_tabletmanagerdata_IgnoreHealthErrorRequest,
    requestDeserialize: deserialize_tabletmanagerdata_IgnoreHealthErrorRequest,
    responseSerialize: serialize_tabletmanagerdata_IgnoreHealthErrorResponse,
    responseDeserialize: deserialize_tabletmanagerdata_IgnoreHealthErrorResponse,
  },
  reloadSchema: {
    path: '/tabletmanagerservice.TabletManager/ReloadSchema',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ReloadSchemaRequest,
    responseType: tabletmanagerdata_pb.ReloadSchemaResponse,
    requestSerialize: serialize_tabletmanagerdata_ReloadSchemaRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ReloadSchemaRequest,
    responseSerialize: serialize_tabletmanagerdata_ReloadSchemaResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ReloadSchemaResponse,
  },
  preflightSchema: {
    path: '/tabletmanagerservice.TabletManager/PreflightSchema',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.PreflightSchemaRequest,
    responseType: tabletmanagerdata_pb.PreflightSchemaResponse,
    requestSerialize: serialize_tabletmanagerdata_PreflightSchemaRequest,
    requestDeserialize: deserialize_tabletmanagerdata_PreflightSchemaRequest,
    responseSerialize: serialize_tabletmanagerdata_PreflightSchemaResponse,
    responseDeserialize: deserialize_tabletmanagerdata_PreflightSchemaResponse,
  },
  applySchema: {
    path: '/tabletmanagerservice.TabletManager/ApplySchema',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ApplySchemaRequest,
    responseType: tabletmanagerdata_pb.ApplySchemaResponse,
    requestSerialize: serialize_tabletmanagerdata_ApplySchemaRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ApplySchemaRequest,
    responseSerialize: serialize_tabletmanagerdata_ApplySchemaResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ApplySchemaResponse,
  },
  executeFetchAsDba: {
    path: '/tabletmanagerservice.TabletManager/ExecuteFetchAsDba',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ExecuteFetchAsDbaRequest,
    responseType: tabletmanagerdata_pb.ExecuteFetchAsDbaResponse,
    requestSerialize: serialize_tabletmanagerdata_ExecuteFetchAsDbaRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ExecuteFetchAsDbaRequest,
    responseSerialize: serialize_tabletmanagerdata_ExecuteFetchAsDbaResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ExecuteFetchAsDbaResponse,
  },
  executeFetchAsApp: {
    path: '/tabletmanagerservice.TabletManager/ExecuteFetchAsApp',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ExecuteFetchAsAppRequest,
    responseType: tabletmanagerdata_pb.ExecuteFetchAsAppResponse,
    requestSerialize: serialize_tabletmanagerdata_ExecuteFetchAsAppRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ExecuteFetchAsAppRequest,
    responseSerialize: serialize_tabletmanagerdata_ExecuteFetchAsAppResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ExecuteFetchAsAppResponse,
  },
  //
  // Replication related methods
  //
  //
  // SlaveStatus returns the current slave status.
  slaveStatus: {
    path: '/tabletmanagerservice.TabletManager/SlaveStatus',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SlaveStatusRequest,
    responseType: tabletmanagerdata_pb.SlaveStatusResponse,
    requestSerialize: serialize_tabletmanagerdata_SlaveStatusRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SlaveStatusRequest,
    responseSerialize: serialize_tabletmanagerdata_SlaveStatusResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SlaveStatusResponse,
  },
  // MasterPosition returns the current master position
  masterPosition: {
    path: '/tabletmanagerservice.TabletManager/MasterPosition',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.MasterPositionRequest,
    responseType: tabletmanagerdata_pb.MasterPositionResponse,
    requestSerialize: serialize_tabletmanagerdata_MasterPositionRequest,
    requestDeserialize: deserialize_tabletmanagerdata_MasterPositionRequest,
    responseSerialize: serialize_tabletmanagerdata_MasterPositionResponse,
    responseDeserialize: deserialize_tabletmanagerdata_MasterPositionResponse,
  },
  // StopSlave makes mysql stop its replication
  stopSlave: {
    path: '/tabletmanagerservice.TabletManager/StopSlave',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.StopSlaveRequest,
    responseType: tabletmanagerdata_pb.StopSlaveResponse,
    requestSerialize: serialize_tabletmanagerdata_StopSlaveRequest,
    requestDeserialize: deserialize_tabletmanagerdata_StopSlaveRequest,
    responseSerialize: serialize_tabletmanagerdata_StopSlaveResponse,
    responseDeserialize: deserialize_tabletmanagerdata_StopSlaveResponse,
  },
  // StopSlaveMinimum stops the mysql replication after it reaches
  // the provided minimum point
  stopSlaveMinimum: {
    path: '/tabletmanagerservice.TabletManager/StopSlaveMinimum',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.StopSlaveMinimumRequest,
    responseType: tabletmanagerdata_pb.StopSlaveMinimumResponse,
    requestSerialize: serialize_tabletmanagerdata_StopSlaveMinimumRequest,
    requestDeserialize: deserialize_tabletmanagerdata_StopSlaveMinimumRequest,
    responseSerialize: serialize_tabletmanagerdata_StopSlaveMinimumResponse,
    responseDeserialize: deserialize_tabletmanagerdata_StopSlaveMinimumResponse,
  },
  // StartSlave starts the mysql replication
  startSlave: {
    path: '/tabletmanagerservice.TabletManager/StartSlave',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.StartSlaveRequest,
    responseType: tabletmanagerdata_pb.StartSlaveResponse,
    requestSerialize: serialize_tabletmanagerdata_StartSlaveRequest,
    requestDeserialize: deserialize_tabletmanagerdata_StartSlaveRequest,
    responseSerialize: serialize_tabletmanagerdata_StartSlaveResponse,
    responseDeserialize: deserialize_tabletmanagerdata_StartSlaveResponse,
  },
  // TabletExternallyReparented tells a tablet that its underlying MySQL is
  // currently the master. It is only used in environments (tabletmanagerdata.such as Vitess+MoB)
  // in which MySQL is reparented by some agent external to Vitess, and then
  // that agent simply notifies Vitess.
  //
  // This call is idempotent with respect to a single target tablet.
  // However, the tablet assumes there is a cooling-off period following the
  // initial external reparent from A to B, before this call is repeated on any
  // tablet other than B. This assumption is configurable with the vttablet flag
  // "finalize_external_reparent_timeout".
  //
  // For more information, see the design doc at go/vt-fast-failover.
  tabletExternallyReparented: {
    path: '/tabletmanagerservice.TabletManager/TabletExternallyReparented',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.TabletExternallyReparentedRequest,
    responseType: tabletmanagerdata_pb.TabletExternallyReparentedResponse,
    requestSerialize: serialize_tabletmanagerdata_TabletExternallyReparentedRequest,
    requestDeserialize: deserialize_tabletmanagerdata_TabletExternallyReparentedRequest,
    responseSerialize: serialize_tabletmanagerdata_TabletExternallyReparentedResponse,
    responseDeserialize: deserialize_tabletmanagerdata_TabletExternallyReparentedResponse,
  },
  // TabletExternallyElected is an notification that may be sent in
  // anticipation of potentially later sending TabletExternallyReparented.
  // The tablet can use this extra lead time to prepare to react quickly if
  // TabletExternallyReparented does follow.
  //
  // This call is effectively a no-op if it is not followed by a call to
  // TabletExternallyReparented, so the external agent doing the reparent can
  // still change its mind.
  //
  // The agent does not need to wait for this call or cancel it before calling
  // TabletExternallyReparented if the external reparent operation finishes
  // before TabletExternallyElected returns.
  tabletExternallyElected: {
    path: '/tabletmanagerservice.TabletManager/TabletExternallyElected',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.TabletExternallyElectedRequest,
    responseType: tabletmanagerdata_pb.TabletExternallyElectedResponse,
    requestSerialize: serialize_tabletmanagerdata_TabletExternallyElectedRequest,
    requestDeserialize: deserialize_tabletmanagerdata_TabletExternallyElectedRequest,
    responseSerialize: serialize_tabletmanagerdata_TabletExternallyElectedResponse,
    responseDeserialize: deserialize_tabletmanagerdata_TabletExternallyElectedResponse,
  },
  // GetSlaves asks for the list of mysql slaves
  getSlaves: {
    path: '/tabletmanagerservice.TabletManager/GetSlaves',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.GetSlavesRequest,
    responseType: tabletmanagerdata_pb.GetSlavesResponse,
    requestSerialize: serialize_tabletmanagerdata_GetSlavesRequest,
    requestDeserialize: deserialize_tabletmanagerdata_GetSlavesRequest,
    responseSerialize: serialize_tabletmanagerdata_GetSlavesResponse,
    responseDeserialize: deserialize_tabletmanagerdata_GetSlavesResponse,
  },
  // WaitBlpPosition tells the remote tablet to wait until it reaches
  // the specified binolg player position
  waitBlpPosition: {
    path: '/tabletmanagerservice.TabletManager/WaitBlpPosition',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.WaitBlpPositionRequest,
    responseType: tabletmanagerdata_pb.WaitBlpPositionResponse,
    requestSerialize: serialize_tabletmanagerdata_WaitBlpPositionRequest,
    requestDeserialize: deserialize_tabletmanagerdata_WaitBlpPositionRequest,
    responseSerialize: serialize_tabletmanagerdata_WaitBlpPositionResponse,
    responseDeserialize: deserialize_tabletmanagerdata_WaitBlpPositionResponse,
  },
  // StopBlp asks the tablet to stop all its binlog players,
  // and returns the current position for all of them
  stopBlp: {
    path: '/tabletmanagerservice.TabletManager/StopBlp',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.StopBlpRequest,
    responseType: tabletmanagerdata_pb.StopBlpResponse,
    requestSerialize: serialize_tabletmanagerdata_StopBlpRequest,
    requestDeserialize: deserialize_tabletmanagerdata_StopBlpRequest,
    responseSerialize: serialize_tabletmanagerdata_StopBlpResponse,
    responseDeserialize: deserialize_tabletmanagerdata_StopBlpResponse,
  },
  // StartBlp asks the tablet to restart its binlog players
  startBlp: {
    path: '/tabletmanagerservice.TabletManager/StartBlp',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.StartBlpRequest,
    responseType: tabletmanagerdata_pb.StartBlpResponse,
    requestSerialize: serialize_tabletmanagerdata_StartBlpRequest,
    requestDeserialize: deserialize_tabletmanagerdata_StartBlpRequest,
    responseSerialize: serialize_tabletmanagerdata_StartBlpResponse,
    responseDeserialize: deserialize_tabletmanagerdata_StartBlpResponse,
  },
  // RunBlpUntil asks the tablet to restart its binlog players
  runBlpUntil: {
    path: '/tabletmanagerservice.TabletManager/RunBlpUntil',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.RunBlpUntilRequest,
    responseType: tabletmanagerdata_pb.RunBlpUntilResponse,
    requestSerialize: serialize_tabletmanagerdata_RunBlpUntilRequest,
    requestDeserialize: deserialize_tabletmanagerdata_RunBlpUntilRequest,
    responseSerialize: serialize_tabletmanagerdata_RunBlpUntilResponse,
    responseDeserialize: deserialize_tabletmanagerdata_RunBlpUntilResponse,
  },
  //
  // Reparenting related functions
  //
  //
  // ResetReplication makes the target not replicating
  resetReplication: {
    path: '/tabletmanagerservice.TabletManager/ResetReplication',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.ResetReplicationRequest,
    responseType: tabletmanagerdata_pb.ResetReplicationResponse,
    requestSerialize: serialize_tabletmanagerdata_ResetReplicationRequest,
    requestDeserialize: deserialize_tabletmanagerdata_ResetReplicationRequest,
    responseSerialize: serialize_tabletmanagerdata_ResetReplicationResponse,
    responseDeserialize: deserialize_tabletmanagerdata_ResetReplicationResponse,
  },
  // InitMaster initializes the tablet as a master
  initMaster: {
    path: '/tabletmanagerservice.TabletManager/InitMaster',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.InitMasterRequest,
    responseType: tabletmanagerdata_pb.InitMasterResponse,
    requestSerialize: serialize_tabletmanagerdata_InitMasterRequest,
    requestDeserialize: deserialize_tabletmanagerdata_InitMasterRequest,
    responseSerialize: serialize_tabletmanagerdata_InitMasterResponse,
    responseDeserialize: deserialize_tabletmanagerdata_InitMasterResponse,
  },
  // PopulateReparentJournal tells the tablet to add an entry to its
  // reparent journal
  populateReparentJournal: {
    path: '/tabletmanagerservice.TabletManager/PopulateReparentJournal',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.PopulateReparentJournalRequest,
    responseType: tabletmanagerdata_pb.PopulateReparentJournalResponse,
    requestSerialize: serialize_tabletmanagerdata_PopulateReparentJournalRequest,
    requestDeserialize: deserialize_tabletmanagerdata_PopulateReparentJournalRequest,
    responseSerialize: serialize_tabletmanagerdata_PopulateReparentJournalResponse,
    responseDeserialize: deserialize_tabletmanagerdata_PopulateReparentJournalResponse,
  },
  // InitSlave tells the tablet to reparent to the master unconditionnally
  initSlave: {
    path: '/tabletmanagerservice.TabletManager/InitSlave',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.InitSlaveRequest,
    responseType: tabletmanagerdata_pb.InitSlaveResponse,
    requestSerialize: serialize_tabletmanagerdata_InitSlaveRequest,
    requestDeserialize: deserialize_tabletmanagerdata_InitSlaveRequest,
    responseSerialize: serialize_tabletmanagerdata_InitSlaveResponse,
    responseDeserialize: deserialize_tabletmanagerdata_InitSlaveResponse,
  },
  // DemoteMaster tells the soon-to-be-former master it's gonna change
  demoteMaster: {
    path: '/tabletmanagerservice.TabletManager/DemoteMaster',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.DemoteMasterRequest,
    responseType: tabletmanagerdata_pb.DemoteMasterResponse,
    requestSerialize: serialize_tabletmanagerdata_DemoteMasterRequest,
    requestDeserialize: deserialize_tabletmanagerdata_DemoteMasterRequest,
    responseSerialize: serialize_tabletmanagerdata_DemoteMasterResponse,
    responseDeserialize: deserialize_tabletmanagerdata_DemoteMasterResponse,
  },
  // PromoteSlaveWhenCaughtUp tells the remote tablet to catch up,
  // and then be the master
  promoteSlaveWhenCaughtUp: {
    path: '/tabletmanagerservice.TabletManager/PromoteSlaveWhenCaughtUp',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.PromoteSlaveWhenCaughtUpRequest,
    responseType: tabletmanagerdata_pb.PromoteSlaveWhenCaughtUpResponse,
    requestSerialize: serialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpRequest,
    requestDeserialize: deserialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpRequest,
    responseSerialize: serialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpResponse,
    responseDeserialize: deserialize_tabletmanagerdata_PromoteSlaveWhenCaughtUpResponse,
  },
  // SlaveWasPromoted tells the remote tablet it is now the master
  slaveWasPromoted: {
    path: '/tabletmanagerservice.TabletManager/SlaveWasPromoted',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SlaveWasPromotedRequest,
    responseType: tabletmanagerdata_pb.SlaveWasPromotedResponse,
    requestSerialize: serialize_tabletmanagerdata_SlaveWasPromotedRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SlaveWasPromotedRequest,
    responseSerialize: serialize_tabletmanagerdata_SlaveWasPromotedResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SlaveWasPromotedResponse,
  },
  // SetMaster tells the slave to reparent
  setMaster: {
    path: '/tabletmanagerservice.TabletManager/SetMaster',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SetMasterRequest,
    responseType: tabletmanagerdata_pb.SetMasterResponse,
    requestSerialize: serialize_tabletmanagerdata_SetMasterRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SetMasterRequest,
    responseSerialize: serialize_tabletmanagerdata_SetMasterResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SetMasterResponse,
  },
  // SlaveWasRestarted tells the remote tablet its master has changed
  slaveWasRestarted: {
    path: '/tabletmanagerservice.TabletManager/SlaveWasRestarted',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.SlaveWasRestartedRequest,
    responseType: tabletmanagerdata_pb.SlaveWasRestartedResponse,
    requestSerialize: serialize_tabletmanagerdata_SlaveWasRestartedRequest,
    requestDeserialize: deserialize_tabletmanagerdata_SlaveWasRestartedRequest,
    responseSerialize: serialize_tabletmanagerdata_SlaveWasRestartedResponse,
    responseDeserialize: deserialize_tabletmanagerdata_SlaveWasRestartedResponse,
  },
  // StopReplicationAndGetStatus stops MySQL replication, and returns the
  // replication status
  stopReplicationAndGetStatus: {
    path: '/tabletmanagerservice.TabletManager/StopReplicationAndGetStatus',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.StopReplicationAndGetStatusRequest,
    responseType: tabletmanagerdata_pb.StopReplicationAndGetStatusResponse,
    requestSerialize: serialize_tabletmanagerdata_StopReplicationAndGetStatusRequest,
    requestDeserialize: deserialize_tabletmanagerdata_StopReplicationAndGetStatusRequest,
    responseSerialize: serialize_tabletmanagerdata_StopReplicationAndGetStatusResponse,
    responseDeserialize: deserialize_tabletmanagerdata_StopReplicationAndGetStatusResponse,
  },
  // PromoteSlave makes the slave the new master
  promoteSlave: {
    path: '/tabletmanagerservice.TabletManager/PromoteSlave',
    requestStream: false,
    responseStream: false,
    requestType: tabletmanagerdata_pb.PromoteSlaveRequest,
    responseType: tabletmanagerdata_pb.PromoteSlaveResponse,
    requestSerialize: serialize_tabletmanagerdata_PromoteSlaveRequest,
    requestDeserialize: deserialize_tabletmanagerdata_PromoteSlaveRequest,
    responseSerialize: serialize_tabletmanagerdata_PromoteSlaveResponse,
    responseDeserialize: deserialize_tabletmanagerdata_PromoteSlaveResponse,
  },
  //
  // Backup related methods
  //
  //
  backup: {
    path: '/tabletmanagerservice.TabletManager/Backup',
    requestStream: false,
    responseStream: true,
    requestType: tabletmanagerdata_pb.BackupRequest,
    responseType: tabletmanagerdata_pb.BackupResponse,
    requestSerialize: serialize_tabletmanagerdata_BackupRequest,
    requestDeserialize: deserialize_tabletmanagerdata_BackupRequest,
    responseSerialize: serialize_tabletmanagerdata_BackupResponse,
    responseDeserialize: deserialize_tabletmanagerdata_BackupResponse,
  },
};

exports.TabletManagerClient = grpc.makeGenericClientConstructor(TabletManagerService);
//
// Various read-only methods
//
