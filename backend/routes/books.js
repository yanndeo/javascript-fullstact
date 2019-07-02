const { Router} = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');
const Book = require('../models/Books');




/**
 * Get all Books
 * and post a book 
 * same url, 
 * differente method
 */
router.route('/')


      .get( async(req, res)=>{

            try {
                const books = await Book.find().sort({ 'created_at': -1 });
                console.log(books)
                res.json(books )

            } catch (error) {
                console.log('get_books', error)
            }
         })

        .post(async(req, res)=>{

            const { title, author, isbn } = req.body;
            const imagePath = `/uploads/${req.file.filename}`
            const newBook = new Book({ title, author, isbn, imagePath });

            try {
                await newBook.save();
                res.json({ message: 'Book Saved' })

            } catch (error) {
                console.log('post_books', error)
            }

        });




/**
 * Delete a Book
 */
router.delete('/:bookID', async (req, res)=>{

        try {
           const book= await Book.findByIdAndDelete(req.params.bookID);

           await unlink(path.resolve('./backend/public/'+ book.imagePath ))

          res.json({ message: 'book deleted' })

        } catch (error) {
            console.log('delete_book', error)

        }


})
         

module.exports =router;