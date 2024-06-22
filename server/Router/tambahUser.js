const express =  require('express')
const {addUser, Register} = require('../Controller/user')
const {getUserById} = require('../Controller/user')

const routerUser = express()
routerUser.post("/user", Register)
// routerUser.post("/user", addUser)
routerUser.get('/user/:id', getUserById)
module.exports = routerUser