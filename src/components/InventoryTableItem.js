import React, { Component } from 'react';

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
    const status = this.getStatus(item)

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

  getStatus = (item) => {
    if(!item.quantity){
      return 'Insufficient'
    } else {
      return item.quantity > (item.vendorOneSupply + item.vendorTwoSupply)? 'Insufficient': 'OK'
    }
  }

  render() {
    const  { item, styleVisiblity } = this.props
    const  { status, requiredQuantity, receivedQuantity, vendorOneSupply, vendorTwoSupply } = this.state

    const styleSufficient = status === 'Insufficient'? 'alert_text':''
    const styleSufficientRow = status === 'Insufficient'? 'alert_row':''

    return (
      <tr className={styleSufficientRow}>
        <td>{item.name}</td>
        <td>{requiredQuantity}</td>
        <td className={styleVisiblity}>{vendorOneSupply}</td>
        <td className={styleVisiblity}>{vendorTwoSupply}</td>
        <td>{receivedQuantity}</td>
        <td className={styleSufficient}>{status}</td>
        <td className={styleVisiblity}>{item.cuisines.includes('bakery')?<span className={styleSufficient}>Y</span>:'N'}</td>
        <td className={styleVisiblity}>{item.cuisines.includes('italian')?<span className={styleSufficient}>Y</span>:'N'}</td>
        <td className={styleVisiblity}>{item.cuisines.includes('indian')?<span className={styleSufficient}>Y</span>:'N'}</td>
      </tr>
    )
  }
}
