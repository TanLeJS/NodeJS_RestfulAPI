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
} = require("../controllers/projectsController");

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
