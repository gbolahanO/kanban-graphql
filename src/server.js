import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/db_name_goes_here')
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log("we're connected!");
})

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