import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'

import Api from '../routes/index'

const app = express();

const server = http.createServer(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', (req, res) => {
  res.send({
    success: "Hello World"
  });
})

app.use('/api', Api);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log("server started")
})