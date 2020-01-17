const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.once("connected", function() {
  console.log(`MongoDB Connected To :: ${db.host} : ${db.port}`);
});