const {Router } = require('express');
const bookController = require('../controller/bookController')
const router = Router();
const validation = require('../validation/book')
const {
  validate
} = require('../middleware')

router.post('/create',validate(validation.create),bookController.createBook)
// router.post('/signup',validate(validation.signup),userController.signUpUser)
module.exports = router