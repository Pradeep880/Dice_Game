import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/LoginAndRegister", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Your remaining code goes here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("My api key");
});

app.post("/register", async (req, res) => {
  
  const { name, email, password } = req.body;
  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("Exist");
      console.log("Already Exist")
    } else {
      res.json("not exist");
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });
      await User.insertMany([newUser]);
    }
  } catch (e) {
    res.json("Not exist");
  }
});
app.post('/',async (req,res)=>{
    // alert("login page")
    console.log("login page here")
    const {email,password}=req.body();
     console.log(req.body);
    try{
         const Email_check=await User.findOne({email:email})
        //  const Pass_check=await  User.findOne({password:password});
         if(Email_check){
            res.json("success");

         }else{
            res.json("unsuccess")
            console.log("register first")
         }
           
           
    }catch{
        res.json("register first")
    }
})
app.listen(9002, () => {
  console.log("Started at port 9002");
});
