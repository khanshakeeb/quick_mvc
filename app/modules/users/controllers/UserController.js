/**
 * UserController module
 * @author M Shakeeb Khan
 */

module.exports = {
    getUsers: function(req,res,next){
        res.json({id:1,name:"inside controllers"});
    }
};