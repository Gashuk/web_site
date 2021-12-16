const  Routes = require('express')
const router = new Routes()
const compositionController = require('../controllers/compositionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',compositionController.creat)
router.get('/',compositionController.getAll)
router.get('/:id',compositionController.getOne)
router.delete('/:id',compositionController.deleteOne)

module.exports = router