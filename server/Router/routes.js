const express = require('express');
const { Register, SavePreferences } = require('../Controller/user');
const { getGenres } = require('../Controller/genres');
const { getArtists } = require('../Controller/artists');

const router = express.Router();

router.post('/register', Register);
router.post('/preferences', SavePreferences);
router.get('/genres', getGenres);
router.get('/artists', getArtists);

module.exports = router;
