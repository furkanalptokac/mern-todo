const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

const route = require('./routes');
const dbConfig = require('./config/config');

app.use(route);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

mongoose
    .connect(dbConfig.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to the db successfully.')
    })
    .catch(err => {
        console.log('db connection failed.', err);
        process.exit();
    });

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
});