import mongoose from 'mongoose'

const Schema = mongoose.Schema

const featSchema = new Schema({
  type: {
    type: String,
    Enum: ['General', 'Racial', 'Strength', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom', 'General Combat', 'Offensve Combat', 'Defensive Combat', 'Miscellaneous Combat', 'Marksman', 'General Magic', 'Harmony', 'Entropy'],
    required: true
  },
  reqSpecies: { type: Schema.Types.ObjectId, ref: 'Species' },
  reqFeat: { type: Schema.Types.ObjectId, ref: 'Feat' },
  reqStat: { type: Schema.Types.ObjectId, ref: 'Stat' }
})

const Feat = mongoose.model('Feat', featSchema)

export { Feat }