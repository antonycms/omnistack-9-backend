const router = require('express').Router();

// controllers
const SessionController = require('./app/controllers/SessionController');

router.post('sessions', SessionController.store);

module.exports = router;
