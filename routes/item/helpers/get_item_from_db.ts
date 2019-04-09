// import itemsArray from '../../../db/static'
import _ from 'lodash'
import { EmptyResultError } from '../../../helpers/errortypes'
import ItemModel from '../../../db/mongodb'

export const getItemFromDB = (itemID: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = ItemModel.find({ _id: itemID })

      if (_.size(result)) resolve(result)
      throw new EmptyResultError()
    } catch (error) {
      reject(error)
    }
  })
}
