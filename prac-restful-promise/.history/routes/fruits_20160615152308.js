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
    var sql = 'INSERT INTO fruits (name) VALUES (?)',
        sqlLog = 'INSERT INTO logs (fruit_idx, log) VALUES (?, ?)',
        name = req.params.name,
        log = name + ' 입력됨!';

    // connection 획득
    pool.getConnection(function (err, conn) {
        if (err) {
            throw err;
        }

        // transaction 시작
        conn.beginTransaction(function (err) {
            // insert fruit
            conn.query(sql, name, function (err, result) {
                if (err) {
                    // insert fruit 에러 시 rollback
                    console.error(err);
                    conn.rollback(function () {
                        console.error('rollback error');
                        throw err;
                    });
                }

                // fruit insert 후 log insert
                var newFruitIdx = result.insertId; // 새 fruit 의 idd
                conn.query(sqlLog, [newFruitIdx, log], function (err, result) {
                    if (err) {
                        console.error(err);
                        conn.rollback(function () {
                            console.error('rollback error');
                            throw err;
                        });
                    }

                    // fruit, log insert 후 commit
                    conn.commit(function (err) {
                        if (err) {
                            // insert log 에러 시 rollback
                            console.error(err);
                            conn.rollback(function () {
                                console.error('rollback error');
                                throw err;
                            });
                        }

                        // 모든 로직 통과됨!
                        res.send(200, 'success');
                    }); // commit
                }); // log query
            }); // fruit query
        }); // transaction
    }); // connection
};
