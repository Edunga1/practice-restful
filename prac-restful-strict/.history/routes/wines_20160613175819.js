var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '',
    port: 3306,
    user: '',
    password: '',
    database: ''
});

exports.findAll = function(req, res) {
    res.send(
        [
            {name: 'wine1'},
            {name: 'wine2'}
        ]
    );
};

exports.findById = function(req, res) {
    res.send(
        {
            id: req.params.id,
            name: 'The Name',
            description: 'description'
        }
    );
};
