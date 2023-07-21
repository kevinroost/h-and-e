import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  governingStat: {//skill mod value = Math.floor(baseStatValue/2) - 5
    type: String,
    Enum: ['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence'],
  }, 
  training: { //null until trained
    type: Number,
    max: 6
  },
  buffedBy: [{type: Schema.Types.ObjectId, ref: 'Item'}]
})

const Skill = mongoose.model('Skill', skillSchema)

export { skillSchema, Skill }
