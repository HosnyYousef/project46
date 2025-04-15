const express = require('express')
const router = express.Router()
const quotesController = require('../controllers/quotes')

router.get('/', quotesController.getQuotes)

router.post('/createQuote', quotesController.createQuote)

router.put('/markComplete', quotesController.markComplete)

router.put('/markIncomplete', quotesController.markIncomplete)

router.delete('/deleteQuote', quotesController.deleteQuote)

module.exports = router