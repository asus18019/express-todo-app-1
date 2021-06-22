const { Schema, model } = require('mongoose');

const schema = new Schema({
    nickname: {type: String, required: true},
    date: {type: String, required: true},
    text: {type: String, required: true},
    comment: {type: String, required: true},
})

module.exports = model('Item', schema);