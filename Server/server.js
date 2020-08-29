// import Master from '../master'
// var master = new Master()

const express = require('express')
const bodyParser = require('body-parser')
const  path = require('path')

const app = express()
const port = 4000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../Static/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../Static/', 'index.html'));
})

/*
app.get('/api/calendarValues', function(req, res) {
    res.send(master.generateCalendar())
})
*/

app.post('/api/fixed', function (req, res) {
    console.log(req.body)

    // var response = master.registerFixedTask(req.body)
    // res.end(response)

    res.end("yeah fixed")
})

app.post('/api/priority', function (req, res) {
    console.log(req.body)
    
    // var response = master.registerPriorityTask(req.body)
    // res.end(response)

    res.end("yeah priority")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
