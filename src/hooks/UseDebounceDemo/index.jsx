import React, { useState, useEffect } from 'react'
import useDebounce from '../useDebounce'

function UseDebounceDemo() {

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const debounceSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debounceSearchTerm) {
      setIsSearching(true)
      searchCharacters(debounceSearchTerm).then(results => {
        setIsSearching(false)
        const filteredResults = results.data.results.filter(
          result => result.thumbnail.path.indexOf('image_not_availabel') === -1
        )
        setResults(filteredResults)
      })
    } else {
      setResults([])
    }
  }, [debounceSearchTerm])

  return (
    <div style={{ padding: '15px' }}>
      <div>
        <input type="text"
          style={{
            width: '100%',
            fontSize: '2rem',
            padding: '0.4rem',
            marginBottom: '10px'
          }}
          placeholder="Search Marvel Comics"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {isSearching && <div>Searching...</div>}
      {results.map(result => (
        <div
          key={result.id}
          style={{
            display: 'inline-block',
            width: '200px',
            margin: '10px'
          }}
        >
          <h4>{result.title}</h4>
          <img
            src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`}
            alt={result.title}
            style={{ width: '100%' }}
          />
        </div>
      ))}
    </div>
  )
}

function searchCharacters(search) {
  const apiKey = '97792f280e2a9e67f9226f839cf6048c';
  const ts = '1608287394369'
  const hash= 'a71982a46da3dce505611f8eb2bb6fe3'
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&ts=${ts}&hash=${hash}&titleStartsWith=${search}`,
    {
      method: 'GET'
    }
  ).then(r => r.json());
}

export default UseDebounceDemo
