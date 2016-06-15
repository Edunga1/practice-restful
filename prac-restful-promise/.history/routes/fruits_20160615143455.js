var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'prac-fruit'
});

/** insert fruit, log */
exports.add = function (req, res) {
    var sql = 'INSERT INTO fruits VALUES ?';

    pool.getConnection(function (err, conn) {
        conn.query(sql, function (err, result) {
            if (err) {
                console.error(err);
            } else {
                res.json(result);
            }
        });
    });
};
