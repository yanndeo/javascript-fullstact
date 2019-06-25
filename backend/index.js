
if(process.env.NODE_ENV !== 'production'){
    require("dotenv").config();

}
console.log(process.env.NODE_ENV)
const express = require('express');
const morgan =require('morgan');
const multer = require('multer')
const path = require('path')
//
const connectDB = require('./database')
const app = express();




/**
 * SETTINGS
 */
connectDB();
app.set('port', 4000)




/**
 * MIDDLEWARES
 */
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination : path.join(__dirname, 'public/uploads'),
    filename(req , file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname)); 
    }
})

app.use(multer({ storage}).single('image'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())





/**
 * ROUTES
 */
app.use('/api/books', require('./routes/books'));




/**
 * STATIC FILES
 */
app.use(express.static(path.join(__dirname, 'public') ));




/**
 * START THE SERVER
 */
app.listen(app.get('port') ,()=>{
    console.log("Server running on port :" , app.get("port"));
})