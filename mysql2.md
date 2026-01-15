# mysql2 là một trong những thư viện kết nối MySQL phổ biến, nhanh và hiện đại nhất cho Node.js

# Mysql2 dùng để làm gì?

- mysql2 là một thư viện Node.js dùng để:

+, Kết nối và thao tác với MySQL / MariaDB

+, Thực hiện query SQL

+, Hỗ trợ Prepared Statements

+, Hỗ trợ Promise / async-await

+, Tương thích gần như hoàn toàn với gói mysql cũ, nhưng nhanh hơn và ổn định hơn

# Cách cài đặt

+, npm install mysql2

+, PHẦN 1 – Kết nối MySQL

<!-- import mysql from "mysql2/promise" ES6 -> type: module
const mysql = require('mysql2/promise'); ES5 -->

const pool = mysql.createPool({
host: 'localhost', # server csdl
user: 'root', # username csdl
password: '', # password csdl
database: 'test_db', # name csdl
waitForConnections: true, # Đợi connect
connectionLimit: 10 # giới hạn số lượt kết nối tới csdl đồng thời
});

# 10 người thì sẽ tạo đc 10 câu query cùng 1 lúc, tạo được 10 phiên kết nối.
# 11 người -> 1 ông đợi

module.exports = pool;
