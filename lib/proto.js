var vtquery = require('./pb/query_pb'),
    TypedValue = require('./typed_value');


/**
 * Create a BindVariable from a value.
 *
 * @param val {object} a value to turn into a BoundVariable.
 * @param {Number} [hint] - Type hint for bind vars
 * @return {vtquery.BindVariable} A bound variable.
 */
function buildBindVariable(val, hint) {
    // TODO Handle vtquery.Type.TUPLE
    var typed_value = new TypedValue(val, hint);
    var bind_var = new vtquery.BindVariable();
    bind_var.setType(typed_value.type);
    bind_var.setValue(typed_value.value);
    return bind_var;
}

/**
 * Create a BoundQuery from a query and vars.
 *
 * @param {string} query
 * @param {object} vals - mapping between string and values, to be transferred to BoundQuery
 * @param {object} [hints] - Type hints for bind vars
 * @return {vtquery.BoundQuery} A bound query object.
 */
function bindQuery(query, vals, hints) {
    var bound_query = new vtquery.BoundQuery();
    bound_query.setSql(query);

    if (vals) {
        var bound_var_map = bound_query.getBindVariablesMap();
        Object.keys(vals).forEach(function(val) {
            // is ok if hints[val] is undefined
            bound_var_map.set(val, buildBindVariable(vals[val], hints[val]));
        })
    }
    return bound_query;
}

module.exports = {
    bindQuery: bindQuery
}