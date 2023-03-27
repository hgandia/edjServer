const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        default: ''
    },
    lastname: {
        type: String,
        required: true,
        default:''
    },
    admin: {
        type: Boolean,
        dafault: false
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);