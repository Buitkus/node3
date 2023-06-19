const Author = require(`../models/Author`);

// Create new Author

const createNewAuthor = async (req, res) => {
    // 1. Patikrinimai
    // insert funckija mangoose methodas ka paimu is req.body ir ka idedu i mongoDB
    // aprasote res. Kai gerai sekasi ir blogai sekasi
    if(!req.body.name) res.status(404).send("Not Found");

    const author = new Author({
        name: req.body.name,
        bio: req.body.bio,
        website: req.body.website
    });

    const result = await author.save();
    res.status(200).send(result);
}

const getAllAuthors = async (req, res) => {
    const result = await Author.find();
    res.send(result);
}

const getAuthorById = async (req, res) => {
    const result = await Author.find({_id: req.params.id});
    res.send(result);
}


module.exports = {
   createNewAuthor,
   getAllAuthors,
   getAuthorById
}