const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    task: String,
    comleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Todo', Schema);