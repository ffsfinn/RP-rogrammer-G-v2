const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    warrior: {
        attack: Number,
        defense: Number,
        spAttack: Number,
        spDefense: Number
    },
    mage: {
        attack: Number,
        defense: Number,
        spAttack: Number,
        spDefense: Number
    },
    archer: {
        attack: Number,
        defense: Number,
        spAttack: Number,
        spDefense: Number
    },
    theif: {
        attack: Number,
        defense: Number,
        spAttack: Number,
        spDefense: Number
    }

})

module.exports = mongoose.model('Player', playerSchema);