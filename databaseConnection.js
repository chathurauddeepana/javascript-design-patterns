const mongoose = require('mongoose');
require('dotenv').config()

// Connect to MongoDB database
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB successfully!");
}).on('error', (error) => {
    console.log("Connection error: ", error);
});

module.exports = mongoose;
