const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishSchema = new Schema ({
    name: String,
    description: String,
    URL: String,
    imageURL: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Wish', wishSchema); 