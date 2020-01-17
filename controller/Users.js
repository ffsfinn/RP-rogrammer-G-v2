const User = require('../models/User');

async function create(req, res) {
    const user = new User(req.body);

    try {
        await user.save()
        res.status(201).json(user);
    } 
    catch(err) {
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
  
module.exports = {
    create,
    index
}