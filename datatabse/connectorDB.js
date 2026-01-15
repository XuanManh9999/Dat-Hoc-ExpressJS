import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "103.200.23.43",
  user: "root",
  database: "mysql2",
  password: "toilamanhdevhust",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// test kết nối
async function testConnection() {
  const [rows] = await pool.query("SELECT 1");
  console.log("Kết nối OK:", rows);
}

// testConnection();

// select dữ liệu
// lấy tất cả dữ liệu
// const queryAllData = async () => {
//   // const [rows] = await pool.query("SELECT * FROM users"); // truy vấn query trả ra một mảng gồm 2 mảng con bên trong, mảng con đầu chưa kết quả truy vấn, mảng con 2 chưa cấu trúc bảng
//   const response = await pool.query("SELECT * FROM users"); // truy vấn query trả ra một mảng gồm 2 mảng con bên trong, mảng con đầu chưa kết quả truy vấn, mảng con 2 chưa cấu trúc bảng
//   console.log("response: ", response);
//   console.log("response[0]: ", response[0]);
//   console.log("response[1]: ", response[1]);

//   // console.log(rows);
// };

// queryAllData();

// lấy dữ liệu có điều kiện

// const getUserByUserName = async (name, age) => {
//   // hàm query trong mysql2 nhận vào 2 đối số, 1 là câu lệnh truy vấn, 2 là [] chứa các data truyền vào
//   const [data, table] = await pool.query(
//     "select * from users where username = ? and age = ?",
//     [name, age]
//   );
//   console.log("data", data);
//   console.log("table", table);
// };

// getUserByUserName("Đỗ tiến Đạt", 21);

// export default pool;

// Thêm dữ liệu
// thêm 1 bảng ghi
// const insertUser = async ({ username, age, address, price }) => {
//   const [result] = await pool.query(
//     "insert into users (username, age, address, price) values (?, ?, ?, ?)",
//     [username, age, address, price]
//   );
//   if (result.affectedRows == 1) {
//     console.log("Thêm Thành công");
//   } else {
//     console.log("Thêm thất bại");
//   }
//   // câu truy vấn thêm nó sẽ trả về 1 ResultSetHeader là 1 object chua các fild
//   // {
//   //   fieldCount: 0,
//   //   affectedRows: 1, -> số lượng bản ghi cập nhật -> 0 không có bản ghi nào được thêm, 1 thì có 1 bảng ghi được thêm
//   //   insertId: 0,
//   //   info: '',
//   //   serverStatus: 2,
//   //   warningStatus: 0,
//   //   changedRows: 0
//   // }

//   console.log("result", result);
// };

// insertUser({
//   username: "Nguyễn Xuân Mạnh",
//   age: 23,
//   address: "Hà Nội",
//   price: 1000,
// });

// ES6
// const a = { name: "A", age: 20 };
// const { name, age } = a;
// console.log(name, age);

// Thêm nhiều bản ghi

// const insertManyUsers = async (datas) => {
//   const [result] = await pool.query(
//     "insert into users (username, age, address, price) values ?",
//     [datas]
//   );

//   if (result.affectedRows == datas.length) {
//     console.log("Thêm Thành công");
//   } else {
//     console.log("Thêm thất bại");
//   }
// };

// const datas = [
//   ["Nguyễn Hồng Phượng", 30, "Hải Phòng", 1],
//   ["Nguyễn Văn Ánh", 20, "Điện Biên", 2],
// ];

// insertManyUsers(datas);

// Cập nhật trong mysql2
// muốn update 1 cái gì đó ta gồm các bước:
// Lấy người dùng đó
// thực hiện update
// lưu lại
// const updateAgeUserByName = async (name, age) => {
//   // orm
//   // const [result] = await pool.query("select * from users where username = ?", [
//   //   name,
//   // ]);

//   const [result] = await pool.query(
//     "update users set age = ? where username = ?",
//     [age, name]
//   );
//   // result.affectedRows -> số dòng bị ảnh hướng (2)
//   if (result.affectedRows == 1) {
//     console.log("Cập nhật thành công");
//   } else {
//     console.log("Cập nhật không thành công");
//   }
// };

// updateAgeUserByName("Đỗ tiến Đạt", 21);

// UPDATE users
// SET name = ?, email = ?, status = ?
// WHERE id = ?

// delete trong mysql2

// const deleteUsersByUsername = async (name) => {
//   const [result] = await pool.query("delete from users where username = ?", [
//     name,
//   ]);
//   console.log("Đã xoá : ", result.affectedRows);
// };

// deleteUsersByUsername("Nguyễn Xuân Mạnh");
