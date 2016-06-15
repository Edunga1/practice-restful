var mysql = require('mysql');
var conn = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0000',
    database: 'prac-fruit',
    connectionLimit: 20,        // 최대 커넥션 수, 기본은 10
    waitForConnections: false
});

/** select all */
exports.findAll = function (req, res) {
    pool.getConnection(function (err, conn) {
        if (!err) {
            var sql = 'SELECT * FROM fruits',
                query = null;

            query = conn.query(sql, function (err, result) {
                if (err) {
                    console.error(err);
                } else {
                    res.json(result);
                }
            });
        }

        // 일을 끝내거나 에러가 발생했다면 반드시 해제해야 함
        conn.release();
    });
};
