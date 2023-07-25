import mongoose from 'mongoose'
import { statSchema } from './stat.js'
import { skillSchema } from './skill.js'

const Schema = mongoose.Schema

const speciesSchema = new Schema({
  name: String,
  speed: Number,
  statBonuses: [statSchema],
  skillBonuses: [skillSchema] //object!, objectID to skill and number to buff. No more skillSchema
})

const Species = mongoose.model('Species', speciesSchema)

export { Species }
