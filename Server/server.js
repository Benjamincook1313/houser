require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const ctrl = require('./Controller')

const app = express()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
    console.log('your db is connected')
    app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
  })
  
app.use(express.json())
  // app.use(session({
    //   secret: SESSION_SECRET,
    //   resave: false,
    //   saveUninitialized: false,
    //   cookie: {
      //     maxAge: 1000 * 60 * 60 * 24 * 365
      //  }
      // }))
      
app.get('/api/houses', ctrl.getAllHouses)
app.post('/api/house', ctrl.createHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)
      
