import { Species } from '../models/species.js'

async function create (req, res) {
  try {
    const newSpecies = await Species.create(req.body)
    res.json(newSpecies)
  } catch (err) {
    console.log(err);
  }
}

export { create }