const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishSchema = new Schema ({
    name: String,
    description: String,
    price: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

module.exports = mongoose.model('Wish', wishSchema); 