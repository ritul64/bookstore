const router = require("express").Router();
const user = require("../models/user");
const Book = require("../models/book"); 
const jwt = require("jsonwebtoken");

const { authenticateToken } = require("./userauth");

// Add Book — Admin Only
router.post("/add-book", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const User = await user.findById(id);

        if (User.role !== "admin") {
            return res.status(400).json({ message: "You don't have access." });
        }

        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language,
        });

        await book.save();
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Update Book — Admin or Authenticated
router.put("/update-book", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.headers;

        await Book.findByIdAndUpdate(
            bookid,
            {
                url: req.body.url,
                title: req.body.title,
                author: req.body.author,
                price: req.body.price,
                desc: req.body.desc,
                language: req.body.language,
            });

        res.status(200).json({ message: "Book updated successfully!", });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.delete("/delete-book", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.headers;
        await Book.findByIdAndDelete(bookid);

        return res.status(200).json({ 
         message: "Book deleted successfully!",
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

//get all books 
router.get("/get-all-books",async (req,res)=>{
    try{
        const books = await Book.find().sort({ createdAt: -1 });
        return res.json({
            status: "success",
            data: books,
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
    }
});

router.get("/get-recent-books",async (req,res)=>{
    try{
        const books = await Book.find().sort({ createdAt: -1 }).limit(4);
        return res.json({
            status: "success",
            data: books,
        });
    }catch(error) {
        console.log(error);
        return res.status(500).json({message:"an error occurred"});
    }
});

router.get("/get-book-by-id/:id", async (req,res)=>{
    try{
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.json({
            status: "success",
            data: book,
        });
    }catch(error) {
        console.log(error);
        console.log(error);
        return res.status(500).json({message: "an error occurred "});
    }
});

module.exports = router;
