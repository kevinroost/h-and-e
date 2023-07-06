import mongoose from 'mongoose'
import { Stat } from './stat'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  governingStat: {type: Schema.Types.ObjectId, ref: 'Item'}, 
    //skill mod value = Math.floor(baseStatValue/2) - 5
    //dynamically point to user's character stat._id
  training: Number, //null until trained
  totalMod: Number //null until trained
})

const Skill = mongoose.model('Skill', skillSchema)

export { Skill }
