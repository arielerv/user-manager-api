const { model, Schema } = require('mongoose')

const modelSchema = {
    _id: { type: String },
    description: { type: String },
}

const customSchema = new Schema(modelSchema, {
    collection: 'roles',
    timestamps: true,
})

const customModel = model('Role', customSchema)

module.exports = customModel
