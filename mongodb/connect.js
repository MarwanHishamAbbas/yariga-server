import mongoose from "mongoose";

const ConnectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connected");
    })
    .catch(() => {
      console.log("Database Connection Failed");
    });
};

export default ConnectDB;
