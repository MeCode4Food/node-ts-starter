import * as response from '../../helpers/response'

// eslint-disable-next-line
import Express from 'express'
import { getItemFromDB } from './helpers/get_item_from_db'
import { getAllItemsFromDB } from './helpers/get_all_items_from_db'
import signale = require('signale');

const getSingleItem = async (req: Express.Request, res: Express.Response) => {
  try {
    console.log(req.params)
    const itemID = String(req.params['id'])

    const result = await getItemFromDB(itemID)
    if (result) response.success(res, result)
  } catch (error) {
    signale.error(error)
    response.failure(res, error.code, error)
  }
}

const getAllItems = async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await getAllItemsFromDB()
    console.log(result)
    if (result) response.success(res, result)
  } catch (error) {
    signale.error(error)
    response.failure(res, error.code, error)
  }
}

const insertSingleItem = (req: Express.Request, res: Express.Response) => {}

export { getSingleItem, getAllItems, insertSingleItem }
