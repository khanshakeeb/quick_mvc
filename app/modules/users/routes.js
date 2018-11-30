/**
 * A module level route file which glue
 * controllers or request within the modules
 * @author M Shakeeb Khan
 */
const express = require('express')
const router = express.Router();
const userController = require('./controllers/UserController');
const jwt = require('jsonwebtoken');
//require passport strategies
const passportMiddleware = require('./middleware/passport');

module.exports = function(app){
    //initialize passport into app 
    //const passport = passportMiddleware(passport);
    app.use(passportMiddleware.initialize());
  
    router.get('/users',userController.getUsers);
    router.post('/signup',userController.createUser);
    router.post('/login',function(req,res,next){
        passportMiddleware.authenticate('local', {session: false}, function(err, user, info){
            console.log(user);
            if (err || !user) {
                return res.status(400).json({
                    message: info ? info.message : 'Login failed',
                    user   : user
                });
            }
            const token = jwt.sign(user, 'THaBCN3eiVJkEZYLb6II');
            return res.json({user, token});
        })(req, res);
    });
    return router;
}


//module.exports = router;