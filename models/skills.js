import mongoose from 'mongoose'
import { Stat } from './stat'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  training: Number,
  governingStat: Stat, //skill mod value = Math.floor(baseStatValue/2) - 5
  totalMod: Number
})

const Skill = mongoose.model('Skill', skillSchema)

export { Skill }
