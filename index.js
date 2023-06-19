require("dotenv").config();
const connectToDB = require("./config/db");
connectToDB();


const express = require("express");
const app = express();
app.use(express.json());

const {createNewAuthor, getAllAuthors, getAuthorById} = require("./controllers/AuthorController");

const { createNewCourse, getAllCourses } = require("./controllers/CourseController");

app.post("/api/author", createNewAuthor);
app.get("/api/authors", getAllAuthors);
app.get("/api/author/:id", getAuthorById);


app.post("/api/course", createNewCourse);
app.post("/api/courses", getAllCourses);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});



