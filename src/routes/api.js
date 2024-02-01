const express = require("express");
const routerAPI = express.Router();
const {
  getUsersAPIs,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
} = require("../controllers/apiController");
const {
  postCreateCustomer,
  postCreateArrayCustomers,
  getAllCustomers,
  putUpdateCustomer,
  deleteACustomer,
  deleteArrayCustomers,
} = require("../controllers/customerController");

const {
  postCreateProject,
  getAllProjects,
  putUpdateProjects,
  deleteProjects,
} = require("../controllers/projectsController");

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

//khai báo route
// Users route
routerAPI.get("/users", getUsersAPIs);
routerAPI.post("/users", postCreateUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);

// Handle upload file
routerAPI.post("/file", postUploadSingleFileAPI);
routerAPI.post("/files", postUploadMultipleFilesAPI);

// Customer routes
routerAPI.get("/customers", getAllCustomers);
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomers);
routerAPI.put("/customers", putUpdateCustomer);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomers);

// Project routes
routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProjects);
routerAPI.put("/projects", putUpdateProjects);
routerAPI.delete("/projects", deleteProjects);

//Task routes
routerAPI.post("/tasks", createTask);
routerAPI.get("/tasks", getTasks);
routerAPI.put("/tasks", updateTask);
routerAPI.delete("/tasks", deleteTask);

// Differences between req.query and req.params
routerAPI.get("/info", (req, res) => {
  console.log(">>> check: ", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  console.log(">>> check req.params: ", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI; //export default
