const {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
} = require("../services/tasksService");
const Joi = require("joi");

const createTask = async (req, res) => {
  let result = await createTaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getTasks = async (req, res) => {
  let { type, name, startDate, endDate, description, status } = req.body;
  const schema = Joi.object({
    type: Joi.string(),
    name: Joi.string().required().max(50),
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().greater(Joi.ref("startDate")).required(),
    description: Joi.string(),
    status: Joi.string(),
  });
  let result = await getTasksService(req.query);
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

const updateTask = async (req, res) => {
  let result = await updateTaskService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const deleteTask = async (req, res) => {
  let id = req.body.id;
  let result = await deleteTaskService(id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
