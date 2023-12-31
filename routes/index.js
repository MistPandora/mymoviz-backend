var express = require('express');
var router = express.Router();
const apiKey = process.env.API_KEY;
const accessToken = process.env.ACCESS_TOKEN;

const getConfig = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
};


// const postConfig = {
//     method: 'POST',
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${accessToken}`
//     }
// };


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
        .then(r => r.json())
        .then(data => {
            let arr = [];
            for (const el of data.results) {
                arr.push(el)
            }
            res.json({ movies: arr })
        })
})


module.exports = router;
