const Project = require("../models/project");
const aqp = require("api-query-params");

const postCreateProjectService = async (data) => {
  if (data.type === "ADD-TASKS") {
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.taskArr.length; i++) {
      myProject.tasks.push(data.taskArr[i]);
    }
    let result = await myProject.save();
    return result;
  }

  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
  if (data.type === "ADD-USERS") {
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.usersArr.length; i++) {
      myProject.usersInfor.push(data.usersArr[i]);
    }
    let result = await myProject.save();
    return result;
  }
  if (data.type === "REMOVE-USERS") {
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.usersArr.length; i++) {
      myProject.usersInfor.pull(data.usersArr[i]);
    }
    let newResult = await myProject.save();
    return newResult;
  }
};

const getProject = async (queryString) => {
  const page = queryString.page;
  const { filter, limit, population } = aqp(queryString);
  delete filter.page;
  let offset = (page - 1) * limit;
  result = await Project.find(filter)
    .populate(population)
    .skip(offset)
    .limit(limit)
    .exec();
  return result;
};

const putUpdateProjectService = async (id, name, endDate, description) => {
  try {
    let project = await Project.updateOne(
      { _id: id },
      { name, endDate, description }
    );
    return project;
  } catch (error) {
    console.log(">>> check result: ", error);
    return null;
  }
};
const deleteProjectService = async (id) => {
  try {
    let result = await Project.deleteById(id);
    return result;
  } catch (error) {
    console.log(">>> check result: ", error);
    return null;
  }
};

module.exports = {
  postCreateProjectService,
  getProject,
  putUpdateProjectService,
  deleteProjectService,
};
