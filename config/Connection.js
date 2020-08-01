const mongoose = require('mongoose');
const connectionString = 'localbanco'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })

module.exports = {
    openConnection,
}
