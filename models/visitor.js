const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phoneNum: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    agree: {
        type: Boolean,
        default: false
    },
    contactType: {
        type: String,
        required: false
    },
    feedback: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Visitor', visitorSchema);