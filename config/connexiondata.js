const mongoose = require("mongoose");
const connexiondata = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connexiondata");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connexiondata;
