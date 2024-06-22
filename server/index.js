const express =  require('express')
const cors =  require('cors')
const dotenv =  require('dotenv')
const {testConnection} = require('./Database/db.js')
const routerKonser = require('./Router/tambahKonser.js')
const routerUser = require('./Router/tambahUser.js')

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routerKonser);
app.use(routerUser);

app.listen(process.env.APP_PORT, async () => {
    await testConnection();
    console.log(`http://localhost:${process.env.APP_PORT}`);
});