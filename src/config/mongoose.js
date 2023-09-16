const mongoose = require('mongoose')

class Mongoose {
    static configure(connection) {
        mongoose.Promise = Promise
        mongoose.connect(connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        mongoose.connection.once('open', () =>
            console.info(
                `Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.db.databaseName}`
            )
        )
        mongoose.connection.on('close', () =>
            console.error('connection closed')
        )
        mongoose.connection.on('error', (err) =>
            console.error(`connection error ${err}`)
        )
    }
}

module.exports = Mongoose
