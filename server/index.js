const express = require ("express")
const mongoose = require("mongoose")
const cors = require ("cors");
const Formdata = require ("./models/Formdata")
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/clients");
  app.post("/Contact me",(req,res)=>{
    Formdata.create(req.body)
    .then(Formdata => res.json(Formdata))
    .catch(err => res.json(err))
  })

  app.listen(3001,()=>{
    console.log("server is running");
  
  }
)


