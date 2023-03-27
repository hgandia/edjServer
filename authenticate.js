const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const JwtStrategy = require('passport-jwt').Strategy;  //Authentication method to authenticate user.
const ExtractJwt = require('passport-jwt').ExtractJwt; /*This is an object that will provide us with several helper methods to
                                                         extract the jw token from a request object.
                                                        */ 
const jwt = require('jsonwebtoken'); //Used to create, sign and verify tokens.
const config = require('./config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = user => {
    return jwt.sign(user, config.secretKey, {expiresIn: 3600});
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //Specifies how the token should be extracted from the incoming request object/message.
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
    new JwtStrategy(
        opts, 
        (jwt_payload, done) => {
            console.log('JWT Payload:', jwt_payload);
            User.findOne({_id: jwt_payload._id}, (err, user) => {
                if(err){
                    return done(err, false);
                } else if (user){
                    return done(null, user);
                } else {
                    return done(null, false);
                    //In this section I can create login to signup a new user/create a new account.
                }
            });
        }
    )
);

exports.verifyUser = passport.authenticate('jwt', {session: false});