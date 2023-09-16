const { model, Schema } = require('mongoose')

const modelSchema = {
    _id: { type: String },
    name: { type: String },
    surname: { type: String },
    email: { type: String },
    password: { type: String },
}

const customSchema = new Schema(modelSchema, {
    collection: 'users',
    timestamps: true,
})

const customModel = model('User', customSchema)

module.exports = customModel
