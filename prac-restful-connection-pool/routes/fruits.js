var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'prac-fruit',
    connectionLimit: 5,        // 최대 커넥션 수, 기본은 10
    waitForConnections: false
});

// 정상
exports.findAll = function (req, res) {
    pool.getConnection(function (err, conn) {
        var sql = 'SELECT * FROM fruits',
            query = null;

        if (!err) {
            query = conn.query(sql, function (err, result) {
                if (err) {
                    console.error(err);
                } else {
                    res.json(result);
                }
            });

            // connection을 사용한 후 반드시 반환해야 함
            conn.release();
        }
    });
};

// 오류 - 풀을 얻은 후 반환하지 않음
exports.findAllNoRelease = function (req, res) {
    pool.getConnection(function (err, conn) {
        var sql = 'SELECT * FROM fruits',
            query = null;

        if (!err) {
            query = conn.query(sql, function (err, result) {
                if (err) {
                    console.error(err);
                } else {
                    res.json(result);
                }
            });

            // connection 반환하지 않음
        }
    });
};

// 획득, 반환의 생략
exports.findAllPoolQuery = function (req, res) {
    var sql = 'SELECT * FROM fruits',
        query = null;

    pool.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
};
