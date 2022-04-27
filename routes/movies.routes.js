const router = require("express").Router();




const Movie = require('../models/Movie.model');

router.get('movies/create',(req,res) => {
    res.render('movies/create-movie')
})

router.post('movies/create',(req,res) => {
    const {title, genre, plot, cast } = req.body
    Movie
        .create({title, genre, plot, cast})
        .then(createMovie => {
            res.redirect('/movies')
        })
        
.catch(err => console.log(err))
    //res.render('movies/create-movie', {movies}))
})



    router.get('/movies', (req, res, next) => {
        Movie.find() 
        .then( movies  => {
            //console.log(`these are all found celebrities: ${movies}`)
            const movieS = {title,
                genre,
                plot,
                cast}
                return Movie.create(movieS)
            })
            .then( movieFromDB => {
                res.send("movie was created");
                console.log('Newly created movie is: ', movieFromDB);
            }) 
            res.render('movies/movies', movies)
            .catch(error => {
                next(console.log('an error happened: ${error}'));
            });
        })




    
    

module.exports = router;