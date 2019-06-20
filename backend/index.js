const express = require('express');

const app = express();

//SETTINGS 
app.set('port', 4000)


//STZRT THE SERVER
app.listen(app.get('port') ,()=>{
    console.log("Server running on port :" , app.get("port"));
})