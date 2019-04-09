export interface IItem {
  name: string
  price :number
  colour: string
}

export default class Item {
  name: string
  price: number
  colour: string

  constructor (object: { name: string, price: number, colour: string} = { name: '', price: 0, colour: '' }) {
    this.name = object.name
    this.price = object.price
    this.colour = object.colour
  }
}
