import React, { Component } from 'react';

import EditableText from './EditableText'

export default class InventoryTableItem extends Component {

  state = {
    status: '',
    requiredQuantity:null,
    receivedQuantity: null,
    vendorOneSupply: null,
    vendorTwoSupply: null
  }

  componentDidMount() {
    const { item } = this.props

    const requiredQuantity = this.getValue(item.quantity, item.unit)
    const vendorOneSupply = this.getValue(item.vendorOneSupply, item.unit)
    const vendorTwoSupply = this.getValue(item.vendorTwoSupply, item.unit)

    const receivedQuantity = this.getValue(item.vendorOneSupply+item.vendorTwoSupply, item.unit)
    const status = this.getStatus(item.quantity, item.vendorOneSupply, item.vendorTwoSupply)

    this.setState({
      status,
      requiredQuantity,
      receivedQuantity,
      vendorOneSupply,
      vendorTwoSupply
    })
  }

  getValue = (quantity, unit) => {
    return !quantity ? '-': `${quantity} ${unit}`
  }

  getStatus = (quantity, vendorOneSupply, vendorTwoSupply) => {
    if(!quantity){
      return 'Insufficient'
    } else {
      return quantity > (vendorOneSupply + vendorTwoSupply)? 'Insufficient': 'OK'
    }
  }

  updateQuantity = (value, isVendorOne) => {
    const { item } = this.props

    const receivedQuantity = isVendorOne? this.getValue(value+item.vendorTwoSupply, item.unit): this.getValue(item.vendorOneSupply+value, item.unit)
    const status = isVendorOne? this.getStatus(item.quantity, value, item.vendorTwoSupply): this.getStatus(item.quantity, item.vendorOneSupply, value)
    const newValue = this.getValue(value, item.unit)

    if(isVendorOne)
      this.setState({
        receivedQuantity,
        status,
        vendorOneSupply: newValue
      })
    else
      this.setState({
        receivedQuantity,
        status,
        vendorTwoSupply: newValue
      })
  }

  render() {
    const  { item, styleVisiblity } = this.props
    const  { status, requiredQuantity, receivedQuantity, vendorOneSupply, vendorTwoSupply } = this.state

    const styleSufficient = status === 'Insufficient'? 'alert_text':''
    const styleSufficientRow = status === 'Insufficient'? 'alert_row':''

    return (
      <tr className={styleSufficientRow} id="item_row">
        <td>{item.name}</td>
        <td>{requiredQuantity}</td>
        <td className={styleVisiblity}>
          <EditableText text={vendorOneSupply} item={item.name} vendor={"Vendor 1"} updateQuantity={(value) => this.updateQuantity(value, true)}/>
        </td>
        <td className={styleVisiblity}>
          <EditableText text={vendorTwoSupply} item={item.name} vendor={"Vendor 2"} updateQuantity={(value) => this.updateQuantity(value, false)}/>
        </td>
        <td id="status">{receivedQuantity}</td>
        <td className={styleSufficient}>{status}</td>
        <td className={styleVisiblity}>{item.cuisines.includes('bakery')?<span className={styleSufficient}>Y</span>:'N'}</td>
        <td className={styleVisiblity}>{item.cuisines.includes('italian')?<span className={styleSufficient}>Y</span>:'N'}</td>
        <td className={styleVisiblity}>{item.cuisines.includes('indian')?<span className={styleSufficient}>Y</span>:'N'}</td>
      </tr>
    )
  }
}
