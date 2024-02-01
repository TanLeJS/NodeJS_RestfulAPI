const {
  postCreateProjectService,
  getProject,
  putUpdateProjectService,
  deleteProjectService,
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

const putUpdateProjects = async (req, res) => {
  let { id, name, endDate, description } = req.body;
  let updateProject = await putUpdateProjectService(
    id,
    name,
    endDate,
    description
  );
  return res.status(200).json({
    errorCode: 0,
    data: updateProject,
  });
};

const deleteProjects = async (req, res) => {
  let id = req.body.id;
  console.log(id);
  let result = await deleteProjectService(id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  postCreateProject,
  getAllProjects,
  putUpdateProjects,
  deleteProjects,
};
