const User = require('../model/User');

async function create() {
    const user = new User(req.body);

    try {
        await user.save()
        res.status(201).JSON(user);
    } 
    catch(err) {
        res.status(400).JSON(err);
    }
}

async function index(req, res) {

    try {
      const puppyIndex = await Puppy.find({});
      res.status(201).json(puppyIndex);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  
module.exports = {
    create,
    index
}