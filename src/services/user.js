import userResponse from '../data/user'

const fetchUser = (user) => {
  switch(user.username) {
    case 'manager': return userResponse.restaurantManager
    case 'indian': return userResponse.chefIndian
    case 'italian': return userResponse.chefItalian
    case 'bakery': return userResponse.chefBakery
    default : return userResponse.error
  }
}

export default fetchUser
