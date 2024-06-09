const express =  require('express')
const {addKonser} = require('../Controller/konser')
const {getKonser} = require('../Controller/konser')

const routerKonser = express()
routerKonser.post("/konser", addKonser)
routerKonser.get("/konser", getKonser)
module.exports = routerKonser