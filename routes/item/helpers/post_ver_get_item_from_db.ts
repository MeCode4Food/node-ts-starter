// import itemsArray from '../../../db/static'
import _ from 'lodash'
import { EmptyResultError } from '../../../helpers/errortypes'
import ItemModel from '../../../db/mongodb'

export const postVerGetSingleItemFromDB = (itemObject: { id?: string, name?: string, price?: number}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ItemModel.find({ _id: itemObject.id, name: itemObject.name, price: itemObject.price })

      if (_.size(result)) resolve(result)
      throw new EmptyResultError()
    } catch (error) {
      reject(error)
    }
  })
}
