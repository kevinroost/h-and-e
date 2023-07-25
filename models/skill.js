import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  governingStat: {//skill mod value = Math.floor(baseStatValue/2) - 5
    type: String,
    Enum: ['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence'],
  }, 
  buffedBy: [
    {
      item: {type: Schema.Types.ObjectId, ref: 'Item'},
      buff: Number
    }
  ]
})

const Skill = mongoose.model('Skill', skillSchema)

export { skillSchema, Skill }
