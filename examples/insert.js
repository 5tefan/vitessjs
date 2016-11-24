//var Vitess = require('vitess'); // eventually when this is on npm

var Vitess = require('../');

var client = new Vitess();

client.connect("localhost:12345")
    .then( function() {
        return client.execute(
            'INSERT INTO messages (page, time_created_ns, message) VALUES (:page, :time_created_ns, :message);', { 
                "page": 0,
                "time_created_ns": 0,
                "message": "hello"
            }, { // Optional type hints for bound parameters.
                "page": Vitess.Types.INT64,
                "time_created_ns": Vitess.Types.INT64
            }
        );
    }).then( function() {
        return client.commit();
    }).catch(console.log);

