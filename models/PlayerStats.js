const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    warrior: {
        attack: {
            type: Number,
            default: 2
        },
        defense: {
            type: Number,
            default: 3
        },
        spAtk: {
            type: Number,
            default: 1
        },
        spDef: {
            type: Number,
            default: 1
        },
    },
    mage: {
        attack: {
            type: Number,
            default: 1
        },
        defense: {
            type: Number,
            default: 1
        },
        spAtk: {
            type: Number,
            default: 3
        },
        spDef: {
            type: Number,
            default: 2
        },
    },
    archer: {
        attack: {
            type: Number,
            default: 3
        },
        defense: {
            type: Number,
            default: 1
        },
        spAtk: {
            type: Number,
            default: 2
        },
        spDef: {
            type: Number,
            default: 1
        },
    },
    thief: {
        attack: {
            type: Number,
            default: 1
        },
        defense: {
            type: Number,
            default: 1
        },
        spAtk: {
            type: Number,
            default: 1
        },
        spDef: {
            type: Number,
            default: 1
        },
    },
  
  })

  module.exports = mongoose.model('PlayerStats', playerSchema)