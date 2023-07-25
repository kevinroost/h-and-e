import mongoose from 'mongoose'

const Schema = mongoose.Schema

const statSchema = new Schema({
  attribute: String,
  points: {
    type: Number,
    default: 5,
    required: true
  }
})

const Stat = mongoose.model('Stat', statSchema)

export { statSchema, Stat }
