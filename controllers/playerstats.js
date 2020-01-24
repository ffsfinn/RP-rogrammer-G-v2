const User = require('../models/User')

module.exports = {
    view,
    create
}

async function view(req, res) {
    console.log('Hello', User.find(req.body.class))
    const stats = await User.find(req.body.class)
    try {
        res.status(200).json(stats);
    } catch {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    console.log('Route successful')
    const warrior = req.body.warrior;
    console.log(req.body.warrior);
    // const mage = req.body.mage;
    // const archer = req.body.archer;
    // const thief = req.body.thief;

    const classes = new Classes({
        warrior,
        // mage,
        // archer,
        // thief
    });

    classes.save()
    try {
        res.status(200).json(classes);
        console.log('Class created!', classes);
    } catch {
        res.status(400).json(err);
        console.log('Had trouble making the class...');
    }
}




