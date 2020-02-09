import generateResponse from './utils'

const vendorOneSupply = generateResponse({
  id: 'ven1',
  name: 'Vendor 1',
  supplies: [
    {
      id: 'fl_wh',
      name: 'Wheat',
      quantity: 10,
      unit: 'KG',
      category: 'flour'
    },{
      id: 'fa_bu',
      name: 'Butter',
      quantity: 2,
      unit: 'KG',
      category: 'fats'
    },{
      id: 'fa_ol',
      name: 'Olive',
      quantity: 3,
      unit: 'Ltr',
      category: 'fats'
    },{
      id: 've_mu',
      name: 'Mushroom',
      quantity: 2,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 've_ba',
      name: 'Baby Corn',
      quantity: 3,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 've_on',
      name: 'Onions',
      quantity: 12,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 've_ca',
      name: 'Capsicum',
      quantity: 2,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 'ad_sa',
      name: 'Salt',
      quantity: 2,
      unit: 'KG',
      category: 'add_ons'
    },{
      id: 'ad_ol',
      name: 'Olives',
      quantity: 3,
      unit: 'KG',
      category: 'add_ons'
    },{
      id: 'ad_su',
      name: 'Sugar',
      quantity: 12,
      unit: 'KG',
      category: 'add_ons'
    },{
      id: 'ad_va',
      name: 'Vanilla',
      quantity: 2,
      unit: 'KG',
      category: 'add_ons'
    }
  ],
  count: 11
}, null)

const vendorTwoSupply = generateResponse({
  id: 'ven2',
  name: 'Vendor 2',
  supplies: [
    {
      id: 'fl_wh',
      name: 'Wheat',
      quantity: 10,
      unit: 'KG',
      category: 'flour'
    },{
      id: 'fl_ri',
      name: 'Rice',
      quantity: 20,
      unit: 'KG',
      category: 'flour'
    },{
      id: 'fl_mu',
      name: 'Multigrain',
      quantity: 1,
      unit: 'KG',
      category: 'flour'
    },{
      id: 'fa_bu',
      name: 'Butter',
      quantity: 1,
      unit: 'KG',
      category: 'fats'
    },{
      id: 'fa_mu',
      name: 'Mustard',
      quantity: 6,
      unit: 'Ltr',
      category: 'fats'
    },{
      id: 've_mu',
      name: 'Mushroom',
      quantity: 3,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 've_ba',
      name: 'Baby Corn',
      quantity: 2,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 've_ca',
      name: 'Capsicum',
      quantity: 1,
      unit: 'KG',
      category: 'vegetables'
    },{
      id: 'ad_sa',
      name: 'Salt',
      quantity: 3,
      unit: 'KG',
      category: 'add_ons'
    },{
      id: 'ad_ol',
      name: 'Olives',
      quantity: 2,
      unit: 'KG',
      category: 'add_ons'
    },{
      id: 'ad_va',
      name: 'Vanilla',
      quantity: 1,
      unit: 'KG',
      category: 'add_ons'
    }
  ],
  count: 11
}, null)

const error = generateResponse(null, 'No such vendor exists!!')

export default {
  vendorOneSupply,
  vendorTwoSupply,
  error
}
