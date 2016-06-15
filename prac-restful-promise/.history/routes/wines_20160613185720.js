var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '121.254.173.45',
    port: 3306,
    user: 'bbuser',
    password: 'test1234!@',
    database: 'bb_center_platform'
});

conn.connect(function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

exports.findAll = function (req, res) {
    var sql = 'SELECT * FROM exercise';
    var query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
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
