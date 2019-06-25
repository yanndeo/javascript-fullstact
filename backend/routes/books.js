const { Router} = require('express');
const router = Router();
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
                const books = await Book.find();
                console.log(books)
                res.json(books )

            } catch (error) {
                console.log('get_books', error)
            }
         })

        .post(async(req, res)=>{

            const {title, author, isbn} =req.body

            try {
                const newBook =  new Book({ title, author, isbn});
                                await newBook.save();
                res.json({ newBook })

            } catch (error) {
                console.log('post_books', error)

            }
        });




/**
 * Delete a Book
 */
router.delete('/:bookID', async (req, res)=>{

        try {
            await Book.findByIdAndDelete(req.params.bookID);
            res.json({ message: 'book deleted' })

        } catch (error) {
            console.log('delete_book', error)

        }


})
         

module.exports =router;