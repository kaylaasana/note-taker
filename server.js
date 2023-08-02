
const express = require('express');
const apiRoutes = require('./routes/api-notes');
const htmlRoutes = require('./routes/html-routes');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(PORT, () =>
    console.log(`Serving static asset routes on port http://localhost:${PORT} !`)
);