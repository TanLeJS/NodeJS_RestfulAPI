const {
  postCreateProjectService,
  getProject,
  putUpdateProjectService,
  deleteProjectService,
} = require("../services/projectsService");
const Joi = require("joi");

const postCreateProject = async (req, res) => {
  let { name, startDate, endDate, description, leader } = req.body;
  const schema = Joi.object({
    name: Joi.string().required().max(50),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().greater(Joi.ref("startDate")).required(),
    description: Joi.string(),
    leader: Joi.object().keys({
      name: Joi.string().required().allow(""),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    }),
  });
  let result = await postCreateProjectService(req.body);
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(500).json({
      mes: error,
    });
  } else {
    return res.status(200).json({
      mes: result,
    });
  }
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
