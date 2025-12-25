import express from "express";
import "dotenv/config"; // import dotenv
import appRouter from "./routes/index.js";

// dùng dotenv. process.env.TEN_BIEN_MOI_TRUONG default là chuỗi
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static("public"));

appRouter(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} app listening on port ${PORT}`);
});
