const express = require("express");
const path = require("path");
const app = express()
app.get("/auction" , (req , res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
}
)

app.get("/bids" , (req , res)=>{
    res.sendFile(path.join(__dirname,'/bids.html'))
}
)
app.listen(3000);