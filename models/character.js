import mongoose from 'mongoose'
import { Stat } from './stat'

const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: String,
  level: Number,
  inventory: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  equipped: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  stats: [Stat]
},{
  timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)

export { Character }
