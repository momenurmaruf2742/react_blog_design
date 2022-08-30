const express = require("express");
const app = express();
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
.then(console.log("connected to db"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination:(req,File,cb) =>{
    cb(null,"images")
  },filename:(req,file,cb) =>{
    cb(null,req.body.name)
  }
})

const upload = multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("file has been uploaded")
})


app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postRoute);
app.use("/api/category",categoryRoute);


app.listen("5000",() =>{
    console.log("Backend Running");

});

