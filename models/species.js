import mongoose from 'mongoose'
import { statSchema } from './stat.js'
import { skillSchema } from './skill.js'

const Schema = mongoose.Schema

const speciesSchema = new Schema({
  name: String,
  speed: Number,
  statBonuses: [statSchema],
  skillBonuses: [skillSchema]
})

const Species = mongoose.model('Species', speciesSchema)

export { Species }
