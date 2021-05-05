const express = require('express');
const app = express();
const csv = require('csv-parse')
const fs = require('fs')
const cors = require('cors')

app.use(
    cors({
        origin:"http://localhost:3000"
    })
)

const results = []

app.get('/', function (req, res) {
    res.send('test')
});

fs.createReadStream('data.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results)
    })

app.get('/data', function (req, res) {
    res.json(results)
})

app.listen(5000);