import mongoose from 'mongoose'

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  governingStat: {
    type: String,
    Enum: ['Strength', 'Dexterity', 'Constitution', 'Wisdom', 'Intelligence'],
  }, 
    //skill mod value = Math.floor(baseStatValue/2) - 5
  training: { //null until trained
    type: Number,
    max: 6
  },
  totalMod: Number //null until trained
})

const Skill = mongoose.model('Skill', skillSchema)

export { skillSchema, Skill }
