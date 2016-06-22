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

/** select all */
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

/** select one */
exports.findById = function (req, res) {
    var id = parseInt(req.params.id),
        sql = 'SELECT * FROM fruits WHERE idx = "' + req.params.id + '"',
        query = null;

    // 예외
    if (isNaN(id)) {
        console.log('NaN');
        console.log(req);
        return;
    }

    query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
};

/** insert one */
exports.add = function (req, res) {
    var sql = 'INSERT INTO fruits (name) VALUES ("' + req.params.name + '")';
    var query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.send(200);
        }
    });
};

/** update one */
exports.update = function (req, res) {
    var id = parseInt(req.params.id),
        name = req.param.name,
        sql = 'UPDATE fruits SET name = "' + req.params.name + ' WHERE idx = "' + id + '"',
        query = null;

    query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.send(200);
        }
    });
};
