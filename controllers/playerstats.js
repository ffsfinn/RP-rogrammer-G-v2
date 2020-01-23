const Player = require('../models/PlayerStats');

module.exports = {
    view,
    create
}

async function view(req, res) {
    
}

// async function highScores(req, res) {
//     console.log(req.user)
//     const scores = await Score.find({})
//       .sort({numGuesses: 1, seconds: 1})
//       // Default to a limit of 20 high scores
//       // if not specified in a query string
//       .limit(req.query.limit || 20);
//     res.json(scores);
//   }



