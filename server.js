const express = require('express');
const apiRoutes = require('./routes/api-notes');
const htmlRoutes = require('./routes/html-routes');
const app = express();
const PORT = 3001;
const path = require('path');

// GET *
// GET /notes
// GET /api/notes
// POST /api/notes

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.listen(PORT, ()=>
    console.log(`Serving static asset routes on port ${PORT}!`)
)