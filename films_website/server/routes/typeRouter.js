const Routes = require('express')
const router = new Routes()
const TypeController = require('../controllers/TypeController')

router.post('/',TypeController.creat)
router.get('/',TypeController.getAll)
router.delete('/',TypeController.delete)

module.exports = router