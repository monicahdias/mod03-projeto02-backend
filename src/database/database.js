const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Atlas connected'))
    .catch((error) =>
      console.log(`Error to connect to MongoDB Atlas, error ${error}`),
    );
}

module.exports = connectToDatabase;
