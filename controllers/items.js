import { Item } from '../models/item.js'

async function create (req, res) {
  try {
    const newItem = await Item.create(req.body)
    res.json(newItem)
  } catch (err) {
    console.log(err);
  }
}

export { create }