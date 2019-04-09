import Item from '../models/item'

const itemNames = ['Apple', 'Orange', 'Banana']
const itemPrices = [12, 22, 43]
const itemColour = ['red', 'orange', 'yellow']

const itemArray: Item[] = []

itemNames.forEach((itemName, itemIndex) => {
  itemArray.push(
    new Item({ name: itemName, price: itemPrices[itemIndex], colour: itemColour[itemIndex] })
  )
})

export default itemArray
