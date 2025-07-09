import { Client } from "pg";
import dotenv from "dotenv"
import express from "express";
const app=express();
dotenv.config();
const URL=process.env.DB_URL
const pgClient =new Client(URL)
const username="Virat"
const email="virat@gmail.com"
const password="virat123"
const InsertQuery=`INSERT INTO users(username,email,password)VALUES('${username}','${email}','${password}');`
const main=async()=>{
    await pgClient.connect();
    pgClient.query(InsertQuery);
    console.log("user insert successfully");
}
main();
