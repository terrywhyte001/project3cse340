const router = require('express').Router();
const { showAddClassification, postAddClassification } = require('../controllers/classificationController');

router.get('/add', showAddClassification);
router.post('/add', postAddClassification);

module.exports = router;
