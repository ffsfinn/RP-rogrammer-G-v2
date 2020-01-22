const User = require('../models/User');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  console.log('this is req.body');
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({token});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}


/*--- helper functions ---*/

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}