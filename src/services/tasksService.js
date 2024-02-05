const Task = require("../models/task");
const aqp = require("api-query-params");
const createTaskService = async (taskData) => {
  try {
    if (taskData.type === "EMPTY-TASK") {
      let result = await Task.create(taskData);
      return result;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getTasksService = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  delete filter.page;
  let offset = (page - 1) * limit;
  result = await Task.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};

const updateTaskService = async (
  id,
  name,
  startDate,
  endDate,
  description,
  status
) => {
  try {
    let task = await Task.updateOne(
      { _id: id },
      { name, startDate, endDate, description, status }
    );
    return task;
  } catch (error) {
    console.log(">>> check result: ", error);
    return null;
  }
};
const deleteTaskService = async (id) => {
  try {
    let result = await Task.deleteById(id);
    return result;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
