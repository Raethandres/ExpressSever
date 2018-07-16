import express from 'express'
import routes from './routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost:27017/prueba',{ useNewUrlParser: true })


const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes);

export default app