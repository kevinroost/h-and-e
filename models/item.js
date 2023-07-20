import mongoose from 'mongoose'
import { statSchema } from './stat.js'

const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  type: String,
  cost: Number,
  size: String,
  description: String,
  reqStat: [statSchema],
  buffStat: [statSchema],
  buffSkill: {
    skill: String,
    buff: Number
  },
  check: {
    skill: String,
    dc: Number
  }
})

const Item = mongoose.model('Item', itemSchema)

export { Item }
