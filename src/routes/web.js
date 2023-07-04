const express = require("express")
const router = express.Router()
const { getHomepage, getABC, getTan } = require("../controllers/homeController")


//khai báo route
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/tan', getTan)

module.exports = router //export default