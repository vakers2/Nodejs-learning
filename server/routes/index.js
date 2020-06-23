const { Router } = require('express');

const router = new Router();

router.use('/cards', require('./cards'));

module.exports = router;
