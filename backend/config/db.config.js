require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, 
{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB LH connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})
