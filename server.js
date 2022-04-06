const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static('assets'))
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let fake_data = []
    if (fs.existsSync("assets/server.json")) {
        let rawdata = fs.readFileSync("assets/server.json");
        fake_data = JSON.parse(rawdata)
    }
    res.render('index', { data: fake_data })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})