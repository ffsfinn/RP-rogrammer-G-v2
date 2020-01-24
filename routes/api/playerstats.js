const express = require('express');
const router = express.Router();
const playerStatsCtrl = require('../../controllers/playerstats');


router.get('/', playerStatsCtrl.view)
router.post('/add', playerStatsCtrl.create)

// Protected && Auth
router.use(require('../../config/auth'));
// router.post('/', checkAuth, playerStatsCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }

module.exports = router;