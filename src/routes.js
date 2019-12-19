const router = require('express').Router();

// controllers
const UserController = require('./app/controllers/UserController');

router.post('/sessions', UserController.store);

module.exports = router;
