const {Router } = require('express');
const bookController = require('../controller/bookController')
const router = Router();
const validation = require('../validation/book')
const {
  validate
} = require('../middleware')

router.post('/create',validate(validation.create),bookController.createBook)
router.post('/update',validate(validation.update),bookController.updateBook)
router.get('/get',bookController.getBooks)
router.get('/get/:id',bookController.getOneBook)
router.delete('/delete/:id',bookController.deleteBook)
module.exports = router