import mongoose from 'mongoose'
import { Stat } from './stat'

const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  type: String,
  cost: Number,
  size: String,
  description: String,
  reqStat: [Stat],
  buffStat: [Stat]
})

const Item = mongoose.model('Item', itemSchema)

export { Item }
