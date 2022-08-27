const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
const MONGO_URL = 'mongodb+srv://maruf:maruf@cluster0.cfivetg.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(console.log("connected to db"))
.catch((err) => console.log(err));


app.use("/api/auth",authRoute);


app.listen("5000",() =>{
    console.log("Backend Running");

});

