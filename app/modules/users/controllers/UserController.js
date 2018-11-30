/**
 * UserController module
 * @author M Shakeeb Khan
 */
const Models = require('../../../../models/index');
module.exports = {
    getUsers: function(req,res,next){
        res.json({id:1,name:"inside controllers"});
    },
    /**
     * Create user into database with password hash
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    createUser: async function(req,res,next){
       const data = req.body;
       data.password = Models.User.generateHash(data.password);
       const isUser = await Models.User.create(data);      
       res.json(isUser);
    }

};