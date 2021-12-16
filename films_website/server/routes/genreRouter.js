const Routes = require('express')
const router = new Routes()
const GenreController = require('../controllers/GenreController')

router.post('/',GenreController.creat)
router.get('/',GenreController.getAll)


module.exports = router