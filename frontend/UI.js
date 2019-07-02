import BookService from "./services/BookService";
import {format} from 'timeago.js';

const bookService =  new BookService();


class UI {

    /**
     * fetch book list
     */
    static async renderBooks(){

      const books = await bookService.getBooks();
      let booksCardcontainer = document.getElementById('books-cards');
      booksCardcontainer.innerHTML='';
      
      books.forEach( book => {

        const div = document.createElement('div');
        div.className = '';
        div.innerHTML = `
            <div class="card m-2">
                <div class="row">
                    <div class="col-md-4">
                        <img src="http://localhost:4000${book.imagePath} " alt="" class="img-fluid" />
                    </div>
                    <div class="col-md-8 ">
                        <div class="card-block px-2 ">
                            <h4 class="card-title">${book.title} </h4>
                            <p class="card-text">${book.author} </p>
                            <a href="#" class="btn btn-danger delete" _id="${book._id}"> X </a>
                        </div>
                    </div>
                </div>
                <div class="card-footer"> ${ format(book.created_at) } </div>
            </div>
          `

          booksCardcontainer.appendChild(div)

        ;
      });

      
    
    }

    /**
     * Add Bood
     * use service
     */
    static async addNewBook(book){

        await bookService.postBook(book);

        this.clearFormBook();

        this.renderBooks();


    }

    /**
     * Suppression
     * use service
     */
    static async deleteBook(bookID){
        await bookService.deleteBook(bookID);

        this.renderBooks();
    }



    /**
     * Clear Form
     */
    static clearFormBook(){
        document.getElementById("book-form").reset();
    }



    /**
     * 
     */
    static renderMessage(message, colorMessage, secondsToRemove){
        const div =  document.createElement('div');
        div.className = `alert alert-${colorMessage} message` ;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');

        container.insertBefore(div, bookForm);

        setTimeout(()=> {
            document.querySelector('.message').remove();
        }, secondsToRemove )
    }




}

export default UI