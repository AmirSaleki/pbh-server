const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const personRoute = require("./routes/person");
const paymentRoute = require("./routes/payment");
const saleRoute = require("./routes/sale");
const userRoute = require("./routes/user");
const cors = require("cors");

dotEnv.config();

const uri = process.env.mongoURL;
mongoose
  .connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());

app.use("/server/person", personRoute);
app.use("/server/payment", paymentRoute);
app.use("/server/sale", saleRoute);
app.use("/server/user", userRoute);

app.listen(8800, () => {
  console.log("Backend Server is running");
});
