const {
  postCreateProjectService,
  getProject,
} = require("../services/projectsService");

const postCreateProject = async (req, res) => {
  let result = await postCreateProjectService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getAllProjects = async (req, res) => {
  let result = await getProject(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

module.exports = {
  postCreateProject,
  getAllProjects,
};
