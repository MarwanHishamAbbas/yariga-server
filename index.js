import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./mongodb/connect.js";
import PropertyRouter from "./routes/property.routes.js";
import UserRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/properties", PropertyRouter);

app.get("/", (req, res) => {
  res.send({ message: "Hello Yariga!" });
});

const startServer = async () => {
  try {
    ConnectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
