const Routes = require('express')
const router = new Routes()
const professionController = require('../controllers/professionController')

router.post('/',professionController.creat)
router.get('/',professionController.getAll)

module.exports = router