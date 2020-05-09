// import React, { useState } from 'react';

// function Articles() {
//   const [data, setData] = useState({ hits: [] });
//   return (
//     <ul>
//       {data.hits.map(item => (
//         <li key={item.objectID}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default Articles

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Articles() {
//   const [data, setData] = useState({ hits: [] });
//   const [query, setQuery] = useState('redux');
//   const [search, setSearch] = useState('redux');
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         `http://hn.algolia.com/api/v1/search?query=${search}`,
//       );
//       setData(result.data);
//     };
//     fetchData();
//   }, [search]);

//   return (
//     <>
//       <input
//         type="text"
//         value={query}
//         onChange={event => setQuery(event.target.value)}
//       />
//       <button type="button" onClick={() => setSearch(query)}>
//         Search
//       </button>
//       <ul>
//         {
//           data.hits.map(item => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))
//         }
//       </ul>
//     </>
//   );
// }
// export default Articles;

import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function Articles() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
    </Fragment>
  );
}
export default Articles;
