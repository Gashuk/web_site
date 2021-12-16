const Routes = require('express')
const router = new Routes()
const CountryController = require('../controllers/CountryController')

router.post('/',CountryController.creat)
router.get('/',CountryController.getAll)


module.exports = router