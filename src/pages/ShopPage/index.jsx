import React from 'react'
import Shop from './Shop'
import ShopProvider from './ShopProvider'

function ShopPage() {
  return (
    <ShopProvider>
      <Shop />
    </ShopProvider>
  )
}

export default ShopPage
