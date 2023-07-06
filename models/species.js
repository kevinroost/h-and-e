import mongoose from 'mongoose'
import { Stat } from './stat'
import { Skill } from './skills'

const Schema = mongoose.Schema

const speciesSchema = new Schema({
  name: String,
  speed: Number,
  statBonuses: [Stat],
  skillBonuses: [Skill]
})

const Species = mongoose.model('Species', speciesSchema)

export { Species }
