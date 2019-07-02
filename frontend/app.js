import './styles/app.css'
import UI from './UI';

const ui = new UI();


/**
 * Generique function 
 * access to the DOM
 */
const getFormElement=(elmntID)=>{
    console.log('item', elmntID)
   return document.getElementById(elmntID);
}

/**
 * 
 */
document.addEventListener("DOMContentLoaded" , ()=>{
    //const ui = new UI();
    UI.renderBooks();
});


/**
 * Send form 's data 
 * using class service BookService
 * which contain all method request 
 * to the server
 */
getFormElement('book-form')
        .addEventListener('submit', (e)=>{

            let title = getFormElement('title').value ;
            let author = getFormElement('author').value ;
            let isbn = getFormElement('isbn').value;
            let image = getFormElement('image').files[0];

            e.preventDefault();

            const formData = new FormData();
                formData.append('title', title);
                formData.append('author', author);
                formData.append('isbn', isbn);
                formData.append('image', image)

            console.log(formData)

            //const ui = new UI();
            UI.addNewBook(formData)

            UI.renderMessage('New book Added', 'success', 3200)
            
}); 



/**
 * 
 */
getFormElement('books-cards').addEventListener('click', e=>{

    if(e.target.classList.contains('delete')){
        e.preventDefault();
        console.log(e.target.getAttribute('_id'));

        const book_id = e.target.getAttribute('_id');

        UI.deleteBook(book_id);

        UI.renderMessage('Book removed', 'danger', 2000);

       // ui.DeleteBook(book_id)
    }
})

















/**
 * L' DOMContentLoadedévénement se déclenchera dès que la hiérarchie du DOM sera entièrement construite. 
 *  loads era lorsque le chargement de toutes les images et de tous les sous-cadres sera terminé.
 */