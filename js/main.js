'use strict'

const sqlite = require('sqlite3').verbose();
let db = new sqlite.Database('./db/database.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Connected to db/database.db database')
})
db.close((err) => {
    if(err) {
        console.error(err.message)
    }
    console.log('Closed connection')
})
