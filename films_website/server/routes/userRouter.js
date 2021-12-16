const  Routes = require('express')
const router = new Routes()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration',userController.registration)
router.post('/login', userController.login)
router.get('/auth',authMiddleware, userController.check)
router.get('/user_profile', userController.getOne)



module.exports = router