const route = require("express").Router();

const FileController = require("../controller/file.controller");
const Upload = require("../middlewares/upload");

route.get("/get-files", FileController.GetFiles);

route.post("/upload", Upload.single("image"), FileController.Upload);

route.delete("/delete-file/:id", FileController.Delete);

module.exports = route;
