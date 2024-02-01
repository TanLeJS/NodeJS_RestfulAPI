const Project = require("../models/project");

const postCreateProjectService = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
};

module.exports = {
  postCreateProjectService,
};
