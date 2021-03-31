const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
// Load config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'config/config.env'});
}

// routes
const createUsers = require('./routes/api/users');

// connect to db
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
console.log(`Connecting to database ${MONGO_DB}`);
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

    connectTimeoutMS: 10000,
  })
.then(() => console.log('mongo db connected...'))
.catch(err => console.log(err));


app.use(express.json({ limit: '100mb' }));

if (process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

// creating cookie
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// all route starting with /auth should refer createUsers
app.use('/auth', createUsers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});