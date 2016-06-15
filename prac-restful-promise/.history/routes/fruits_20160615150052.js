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
        name = req.params.name,
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
                    // insert fruit 에러 시 rollback
                    console.error(err);
                    conn.rollback(function () {
                        console.error('rollback error');
                        throw err;
                    });
                }

                // fruit insert 후 log insert
                conn.commit(function (err) {
                    if (err) {
                        // insert log 에러 시 rollback
                        console.error(err);
                        conn.rollback(function () {
                            console.error('rollback error');
                            throw err;
                        });
                    }
                });
            });
        }); // end of transaction
    }); // end of connection
};
