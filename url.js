import express from "express"; // import thư viện vào

const app = express();

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// method: get, put, post, delete,  patch
// :params -> phần sau của đường dẫn
//  toilamanh/admin
//  localhost:3000/query?name=Đạt&age=22

// app.get("/abc/:manh", (req, res, next) => {
//   const params = req.params;
//   console.log("Check params: ", params);

//   res.json(params);
// });
// app.get("/query", (req, res, next) => {
//   // query url: url?key=value -> req.params {key: value}
//   // params url: url/{} params -> req.query {key: value}
//   const query = req.query;
//   console.log("Check query: ", query);
//   res.json(query);
// });

// app.post("/user", (req, res) => {
//   // thân request. req.body ở định dạng object {}
//   const body = req.body;
//   const query = req.query;
//   console.log("Body", body);
//   console.log("query", query);
//   res.json(body);
// });
// full luồng CRUD
// C-> CREATE, R ->  READ, U -> UPDATE, D -> DELETE
// full yêu cầu CRUD người dùng
const data = [
  {
    id: 1,
    name: "Nguyễn Xuân Mạnh",
    address: "Hà Nội",
  },
  {
    id: 2,
    name: "Đỗ Tiến Đạt",
    address: "Phú Thọ",
  },
  {
    id: 3,
    name: "Trần Thành Luân",
    address: "Nam Định",
  },
];
// Lấy tất cả người dùng
app.get("/users", (req, res, next) => {
  return res.status(200).json(data);
});
// lấy người dùng dựa theo ID
app.get("/user/:idUser", (req, res, next) => {
  const idUser = req.params?.idUser;
  const result = data.find((item) => item.id == idUser);
  return res.status(200).json(result);
});
// Thêm người dùng
app.post("/user", (req, res, next) => {
  const query = req.query;

  const body = req.body;
  data.push(body);
  return res.status(201).json(data);
});

// sửa người dùng, tương tự cho put
app.patch("/user/:idUser", (req, res, next) => {
  const idUser = req.params?.idUser;
  const body = req.body;
  const result = data.filter((item) => item.id != idUser);

  result.push(body);
  return res.status(200).json(result);
});

// xoá người dùng
app.delete("/user/:idUser", (req, res, next) => {
  const idUser = req.params.idUser;
  const find_user = data.find((item) => item.id == idUser);
  if (!find_user) {
    return res.status(404).json("Không tìm thấy người dùng");
  }
  const result = data.filter((item) => item.id != idUser);
  return res.status(200).json(result);
});

app.listen(3000, () => {
  console.log("Server is running port 3000");
});

// localhost:
