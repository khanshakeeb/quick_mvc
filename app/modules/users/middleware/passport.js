
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const Models = require('../../../../models/index');



    /**
 * Local login strategy
 */
passport.use('local',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},async function (email, password, cb) {
    //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
    console.log("skjfhsfjskh");
    try{
        isUser = await Models.User.findOne({where: {email: email}});
        if(isUser && typeof isUser.dataValues != 'undefined'){
            isPassword = Models.User.validPassword(password, isUser.dataValues.password);
            console.log("is password match" , isPassword);
            if(isPassword) return cb(null, isUser.dataValues, {message: 'Logged In Successfully'});
            else return cb(null, false, {message: 'Incorrect password.'});            
        }else{
            return cb(null, false, {message: 'Incorrect email or password.'});
        }    
    }catch(error){
        return cb(error);
    }
}
));

/**
 * JWT middleware strategy
 */
passport.use('jwt',new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'THaBCN3eiVJkEZYLb6II'
},
function (jwtPayload, cb) {
    console.log("decode jwt token");
    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    // return UserModel.findOneById(jwtPayload.id)
    //     .then(user => {
    //         return cb(null, user);
    //     })
    //     .catch(err => {
    //         return cb(err);
    //     });
}
));

module.exports = passport;



