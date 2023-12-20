import express from "express";
import mysql from "mysql2";
import cors from "cors";
import { config } from "dotenv";
import { upload } from "./utils/imageUpload.js";
import { processImage } from "./utils/imageProcessor.js";
config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  //   password while connecting to the work bench
  password: process.env.DB_PASSWORD,
  //    name of the schema
  database: "test",
});

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// test route
app.get("/", (req, res) => {
  res.send("Hello from crud backend");
});

// get all books
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json("Something went wrong!");
    else res.json(data);
  });
});

//create new book
app.post("/books", (req, res) => {
  //? mark on values provides security (values will be provided separately)
  const q = "INSERT INTO books (`title`, `desc`, `price`,`cover`) VALUES(?)";
  //   Values should be kept as an array
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(403).json(err);
    res.json("Book has been created successfully !");
  });
});

//Delete a book
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book deleted successfully");
  });
});

//Update a book
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const q =
    "UPDATE books SET `title`=?, `desc`=?, `price`=?, `cover`=?  WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

app.post(
  "/upload",
  upload.single("banner"),
  (req, res, next) => {
    console.log(req.file); // getting undefined here
    next();
  },
  processImage,
  (req, res) => {
    // Your logic here
  }
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
