const router = require('express').Router();
const { Vet } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const allVets = await Vet.findAll();
    res.send(allVets);
  } catch (err) {
    next(err);
  }
});
