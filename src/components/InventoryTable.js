import React from 'react'

import InventoryTableItem from  './InventoryTableItem'
import { formatCategoryName } from '../utils/formatter'

function renderItem(item, styleVisiblity) {
  return <InventoryTableItem item={item} styleVisiblity={styleVisiblity} key={item.id}/>
}

function renderCategoryName(category) {
  return (
    <tr key={category} className="category_name_row">
      <th colSpan="9" className="category_name">{formatCategoryName(category)}</th>
    </tr>
  )
}

function renderCategoryItems(categories, category, styleVisiblity) {
  let rows = []

  categories[category].forEach((item, i) => {
    if(i===0) rows.push(renderCategoryName(category))
    rows.push(renderItem(item, styleVisiblity))
  })

  return rows
}

const InventoryTable = ({ categories, isManager }) => {
  let styleVisiblity = isManager?'visible':'hidden'

  return (
    <div className="inventory">
      <table>
        <tbody className="inventory_tbody">
          <tr>
            <th></th>
            <th>Required Quantity</th>
            <th className={styleVisiblity}>Vendor 1</th>
            <th className={styleVisiblity}>Vendor 2</th>
            <th>Received Quantity</th>
            <th>Status</th>
            <th className={styleVisiblity}>Bakery</th>
            <th className={styleVisiblity}>Italian</th>
            <th className={styleVisiblity}>Indian</th>
          </tr>
          {
            Object.keys(categories).map((category, i) => {
              return renderCategoryItems(categories, category, styleVisiblity)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default InventoryTable
