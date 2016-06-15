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
    var sql = 'INSERT INTO fruits VALUES ?',
        sqlLog = 'INSERT INTO log VALUES ?',
        query = null;

    // connection 획득
    pool.getConnection(function (err, conn) {
        if (err) {
            throw err;
        }
        // transaction 시작
        conn.beginTransaction(function (err) {
            query = conn.query(sql, function (err, result) {
                if (err) {
                    console.error(err);
                } else {
                    res.json(result);
                }
            });
        }); // end of transaction
    }); // end of connection
};
