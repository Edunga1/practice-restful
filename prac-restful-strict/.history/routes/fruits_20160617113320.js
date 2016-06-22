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

    conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.status(200).json(result);
        }
    });
};

/** select one */
exports.findById = function (req, res) {
    var id = parseInt(req.params.id),
        sql = 'SELECT * FROM fruits WHERE idx = ?';

    if (isNaN(id)) {
        return;
    }

    conn.query(sql, mysql.escape(id), function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
};

/** insert one */
exports.add = function (req, res) {
    var name = req.params.name,
        sql = 'INSERT INTO fruits (name) VALUES (?)';

    conn.query(sql, name, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.sendStatus(200);
        }
    });
};

/** update one */
exports.update = function (req, res) {
    var id = parseInt(req.params.id),
        name = req.params.name,
        sql = 'UPDATE fruits SET name = ? WHERE idx = ?';

    if (isNaN(id)) {
        return;
    }

    conn.query(sql, [name, id], function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.sendStatus(200);
        }
    });
};

/** delete one */
exports.delete = function (req, res) {
    var id = parseInt(req.params.id),
        sql = 'DELETE FROM fruits WHERE idx = ?';

    if (isNaN(id)) {
        return;
    }

    conn.query(sql, id, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.sendStatus(200);
        }
    });
};
