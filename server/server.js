const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
const route = require('./routes');
const dbConfig = require('./config/config');

const corsOptions = {
    origin: "http://localhost:3000" // for React.
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

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