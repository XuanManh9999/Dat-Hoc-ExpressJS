import mysql from "mysql2/promise";

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: "103.200.23.43",
  user: "root",
  database: "mysql2",
  password: "toilamanhdevhust",
  waitForConnections: true,
  connectionLimit: 10,// Tối đa 10 kết nối MySQL cùng lúc
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


export default pool;
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
// dùng câu lệnh update thẳng và kèm where
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


// PHẦN 6 – PREPARED STATEMENTS (BẢO MẬT)
// SQL Injection *
// dat@gmail.com -> string. dat@gmail.com + ' or 1 = 1' -> dat@gmail.com or 1 = 1
// const sql = "SELECT * FROM users WHERE email = '" + email + "'";
// SELECT * FROM users WHERE email = 'dat@gmail.com' -> hợp lệ
// SELECT * FROM users WHERE email = 'dat@gmail.com' OR 1=1
// SELECT * FROM users
// Lộ toàn bộ dữ liệu
// khắc phục nó bằng các không dùng nối chuỗi nữa

// const [rows] = await pool.execute(
//   'SELECT * FROM users WHERE email = ?',
//   ['test@gmail.com']
// );

// nếu ta tương tác với dữ liệu động thì ta dùng Luôn dùng execute() cho dữ liệu động

// const insertUsers = async (user) => {
//   const [result] = await pool.execute("insert into users (username, age, address, price) values (?, ?, ?, ?)", ["Loan", 20, 'ABC', 2000])
//   if (result.affectedRows != 0) {
//     console.log("Thêm thành công")
//   }else {
//     console.log("Thêm người dùng thất bại")
//   }
// }
// insertUsers()


// PHẦN 8 – TRANSACTION (AN TOÀN DỮ LIỆU, TOÀN VẸN DỮ LIỆU) 
// 🎯 Mục tiêu: Không mất tiền, không mất dữ liệu

// 1 -> OK 
// 2 -> OK
// 3 -> ERROR -> không thêm cái nào

// const handlePayment = async () => {
//   const conn = await pool.getConnection();
// try {
//   await conn.beginTransaction();// mở Transaction

//   await conn.execute(
//     'UPDATE users SET price = ? WHERE username = ?',
//     [2000, 'Loan']
//   );

//   await conn.execute(
//     'UPDATE payment SET price = ? WHERE name = ?',
//     [2000, 'Loan']
//   );

//   await conn.commit(); // xác nhận và gửi yêu cầu lưu vào csdl 
//   console.log('Chuyển tiền thành công');
// } catch (err) {
//   await conn.rollback(); // quay trở lại trạng thái trước khi mở Transaction
//   console.log('Lỗi, đã rollback');
// } finally {
//   conn.release(); // đóng  kết nối tạo phiên mới
// }
// }
// handlePayment()


// fake db payment
// const handleFakeData = async () => {
//   for (let i  = 1; i <= 100; i++) {
//     await pool.execute("insert into payment (name, price, name_revice) values(?, ?, ?)", [`Nguyễn Văn ${i}`, Math.floor(Math.random() * 100), 'Mạnh'])
//   }
//   console.log("Thêm thành công")
// }
// handleFakeData()
// PHẦN 10 – PAGINATION (PHÂN TRANG)

// LIMIT (số lượng bản ghi trả về) + OFFSET (bỏ qua bao nhiêu bản ghi trước đó) 
// yêu cầu: mỗi 1 trang có chứa 10 sản phẩm; (limit = 10)
// page(trang) 1 
// offset = (page - 1) * limit -> 1 - 1 = 0 * 10 -> 0 -> bỏ qua 0 bản ghi
// page: 2
// 1 * 10 -> 10 -> bỏ qua qua 10 bản ghi kết tiếp
// -- select * from users
// -- trang 1 -> limit 10
// -- offset = (page - 1) * limit
// -- select * from payment p limit 10 offset 0
// -- trang 2 -> limit 10
// -- select * from payment p limit 10  offset 10
// -- trang 3 -> limit 10
// -- select * from payment p limit 10 offset 20

// const getAllPayments = async (page = 1) => {
//   const limit = 10
//   const offset = (page - 1) * limit
//   console.log(limit, offset)
//   const [result] = await pool.query("select * from payment p limit ? offset ?", [limit, offset])
//   console.log(result)
// }

// getAllPayments(2)

// anh cần làm phân trang. Mỗi trang anh cần view 10sp ??
// limit = 10; offset = 0 -> trang 1
// limit = 10; offset = (2 - 1) * limit = 10
// limit = 10; offset = (3 - 1) * limit = 20









// Buổi sau học JWT (xác thực và phân quyền)
