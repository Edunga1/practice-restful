var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '121.254.173.45',
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

exports.findAll = function(req, res) {
    res.send(
        [
            {name: 'wine1'},
            {name: 'wine2'}
        ]
    );
};

exports.findById = function(req, res) {
    res.send(
        {
            id: req.params.id,
            name: 'The Name',
            description: 'description'
        }
    );
};
