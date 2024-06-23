// server/Router/routes.js
const express = require('express');
const { Register, SavePreferences, Login } = require('../Controller/user');
const { getGenres } = require('../Controller/genres');
const { getArtists } = require('../Controller/artists');
const { getAllConcerts, getConcertById, getRecommendedConcerts } = require('../Controller/concerts');
const { getUserById, saveTransaction } = require('../Controller/transactions');
const { getAllData, getFriends } = require('../Controller/friends');
const { getMessages, sendMessage, getUserById: getChatUserById } = require('../Controller/chat');

const router = express.Router();

router.post('/register', Register);
router.post('/preferences', SavePreferences);
router.post('/login', Login);
router.get('/genres', getGenres);
router.get('/artists', getArtists);
router.get('/concerts', getAllConcerts);
router.get('/concerts/recommended', getRecommendedConcerts);
router.get('/concerts/:id', getConcertById);
router.get('/user', getUserById);
router.post('/saveTransaction', saveTransaction);
router.get('/alldata', getAllData);
router.get('/friends', getFriends); 

// Chat routes
router.get('/chat/messages', getMessages);
router.post('/chat/send', sendMessage);
router.get('/chat/user/:userId', getChatUserById); // New route to get user details

module.exports = router;
