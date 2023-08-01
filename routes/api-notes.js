const router = require('express').Router()
const fs = require('fs')
let dataBase = require('../db/db.json')
// localhost:3001/api/

router.post('/notes', (req, res) =>{
    let noteBody = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random(),
    }
    dataBase.push(noteBody)
    fs.writeFileSync('./db/db.json', JSON.stringify(dataBase))
    res.json(dataBase)
})

router.get('/notes', (req, res) =>{
    res.json(dataBase)
})

module.exports = router