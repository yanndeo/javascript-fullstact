
class BookService {


    constructor(){
        this.URI = `http://localhost:4000/api/books`;
    }

    /**
     * 
     */
    async getBooks(){
        const response = await fetch(this.URI,{
            headers: {
                'Content-Type': 'application/json',
                'mode': 'no-cors'
            },
            method: 'GET'


        });
        const books = await response.json();
        
        return books;
    }

    /**
     * 
     */
    async postBook(book){
        const res = await fetch(this.URI, {
                         method: 'POST',
                         body: book
                    });

        const data = await res.json();
        console.log(data);


    }

    /**
     * 
     */
     async deleteBook(bookID){
        const res = await fetch(`${this.URI}/${bookID}`, {
                            headers: {
                                'Content-Type':'application/json'
                            },
                            method:'DELETE'
                        });

        const data = await res.json();
        console.log(data);
        

    }


    


}

export default BookService;