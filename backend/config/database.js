const mongoose = require("mongoose");

async function connectDatabase(){
  try {
    mongoose.connect(process.env.MONGODB_URL)
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDatabase;
