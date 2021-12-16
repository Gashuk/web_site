const Routes = require('express')
const router = new Routes()
const List_genreController = require('../controllers/List_genreController')

router.post('/',List_genreController.creat)
router.get('/',List_genreController.getAll)
router.get('/:id',List_genreController.getOne)

module.exports = router