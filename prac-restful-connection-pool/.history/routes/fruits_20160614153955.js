var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'prac-fruit'
});

conn.connect(function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

/** 모든 운동 정보 */
exports.findAll = function (req, res) {
    var sql = 'SELECT * FROM fruits';
    var query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
};

/** 특정 운동 정보 */
exports.findById = function (req, res) {
    var sql = 'SELECT * FROM fruits WHERE id = "' + req.params.id + '"';
    var query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
};
