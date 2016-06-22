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

/** 모든 운동 정보 */
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

/** 특정 운동 정보 */
exports.findById = function (req, res) {
    var sql = 'SELECT * FROM exercise WHERE e_num = "' + req.params.id + '"';
    var query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
};
