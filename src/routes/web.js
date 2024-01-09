const express = require("express")
const router = express.Router()
const { getHomepage, getABC, getTan, postCreateUser, getCreateUser, getUpdatePage } = require("../controllers/homeController")


//khai báo route
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/tan', getTan)
router.post('/create-user', postCreateUser)
router.get('/create', getCreateUser)
router.get('/update', getUpdatePage)


module.exports = router //export default