const express = require('express');
require('dotenv').config();
// console.log(process.env.JWT_SECRET);
const mongoose = require('mongoose');
const cors = require('cors');
const webRoutes = require('./routes/webRoutes');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();


app.use(cors({
  origin: ['http://localhost:3000', 'https://your-deployed-domain.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'],
  credentials: true
}));


app.use(express.static('public'));
app.use(cookieParser());
app.use(express.json());







const dbURI = process.env.DB_URL;
console.log(dbURI)
mongoose.connect(dbURI)
  .then((result) => {app.listen(5000);
                     console.log("DB connected");
  })
  .catch((err) => console.log(err));

// app.get('*', checkUser);

app.use(webRoutes);
