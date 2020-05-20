import React, { createContext, useReducer } from 'react'
import { createSelector } from 'reselect'
import { reducer, updateStep, updateQuery } from './reducer'

export const ShopContext = createContext(null)

const initialState = {
  shop: {
    step: 100,
    taxPercent: 8,
    items: [
      { name: 'apple', price: 1, amount: 2 },
      { name: 'orange', price: 2, amount: 1 },
    ],
    shelves: [
      { name: 'pear', price: 5, amount: 100 },
      { name: 'apple', price: 1, amount: 98 },
      { name: 'peach', price: 3, amount: 100 },
      { name: 'orange', price: 2, amount: 99 },
    ]
  }
}

const shopItemsSelector = state => state.shop.items
const taxPercentSelector = state => state.shop.taxPercent
const stepSelector = state => state.shop.step

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, { price, amount }) => acc + price * amount, 0)
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => subtotal + tax
)

function ShopProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)


  const addAmount = (value) => {
    dispatch(updateQuery(value))
  }

  const onChangeStep = (value) => {
    dispatch(updateStep(value))
  }

  const value = {
    addAmount,
    onChangeStep,
    tax: taxSelector(state),
    total: totalSelector(state),
    item: shopItemsSelector(state),
    subTotal: subtotalSelector(state),
    step: stepSelector(state),
  }

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopProvider