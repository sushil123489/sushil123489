const mongoose = require("mongoose");

mongoose.set('strictQuery', false)
try {
    const connection = mongoose.connect('mongodb://localhost:27017/file_system',{ useNewUrlParser: true });

    if (connection) {
        console.log("connnected!");

    }

} catch (error) {
    console.log(error, "connnection is not establish")

}

