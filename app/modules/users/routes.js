/**
 * A module level route file which glue
 * controllers or request within the modules
 * @author M Shakeeb Khan
 */
const express = require('express')
const router = express.Router();
const userController = require('./controllers/UserController');

router.get('/users',userController.getUsers);

module.exports = router;