const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://user:1234@cluster0-srdis.mongodb.net/trabalhoFinal?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

module.exports = {
    openConnection,
}
