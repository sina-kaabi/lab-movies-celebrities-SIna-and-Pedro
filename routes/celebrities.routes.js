const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model')


router.get('/create',(req,res) => {
    res.render('celebrities/create-celebrity')
})

router.post('/create',(req,res) => {
    const {name, occupation, catchPhrase} = req.body
    Celebrity
        .create({name, occupation, catchPhrase})
        .then(createCelebrity => {
            res.redirect('/celebrities')
        })
        
.catch(err => 
    console.log(err))
    //res.render('celebrities/create-celebrity', {celebrities}))
})
router.get('/',(req,res) => {
    Celebrity
        .find()
        .then(celebrities => {
            res.render('celebrities/celebrities', {celebrities})
        })
        .catch(err => console.log(err))
})

router.get('/celebrities', (req, res, next) => {
Celebrity.find() 
.then( celebrities  => 
    //console.log(`these are all found celebrities: ${celebrities}`)
    res.render('celebrities/celebrities', celebrities)
    
    )
.catch(error => (
    console.log(`an error happened: ${error}`))




)});



module.exports = router;