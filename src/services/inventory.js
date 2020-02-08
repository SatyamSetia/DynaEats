import inventoryResponse from '../data/inventory'
import suppliesResponse from '../data/supplies'

export const fetchSupplies = (vendorId) => {
  switch(vendorId) {
    case 'ven1': return suppliesResponse.vendorOneSupply
    case 'ven2': return suppliesResponse.vendorTwoSupply
    default: return suppliesResponse.error
  }
}

export const fetchInventory = () => {
  return inventoryResponse.inventoryData
}
