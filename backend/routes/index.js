var express = require('express');
var router = express.Router();
const OWM_API_KEY = process.env.OWM_API_KEY


router.get('/movies', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer " + process.env.API_KEY_Bearer
        }
    };

    const fetchedMoviesFromImdb = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    const moviesFromImdb = await fetchedMoviesFromImdb.json()
    res.json({ movies: moviesFromImdb.results })

})


module.exports = router;
