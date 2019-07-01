import './styles/app.css'
import UI from './UI';


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
    const ui = new UI();
    ui.renderBooks();
});


/**
 * Send form 's data 
 * using class service BookService
 * which contain all method request 
 * to the server
 */
document.getElementById('book-form')
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
            const ui = new UI();

            ui.AddNewBook(formData)
            
}); 




/**
 * L' DOMContentLoadedévénement se déclenchera dès que la hiérarchie du DOM sera entièrement construite. 
 *  loads era lorsque le chargement de toutes les images et de tous les sous-cadres sera terminé.
 */