const mongoose = require('mongoose');
const connectionString = 'localbanco'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}
