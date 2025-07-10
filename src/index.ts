import { Client } from "pg";
import dotenv from "dotenv"
import express from "express";
const app=express();
dotenv.config();
app.use(express.json());
const URL=process.env.DB_URL
const pgClient =new Client(URL)
const InsertQuery=`INSERT INTO users(username,email,password)VALUES($1,$2,$3);`
app.post("/signup",async (req,res)=>{
   try {
        const { username, email, password } = req.body;
        await pgClient.query(InsertQuery, [username, email, password]);
        console.log("User inserted successfully");
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: "Failed to create user " });
    }
})
app.listen(3000,async()=>{
    await pgClient.connect();
    console.log("Database connection establish!");
});


