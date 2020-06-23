const { Router } = require('express');
const db = require('../modules/db');
const { RESPONSE_FIELDS } = require('../consts');

const router = new Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const card = await db.Card.findOne({
    attributes: RESPONSE_FIELDS.CARD,
    where: { id },
    rejectOnEmpty: true,
  });

  res.json(card);
});

router.get('/', async (req, res) => {
  const card = await db.Card.findAll();
  res.json(card);
});

module.exports = router;
