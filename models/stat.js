import mongoose from 'mongoose'

const Schema = mongoose.Schema

const statSchema = new Schema({
  attribute: String,
  points: Number
})

const Profile = mongoose.model('Stat', statSchema)

export { Stat }
