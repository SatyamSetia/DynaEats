import generateResponse from './utils'

const restaurantManager = generateResponse({
  username: 'Restaurant Manager',
  type: 'manager'
}, null)

const chefIndian = generateResponse({
  username: 'Indian Chef',
  type: 'chef'
}, null)

const chefItalian = generateResponse({
  username: 'Italian Chef',
  type: 'chef'
}, null)

const chefBakery = generateResponse({
  username: 'Bakery Chef',
  type: 'chef'
}, null)

const error = generateResponse(null, 'No such user exists!!')

export default {
  restaurantManager,
  chefIndian,
  chefItalian,
  chefBakery,
  error
}
