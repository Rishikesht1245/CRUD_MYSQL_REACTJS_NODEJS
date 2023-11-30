import express from "express";
import mysql from "mysql2";
import { config } from "dotenv";
config();

const app = express();

//DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  //   password while connecting to the work bench
  password: process.env.DB_PASSWORD,
  //    name of the schema
  database: "test",
});

// test route
app.get("/", (req, res) => {
  res.send("Hello from crud backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json("Something went wrong!");
    else res.json(data);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
