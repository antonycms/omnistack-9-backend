const router = require('express').Router();
const Multer = require('multer');
const multerConfig = require('./config/multer');

// controllers
const SessionController = require('./app/controllers/SessionController');
const SpotController = require('./app/controllers/SpotController');

// validators 
const SessionStoreValidator = require('./app/validators/SessionStore');
const SpotStoreValidator = require('./app/validators/SpotStore');

const upload = Multer(multerConfig);

router.post('/sessions', SessionStoreValidator, SessionController.store);

router.post('/spots', upload.single('file'), SpotStoreValidator, SpotController.store);
router.get('/spots', SpotController.index);

module.exports = router;
