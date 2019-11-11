// const mysql = require('mysql');
// // 创建连接池
// var pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     port: 3306,
//     database: 'gjmm',
//     multipleStatements: true,
// })

// function query(sql) {
//     return new Promise((resolve, reject) => {
//         pool.query(sql, (error, results, fields) => {
//             if (error) {
//                 reject(error);
//             }
//             resolve(results);
//         })
//     })
// }

// module.exports = query;