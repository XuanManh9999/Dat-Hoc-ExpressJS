// học route
import express from "express"; // import thư viện vào
const app = express();

// app.get("", (req, res) => {
//   res.send("Hello world Routing");
// });

app.get("/index.html", (req, res) => {
  res.send("Mạnh");
});

app.all("/tat-ca", (req, res) => {
  res.send("Đây là method all nó lắng nghe từ tất cả các yêu cầu HTTP");
});

// query
// app.get("/post", (req, res) => {
//   // query from database
//   let data = [
//     {
//       id: 1,
//       name: "Tuổi trẻ",
//       point: 1000,
//     },
//     {
//       id: 2,
//       name: "Sách tuổi hồng",
//       point: 1500,
//     },
//     {
//       id: 3,
//       name: "Tí cuội",
//       point: 2000,
//     },
//   ];
//   let query = req.query; // dùng req.query để lấy ra query mà người dùng truyền xuống nếu default {}

//   console.log(query);
//   if (query?.point) {
//     data = data.filter((item) => item.point <= query.point);
//   }

//   // res.send("Lấy thôn tin bài viết thành công"); // trả về một chuỗi res.send trả về 1 chuỗi
//   res.json(data); // trả về dữ liệu json
// });

// params
app.get("/post/:id", (req, res, next) => {
  let data = [
    {
      id: 1,
      name: "Tuổi trẻ",
      content: "abc",
      point: 1000,
    },
    {
      id: 2,
      name: "Sách tuổi hồng",
      content: "abcd",
      point: 1500,
    },
    {
      id: 3,
      name: "Tí cuội",
      content: "abcde",
      point: 2000,
    },
  ];

  const id = req?.params?.id;
  console.log("check id: ", id);

  if (id) {
    const result = data.find((item) => item.id == id);
    console.log("Check result: ", result);
    if (!result) {
      res.send("Không tìm thấy bài viết yêu cầu");
    }
    res.json(result);
  } else {
    res.send("Không tìm thấy bài viết yêu cầu");
  }
});

// v4, v5 -> /* -> dấu * thể cho mọi tuyến đường (đường dẫn nằm sau nó)
// khi không khớp bất kì đường dẫn nào thì nó sẽ vào cái có path \*
// app.all("/*", (req, res) => {
//   res.send("Hello world Routing");
// });

// ví dụ về ứng dụng regex trong path
// acd, abcd
// khi có dấu ? đứng quy ước là các đường dẫn gốc ban đầu có thể có các thành phần nằm đằng sau dầu ? hoặc kết hợp nó
// VD: /ab?cd => /acd, /abcd
// app.get("/ab?cd", (req, res) => {
//   res.send("ab?cd");
// });

// quy tắt. abcd, abbcd, abbbcd
// app.get("/ab+cd", (req, res) => {
//   res.send("ab+cd");
// });

// localhost:3000
// địa chỉ tên miền (127.0.0.1). 3000 -> port

app.listen(3000, () => {
  console.log("Server is running port 3000");
});
