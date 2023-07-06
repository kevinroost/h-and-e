import mongoose from 'mongoose'

const Schema = mongoose.Schema

const statSchema = new Schema({
  attribute: String,
  points: {type: Number, default: 6}
})

const Stat = mongoose.model('Stat', statSchema)

export { Stat }
