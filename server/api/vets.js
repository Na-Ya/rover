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

router.get('/:id', async (req, res, next) => {
  try {
    const vetId = Number(req.params.id);
    const singleVet = await Vet.findById(vetId);
    res.send(singleVet);
  } catch (err) {
    next(err);
  }
});
