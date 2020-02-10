import React from 'react'
import InventoryTableItem from '../components/InventoryTableItem'
import EditableText from '../components/EditableText'
import { mount, shallow } from 'enzyme';

describe('>>>I N V E N T O R Y  T A B L E  I T E M --- Snapshot',()=>{

  const item = {
    id: 'ad_su',
    name: 'Sugar',
    quantity: 15,
    unit: 'KG',
    category: 'add_ons',
    cuisines: [ 'bakery', 'indian' ],
    vendorOneSupply: 10,
    vendorTwoSupply: 5
  }

  it('renders without crashing', () => {
    const styleVisiblity = 'visible'
    const wrapper = mount(<InventoryTableItem item={item} styleVisiblity={styleVisiblity}/>);

    const cols = wrapper.find('#item_row').find('td').map(column => column.text())

    expect(cols.length).toEqual(9)
  });

  it('verify status OK when recieved quantity is less than required quantity', () => {
    const styleVisiblity = 'visible'
    const wrapper = mount(<InventoryTableItem item={item} styleVisiblity={styleVisiblity}/>);

    const cols = wrapper.find('#item_row').find('td').map(column => column.text())

    expect(cols[5]).toEqual('OK')
  })

  it('verify status Insufficient when recieved quantity is less than required quantity', () => {
    const styleVisiblity = 'visible'

    const item = {
      id: 'ad_su',
      name: 'Sugar',
      quantity: 15,
      unit: 'KG',
      category: 'add_ons',
      cuisines: [ 'bakery', 'indian' ],
      vendorOneSupply: 10,
      vendorTwoSupply: 2
    }

    const wrapper = mount(<InventoryTableItem item={item} styleVisiblity={styleVisiblity}/>);

    const cols = wrapper.find('#item_row').find('td').map(column => column.text())

    expect(cols[5]).toEqual('Insufficient')
  })

});
