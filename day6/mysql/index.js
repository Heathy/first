var mysql = require('mysql');
//用mysql-createConnection创建一个连接对象
var connection = mysql.createConnection({
    host: 'locallhost',
    user: 'root',
    password: 'root',
    database: 'my_db'
});

connection.connect();

connection.query('SELECT * FROM text1', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is:', results[0].solution);
    
});

connection.end()