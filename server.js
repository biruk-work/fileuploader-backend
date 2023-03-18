const express = require("express");
const db = require("./src/models");
const cors = require("cors");
require("dotenv").config();

global.__basedir = __dirname;

const PORT = Number(process.env.PORT) | 5000;

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

const FileRouter = require("./src/routes/file.route");

app.use("/api/file", FileRouter);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});
