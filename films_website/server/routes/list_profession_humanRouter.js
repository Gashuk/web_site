const Routes = require('express')
const router = new Routes()
const list_profession_humanController = require('../controllers/list_profession_humanController')

router.post('/',list_profession_humanController.creat)
router.get('/',list_profession_humanController.getAll)
router.get('/:id',list_profession_humanController.getOne)

module.exports = router