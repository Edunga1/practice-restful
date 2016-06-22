var promise = require('./promise');
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'prac-fruit'
});

// insert fruit 후 insert log
exports.add = function (req, res) {
    var log = name + ' 입력됨!';

    // connection 획득
    pool.getConnection(function (err, conn) {
        if (err) {
            throw err;
        }

        // transaction 시작
        conn.beginTransaction(function (err) {
            var sql = 'INSERT INTO fruits (name) VALUES (?)',
                name = req.params.name;

            // insert fruit
            conn.query(sql, name, function (err, result) {
                var newFruitIdx = result.insertId; // insert 된 fruit 의 id
                var sql = 'INSERT INTO logs (fruit_idx, log) VALUES (?, ?)';

                if (err) {
                    // insert fruit 에러 시 rollback
                    console.error(err);
                    conn.rollback(function () {
                        console.error('rollback error');
                        throw err;
                    });
                }

                // fruit insert 후 log insert
                conn.query(sql, [newFruitIdx, log], function (err, result) {
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
                        res.sendStatus(200);
                    }); // commit
                }); // log query
            }); // fruit query
        }); // transaction
    }); // connection
};
