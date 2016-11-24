var jspb = require('google-protobuf'),
    vtquery = require('./pb/query_pb');

/**
 * Creates a new TypedValue.
 *
 * Importantly, the corresponding proto type and binary representation are
 * stored in this.type and this.value.
 *
 * @param {object} val - infer type and create representation.
 * @param {Number} [hint] - Type hint for val.
 * @constructor
 */
function TypedValue(val, hint) {
    this.type = null;
    this.value = null;
    var writer = new jspb.BinaryWriter();
    if (hint == vtquery.Type.TEXT || !hint && typeof(val) == 'string') {
        this.type = vtquery.Type.TEXT;
        writer.writeString(1, val);
    } else if (hint == vtquery.Type.DOUBLE || !hint && typeof(val) == 'number') {
        this.type = vtquery.Type.DOUBLE;
        writer.writeDouble(1, val);
    } else if (hint == vtquery.Type.INT64) {
        this.type = vtquery.Type.INT64;
        writer.writeInt64(1, val);
    } else {
        throw "Type not implemented";
    }
    this.value = writer.getResultBuffer();
}



module.exports = TypedValue;