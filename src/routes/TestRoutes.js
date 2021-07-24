const express = require('express')
const router = express.Router()

const TestController = require('../controller/TestController')

const TestValidation = require('../middleware/TestValidation')

router.post('/', TestValidation.TestValidation, TestController.orderedElements)

module.exports = router