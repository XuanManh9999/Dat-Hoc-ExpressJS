// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// node server.js -> đây là cách chạy khi chưa cấu hình ở package.json
// npm start -> chạy khi đã cấu hình ở package.json
