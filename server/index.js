const express = require('express')
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/trololo', (request, response, next) => {
    response.json({
        ppi : 'sldfjlskd'
    })
    setTimeout(() => next(), 2000)
})

const server = http.createServer(app);

server.listen(4000)