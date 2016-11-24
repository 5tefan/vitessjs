var vtgate = require('./lib/pb/vtgate_pb.js'),
    vtgate_svc = require('./lib/pb/vtgateservice_grpc_pb'),
    vtrpc = require('./lib/pb/vtrpc_pb'),
    topodata = require('./lib/pb/topodata_pb'),
    vtquery = require('./lib/pb/query_pb'),
    proto = require('./lib/proto'),
    grpc = require('grpc');

/**
 * Construct a Vitess vtgate rpc client.
 *
 * @constructor
 */
function Vitess() {
    this.client = null;
    this.session = null;
    this.caller_id = new vtrpc.CallerID();
}

/**
 * Set values in the caller ID.
 * @param principal
 * @param component
 * @param subcomponent
 */
Vitess.prototype.setCallerId = function(principal, component, subcomponent) {
    principal && this.caller_id.setPrincipal(principal);
    component && this.caller_id.setComponent(component);
    subcomponent && this.caller_id.setSubcomponent(subcomponent);
};

/**
 * Connect to Vitess.
 *
 * @param {String} uri
 * @param {Function} [callback]
 */
Vitess.prototype.connect = function(uri) {
    this.client = new vtgate_svc.VitessClient(uri, grpc.credentials.createInsecure());
    return this.begin();
};

/**
 * Begin a transaction.
 *
 * @returns {Promise}
 */
Vitess.prototype.begin = function() {
    var _this = this;
    return new Promise( function(resolve, reject) {
        var begin_request = new vtgate.BeginRequest();
        begin_request.setCallerId(_this.caller_id);

        _this.client.begin(begin_request, function(err, resp) {
            if (err) {
                return reject(err);
            } else {
                _this.session = resp.getSession();
                return resolve();
            }
        })
    })
};

/**
 * Execute an SQL statement
 *
 * @param {string} sql - sql statement
 * @param {object} bind_vars - Map of vars to bind in the sql statement
 * @param {object} [bind_hints] - Type hints for bind vars
 */
Vitess.prototype.execute = function(sql, bind_vars, bind_hints) {
    var _this = this;
    return new Promise( function(resolve, reject) {
        if (sql && _this.client) {
            // create the query
            var bind_query = proto.bindQuery(sql, bind_vars, bind_hints);

            // create the request
            var request = new vtgate.ExecuteRequest();
            request.setCallerId(_this.caller_id);
            request.setSession(_this.session);
            request.setQuery(bind_query);
            request.setTabletType(topodata.TabletType.MASTER);
            request.setKeyspace("test_keyspace");

            var enclose = function() {
                _this.client.execute(request, function (err, resp) {
                    if (err) {
                        return reject(err);
                    } else {
                        _this.session = resp.getSession();
                        return resolve(resp.getResult());
                    }
                });
            };

            // run begin if there isn't already a session
            if (!_this.session) {
               _this.begin().then( enclose() );
            } else {
                enclose();
            }

        } else {
            (!_this.client) && reject("Please connect first");
            (!sql) && reject("Provide a query");
        }
    });
};

/**
 * Commit a transaction.
 *
 * @returns {Promise}
 */
Vitess.prototype.commit = function() {
    var _this = this;
    return new Promise( function(resolve, reject) {

        // create the commit request
        var commit_request = new vtgate.CommitRequest();
        commit_request.setCallerId(_this.caller_id);
        commit_request.setSession(_this.session);

        // send it!
        _this.client.commit(commit_request, function(err, resp) {
            if (err) {
                return reject(err);
            } else {
                _this.session = null;
                return resolve();
            }
        })
    })
};

// Use these for type hints.
Vitess.Types = vtquery.Type;

module.exports = Vitess;
