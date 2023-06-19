const Course = require("../models/Course");


// @desc Create new Course
// @route POST /api/Course
// @access PUBLIC


const createNewCourse = async (req, res) => {
    // 1. Patikrinimai
    // insert funckija mangoose methodas ka paimu is req.body ir ka idedu i mongoDB
    // aprasote res. Kai gerai sekasi ir blogai sekasi
    if(!req.body.name) res.status(404).send("Not Found");

    const course = new Course({
        name: req.body.name,
        description: req.body.description,
        author: req.body.author
    });

    const result = await course.save();
    res.status(200).send(result);
}


const getAllCourses = async (req, res) => {
    const result = await Course.find.populate("author")
    res.send(result);
}


module.exports = {
    createNewCourse,
    getAllCourses
}


