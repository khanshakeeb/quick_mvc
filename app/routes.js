/**
 * This route is responsible for loading all the child routes
 * from modules e.g users
 * @author M. Shakeeb Khan
 */
const userRoutes = require('./modules/users/routes.js');
module.exports= function(app){
    //pass app object to user routes
    app.use('/api/v1', userRoutes(app));       
}