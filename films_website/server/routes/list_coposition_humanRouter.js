const Routes = require('express')
const router = new Routes()
const list_composition_humanController = require('../controllers/list_composition_humanController')

router.post('/',list_composition_humanController.creat)
router.get('/',list_composition_humanController.getAll)
router.get('/:id',list_composition_humanController.getOne)

module.exports = router