require('dotenv').config()
const express = require('express')
const app = express ()
const massive = require('massive')
const ctrl = require('./itemCtrl')
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.get('/api/items', ctrl.getItems)
app.post('/api/items', ctrl.createItem)


massive(CONNECTION_STRING)
    .then((database) => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`Hello ${SERVER_PORT}`))
}).catch(err => console.log(err, 'cannot connect to database'))




