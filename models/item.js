import mongoose from 'mongoose'
import { statSchema } from './stat.js'
import { skillSchema } from './skill.js'

const Schema = mongoose.Schema

const itemSchema = new Schema({
  name: String,
  type: String,
  cost: Number,
  size: String,
  description: String,
  reqItem: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  reqStat: [statSchema],
  buffStat: [statSchema],
  buffSkill: [skillSchema],
  check: {
    skill: String,
    dc: Number
  },
  uses: Number
})

const Item = mongoose.model('Item', itemSchema)

export { Item }
