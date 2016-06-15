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
                var newFruitIdx = result.insertId; // insert 된 fruit 의 id
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
                        res.sendStatus(200);
                    }); // commit
                }); // log query
            }); // fruit query
        }); // transaction
    }); // connection
};

// insert fruit 후 잘못된 insert log
exports.wrongAdd = function (req, res) {
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
                // fruit id 를 -1로 주어서 오류 유발!
                conn.query(sqlLog, [-1, log], function (err, result) {
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

// insert fruit 후 잘못된 insert log, no transaction
exports.addNoTransaction = function (req, res) {
    var sql = 'INSERT INTO fruits (name) VALUES (?)',
        sqlLog = 'INSERT INTO logs (fruit_idx, log) VALUES (?, ?)',
        name = req.params.name,
        log = name + ' 입력됨!';

    // connection 획득
    pool.getConnection(function (err, conn) {
        if (err) {
            throw err;
        }

        // no transaction
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
            // fruit id 를 -1로 주어서 오류 유발!
            conn.query(sqlLog, [-1, log], function (err, result) {
                if (err) {
                    console.error(err);
                    conn.rollback(function () {
                        console.error('rollback error');
                        throw err;
                    });
                }
            }); // log query
        }); // fruit query
    }); // connection
};
