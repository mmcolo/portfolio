const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    email: {type : String, required: false },
    content: {type: String, required: true }
});

module.exports = mongoose.model('Message', messageSchema);