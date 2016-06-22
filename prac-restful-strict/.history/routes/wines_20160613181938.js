var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '123.123.123.123',
    port: 3306,
    user: 'bbuser',
    password: 'test1234!@"',
    database: 'bb_center_platform'
});

conn.connect(function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

exports.findAll = function (req, res) {
    var query = conn.query('SELECT * FROM exercise', function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(query);
        }
    });
};

exports.findById = function (req, res) {
    res.send(
        {
            id: req.params.id,
            name: 'The Name',
            description: 'description'
        }
    );
};
