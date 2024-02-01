const Project = require("../models/project");
const aqp = require("api-query-params");

const postCreateProjectService = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let result = await Project.create(data);
    return result;
  }
  if (data.type === "ADD-USERS") {
    console.log(">>> check data: ", data);
    let myProject = await Project.findById(data.projectId).exec();
    for (let i = 0; i < data.usersArr.length; i++) {
      myProject.usersInfor.push(data.usersArr[i]);
    }
    let result = await myProject.save();
    return result;
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

module.exports = {
  postCreateProjectService,
  getProject,
};
