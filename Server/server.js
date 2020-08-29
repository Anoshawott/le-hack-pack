const express = require('express')
const bodyParser = require('body-parser')
const  path = require('path')

const app = express()
const port = 4000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'send.html'))
    res.sendFile(path.join(__dirname,'../', 'index.html'));
})

app.post('/api/fixed', function (req, res) {
    console.log(req.body)
    res.end("yeah fixed")
})

app.post('/api/priority', function (req, res) {
    console.log(req.body)
    res.end("yeah priority")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
