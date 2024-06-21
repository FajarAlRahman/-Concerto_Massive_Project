const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { testConnection } = require('./Database/db.js');
const router = require('./Router/routes.js');

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, async () => {
    await testConnection();
    console.log(`Server is running on http://localhost:${PORT}`);
});
