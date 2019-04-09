// import itemsArray from '../../../db/static'

import _ from 'lodash'
import { EmptyResultError } from '../../../helpers/errortypes'
import ItemModel from '../../../db/mongodb'

// eslint-disable-next-line

export const getAllItemsFromDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await ItemModel.find()
      if (_.size(result)) resolve(result)
      throw new EmptyResultError()
    } catch (error) {
      reject(error)
    }
  })
}
