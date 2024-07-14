import express from "express";
import cors from "cors";

const app=express();
app.use(cors());

app.get("/getData",(req,res)=>{
    res.send("West Agile Labs is a Digital Product Agency Offering Design Development and consulting Services to both startups and enterprises");
});
const PORT=5001;
app.listen(5001,()=>console.log("app is running"));