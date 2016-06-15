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
    var sql = 'SELECT * FROM fruits',
        query = null;

    query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            var arr = [{idx: '1', name: 'foo'}, {idx: '2', name: 'bar'}];
            console.log(arr);
            console.log(result[0]);
            console.log(typeof result[0]);
            res.json(result);
        }
    });
};

/** select one */
exports.findById = function (req, res) {
    var id = parseInt(req.params.id),
        sql = 'SELECT * FROM fruits WHERE idx = ?,
        query = null;

    if (isNaN(id)) {
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
    var sql = 'INSERT INTO fruits (name) VALUES ("' + req.params.name + '")',
        query = null;

    query = conn.query(sql, function (err, result) {
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
        name = req.param.name,
        sql = 'UPDATE fruits SET name = "' + name + '" WHERE idx = "' + id + '"',
        query = null;

    if (isNaN(id)) {
        return;
    }

    query = conn.query(sql, function (err, result) {
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
        sql = 'DELETE FROM fruits WHERE idx = "' + id + '"',
        query = null;

    if (isNaN(id)) {
        return;
    }

    query = conn.query(sql, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            res.sendStatus(200);
        }
    });
};

/** test */
exports.test = function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('remote address : ' + req.connection.remoteAddress);
    res.end();
}