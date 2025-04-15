const Quote = require('../models/Quote')

module.exports = {
    getQuotes: async (req,res)=>{
        try{
            const quoteItems = await Quote.find()
            const itemsLeft = await Quote.countDocuments({completed: false})
            res.render('quotes.ejs', {quotes: quoteItems, left: itemsLeft})
        }catch(err){
            console.log(err)
        }
    },
    createQuote: async (req, res)=>{
        try{
            await Quote.create({quote: req.body.quoteItem, completed: false})
            console.log('Quote has been added!')
            res.redirect('/quotes')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Quote.findOneAndUpdate({_id:req.body.quoteIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Quote.findOneAndUpdate({_id:req.body.quoteIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteQuote: async (req, res)=>{
        console.log(req.body.quoteIdFromJSFile)
        try{
            await Quote.findOneAndDelete({_id:req.body.quoteIdFromJSFile})
            console.log('Deleted Quote')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    