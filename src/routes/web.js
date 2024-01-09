const express = require("express")
const router = express.Router()

const { getHomepage, getABC, getTan, postCreateUser, getCreateUser, getUpdatePage, postUpdateUser } = require("../controllers/homeController")


//khai báo route
router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/tan', getTan)
router.post('/create-user', postCreateUser)
router.get('/create', getCreateUser)
router.get('/update/:id', getUpdatePage)
router.post('/update-user', postUpdateUser)



module.exports = router //export default