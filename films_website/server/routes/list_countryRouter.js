const Routes = require('express')
const router = new Routes()
const List_countryController = require('../controllers/List_countryController')

router.post('/',List_countryController.creat)
router.get('/',List_countryController.getAll)
router.get('/:id',List_countryController.getOne)

module.exports = router