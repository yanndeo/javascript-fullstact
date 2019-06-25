const mongoose = require('mongoose')




const connectDB = async() =>{

    try {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false
        });

        console.log('>>>>>>> Database connected');

    } catch (error) {
        console.log(error)
        process.exit(1);
    }


}

module.exports = connectDB;