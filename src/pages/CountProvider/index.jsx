import React, { useState, createContext } from 'react'

const defaultCount = [
    {
        id: 0001,
        time: '2020-05-16',
        todo: 'take dinner',
        finish: 'flase'
    }
]

const CountContext = createContext(defaultCount);

function CountProvider({ children }) {
    const [count, setCount] = useState();
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountProvider
