import * as response from '../../helpers/response'

// eslint-disable-next-line
import Express from 'express'
import { getItemFromDB } from './helpers/get_item_from_db'
import { getAllItemsFromDB } from './helpers/get_all_items_from_db'
import { postVerGetSingleItemFromDB } from './helpers/post_ver_get_item_from_db'
import signale = require('signale');

export const getSingleItem = async (req: Express.Request, res: Express.Response) => {
  try {
    console.log(req.params)
    const itemID = String(req.params['id'])

    const result = await getItemFromDB(itemID)
    if (result) response.success(req, res, result)
  } catch (error) {
    signale.error(error)
    response.failure(req, res, error.code, error)
  }
}

export const postVerGetSingleItem = async (req: Express.Request, res: Express.Response) => {
  try {
    const itemName = String(req.body['name'])
    const itemPrice = Number(String(req.body['price']))

    const result = await postVerGetSingleItemFromDB({ name: itemName, price: itemPrice })
    if (result) response.success(req, res, result)
  } catch (error) {
    signale.error(error)
    response.failure(req, res, error.code, error)
  }
}

export const getAllItems = async (req: Express.Request, res: Express.Response) => {
  try {
    const result = await getAllItemsFromDB()
    console.log(result)
    if (result) response.success(req, res, result)
  } catch (error) {
    signale.error(error)
    response.failure(req, res, error.code, error)
  }
}

export const insertSingleItem = (req: Express.Request, res: Express.Response) => {}
