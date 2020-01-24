const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

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

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  class: [playerSchema]
},
{
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  // password has changed! - salt and hash
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    user.password = hash;
    return next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
}


module.exports = mongoose.model('User', userSchema);