const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
// Load config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'config/config.env'});
}

const app = express();

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
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})