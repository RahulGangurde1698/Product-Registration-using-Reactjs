

const express = require("express");
const app = express();
const port= process.env.PORT || 3001;

app.use(express.json());
const User = require('./Model/Scema');
app.use(require('./routes/route'));
require("./database/db")


app.use(express.json());
app.get("/register",(req,res)=>{
    res.send("Hello from node")
});

app.listen(port, ()=>{
  console.log(`server is running at ${port}`);
})