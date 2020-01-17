const User = require('../models/User');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function index(req, res) {

    try {
      const userIndex = await User.find({});
      res.status(201).json(userIndex);
    } catch (err) {
      res.status(400).json(err);
    }
  }

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
  
module.exports = {
    signup,
    index
}