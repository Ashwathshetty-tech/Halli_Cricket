const express = require('express');

const eventController = require('../controllers/eventController');

const storage = require('../helpers/storage');

const router = express.Router();

router.get('/', eventController.getProfiles);

router.post('/', storage, eventController.postProfile);

module.exports = router;
