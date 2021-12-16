const Routes = require('express')
const router = new Routes()
const humanController = require('../controllers/humanController')

router.post('/',humanController.creat)
router.get('/',humanController.getAll)


module.exports = router