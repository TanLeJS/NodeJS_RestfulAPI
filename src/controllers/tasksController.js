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
  let result = await getTasksService(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
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
