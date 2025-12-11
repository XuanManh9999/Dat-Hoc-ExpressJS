// const express = require("express");
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

import express from "express";
const app = express();
const port = 3000;

// cấu hình ứng expressjs
// app.use("/public-static", express.static(path.join(__dirname, "public"))); // ->localhost:3000/public-static/images/anh_con_meo.jpg
app.use(express.static("public")); // localhost:3000/images/anh_con_meo.jpg
app.use(express.static("bin"));

// localhost:3000/public/images/anh_con_meo.jpg

// localhost:3000/www

// cú pháp: app.METHOD(PATH, HANDLER)
// get là yêu cầu lấy dữ liệu phía server nếu client yêu cầu
app.get("/get", (req, res) => {
  res.send("Đây là yêu cầu lấy dữ liệu");
});
// post là yêu cầu thêm mới dữ liệu phía server nếu client yêu cầu
app.post("/post", (req, res) => {
  res.send("Đây là yêu cầu thêm dữ liệu");
});
// delete là yêu cầu xoá liệu phía server nếu client yêu cầu
app.delete("/delete", (req, res) => {
  res.send("Đây là yêu cầu xoá dữ liệu");
});
// put là yêu cầu lấy dữ liệu phía server nếu client yêu cầu

app.put("/put", (req, res) => {
  res.send("Đây là yêu cầu cập nhật toàn phần dữ liệu");
});

// patch là yêu cầu cập nhật một phần dữ liệu phía server nếu client yêu cầu
app.patch("/patch", (req, res) => {
  res.send("Đây là yêu cầu cập nhật một phần dữ liệu");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// node server.js -> đây là cách chạy khi chưa cấu hình ở package.json
// npm start -> chạy khi đã cấu hình ở package.json
