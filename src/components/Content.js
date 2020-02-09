import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchInventory, fetchSupplies } from '../services/inventory'
import InventoryTable from './InventoryTable'

class Content extends Component {

  state = {
    categories: {}
  }

  componentDidMount() {
    let items = fetchInventory().data.items
    let vendorOneSupply = fetchSupplies('ven1').data.supplies
    let vendorTwoSupply = fetchSupplies('ven2').data.supplies

    let categories = this.segregateCategories(items, vendorOneSupply, vendorTwoSupply)

    this.setState({
      categories
    })
  }

  segregateCategories = (items, supply1, supply2) => {
    let { user } = this.props
    let categories = {}

    items.filter(item =>
      item.cuisines.some(cuisine =>
        user.cuisines.includes(cuisine)
      )).forEach((item, i) => {
        let supplyOneItem = this.findItemInSupply(supply1, item)
        item.vendorOneSupply = supplyOneItem!==undefined? supplyOneItem.quantity: null

        let supplyTwoItem = this.findItemInSupply(supply2, item)
        item.vendorTwoSupply = supplyTwoItem!==undefined? supplyTwoItem.quantity: null

        if(categories[item.category] === undefined) {
          categories[item.category] = []
        }
        categories[item.category].push(item)
    })

    return categories
  }

  findItemInSupply = (supply, item) => {
    return supply.find(suppliedItem => {
      return suppliedItem.id === item.id
    })
  }

  render() {
    let { categories } = this.state
    let { user } = this.props

    return (
      <div className="content">
        <InventoryTable categories={categories} isManager={user.type === 'manager'}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(Content)
