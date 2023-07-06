import mongoose from 'mongoose'
import { Stat } from './stat'

const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: String,
  species: {type: Schema.Types.ObjectId, ref: 'Species'},
  level: Number,
  inventory: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  equipped: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  stats: [Stat],
  isInjured: {type: Boolean, default: false}
},{
  timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)

export { Character }
