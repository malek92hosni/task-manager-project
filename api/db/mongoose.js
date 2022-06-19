// This file will handle connection logic to the MongoDB database

const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");
mongoose.Promise = global.Promise;

const uri =
  "mongodb+srv://test:test@cluster0.jb3jh.mongodb.net/TaskManager?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Connected to MongoDB successfully :)");
  })
  .catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
  });

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
