import React, { useContext } from 'react'
import { ShopContext } from '../ShopProvider'

function Shop() {
  const { tax, subTotal, total } = useContext(ShopContext)
  return (
    <div>
      <p>tax: {tax}</p>
      <p>subTotal: {subTotal}</p>
      <p>total: {total}</p>
    </div>
  )
}

export default Shop
