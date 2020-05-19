import React from 'react'
import List from './List'
import CountProvider from '../CountProvider'

function List() {
    return (
        <CountProvider>
            <List />
        </CountProvider>
    )
}

export default List
