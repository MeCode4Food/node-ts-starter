// consider using typegoose

// eslint-disable-next-line
import { Model, model, Document } from 'mongoose'
// eslint-disable-next-line
import { IItem } from '../models/item'

const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/local'

mongoose.connect(uri, { useNewUrlParser: true }, (err: any) => {
  console.log(`${err ? err.message : 'Connected Successfully!'}`)
})

const itemSchema = new mongoose.Schema({
  name: 'string',
  price: 'string',
  colour: 'string'
})

interface IItemModel extends Document, IItem {}

const ItemModel: Model<IItemModel> = model<IItemModel>(
  'Item',
  itemSchema,
  'item'
)

export default ItemModel
