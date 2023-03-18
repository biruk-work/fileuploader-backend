const db = require("../models");
const File = db.file;

const FileController = {
  GetFiles: async (req, res) => {
    try {
      const files = await File.findAll({});
      return res.json({ files: files, statusCode: 200 });
    } catch (err) {
      console.log(err);
      res.json({ err: "Something went wrong", statusCode: 500 });
    }
  },
  Upload: async (req, res) => {
    const { uploader } = req.body;
    if (!uploader) return res.json({ err: "Uploader is required field." });

    if (req.file == undefined) {
      return res.json({ err: "Please upload a file", statusCode: 400 });
    }

    await File.create({
      filename: req.file.originalname,
      filesize: req.file.size,
      pathname: req.file.filename,
      uploader: uploader,
    });

    res.json({
      message: "Uploaded the file successfully: " + req.file.originalname,
      statusCode: 200,
    });
    try {
    } catch (err) {
      console.log(err);
      res.json({ err: "Something went wrong", statusCode: 500 });
    }
  },
  Delete: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) return res.json({ err: "Id is required field." });

      await File.destroy({ where: { id: id } });

      res.json({
        message: `Delete the file with id:${id} successfully`,
        statusCode: 200,
      });
    } catch (err) {
      console.log(err);
      res.json({ err: "Something went wrong", statusCode: 500 });
    }
  },
};

module.exports = FileController;
