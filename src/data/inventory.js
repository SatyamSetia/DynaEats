import generateResponse from './utils'

const inventoryData = generateResponse({
  items: [
    {
      id: 'fl_wh',
      name: 'Wheat',
      quantity: 20,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian', 'indian' ]
    },{
      id: 'fl_ri',
      name: 'Rice',
      quantity: 20,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian', 'indian' ]
    },{
      id: 'fl_mu',
      name: 'Multigrain',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian' ]
    },{
      id: 'fa_bu',
      name: 'Butter',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'bakery', 'italian' ]
    },{
      id: 'fa_ol',
      name: 'Olive',
      quantity: 3,
      unit: 'Ltr',
      category: 'flour',
      cuisines: [ 'bakery', 'italian' ]
    },{
      id: 'fa_mu',
      name: 'Mustard',
      quantity: 8,
      unit: 'Ltr',
      category: 'flour',
      cuisines: [ 'indian' ]
    },{
      id: 'fa_ve',
      name: 'Vegetable',
      quantity: 0,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'indian' ]
    },{
      id: 've_mu',
      name: 'Mushroom',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian' ]
    },{
      id: 've_ba',
      name: 'Baby Corn',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian' ]
    },{
      id: 've_on',
      name: 'Onions',
      quantity: 15,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian', 'indian' ]
    },{
      id: 've_ca',
      name: 'Capsicum',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'italian' ]
    },{
      id: 'ad_sa',
      name: 'Salt',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'bakery', 'italian', 'indian' ]
    },{
      id: 'ad_ol',
      name: 'Olives',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'bakery' ]
    },{
      id: 'ad_su',
      name: 'Sugar',
      quantity: 15,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'bakery', 'indian' ]
    },{
      id: 'ad_va',
      name: 'Vanilla',
      quantity: 5,
      unit: 'KG',
      category: 'flour',
      cuisines: [ 'bakery' ]
    }
  ],
  count: 15
}, null)

export default {
  inventoryData
}
