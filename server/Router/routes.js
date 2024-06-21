const express = require('express');
const { Register, SavePreferences, Login } = require('../Controller/user');
const { getGenres } = require('../Controller/genres');
const { getArtists } = require('../Controller/artists');
const { getAllConcerts, getRecommendedConcerts } = require('../Controller/concerts');

const router = express.Router();

router.post('/register', Register);
router.post('/preferences', SavePreferences);
router.post('/login', Login);
router.get('/genres', getGenres);
router.get('/artists', getArtists);
router.get('/concerts', getAllConcerts);
router.get('/concerts/recommended', getRecommendedConcerts);

module.exports = router;
