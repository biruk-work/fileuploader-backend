module.exports = (sequelize, Sequelize) => {
  const Fileuploader = sequelize.define("Fileuploader", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: Sequelize.STRING,
    },
    filesize: {
      type: Sequelize.STRING,
    },
    pathname: {
      type: Sequelize.STRING,
    },
    uploader: {
      type: Sequelize.STRING,
    },
  });

  return Fileuploader;
};
