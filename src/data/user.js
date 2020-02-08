import generateResponse from './utils'

const restaurantManager = generateResponse({
  username: 'Restaurant Manager',
  type: 'manager',
  cuisines: [
    'bakery',
    'italian',
    'indian'
  ]
}, null)

const chefIndian = generateResponse({
  username: 'Indian Chef',
  type: 'chef',
  cuisines: [
    'indian'
  ]
}, null)

const chefItalian = generateResponse({
  username: 'Italian Chef',
  type: 'chef',
  cuisines: [
    'italian'
  ]
}, null)

const chefBakery = generateResponse({
  username: 'Bakery Chef',
  type: 'chef',
  cuisines: [
    'bakery'
  ]
}, null)

const error = generateResponse(null, 'No such user exists!!')

export default {
  restaurantManager,
  chefIndian,
  chefItalian,
  chefBakery,
  error
}
