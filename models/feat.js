import mongoose from 'mongoose'
import { Skill } from './skill.js'

const Schema = mongoose.Schema

const featSchema = new Schema({
  type: {
    type: String,
    Enum: ['General', 'Racial', 'Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'General Combat', 'Offensve Combat', 'Defensive Combat', 'Miscellaneous Combat', 'Marksman', 'General Magic', 'Harmony', 'Entropy'],
    required: true
  },
  relatedSkill: { Skill },
  reqSpecies: { type: Schema.Types.ObjectId, ref: 'Species' },
  reqFeat: { type: Schema.Types.ObjectId, ref: 'Feat' },
  reqStat: { type: Schema.Types.ObjectId, ref: 'Stat' }
})

const Feat = mongoose.model('Feat', featSchema)

export { Feat }