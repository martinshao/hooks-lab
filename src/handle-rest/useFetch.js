import { useState, useRef, useEffect } from 'react';

export default function useFetch(url, init) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const prevInit = useRef();
  const prevUrl = useRef();

  useEffect(() => {
    if (prevUrl.current === url && prevInit.current === init) return;
    prevUrl.current = url;
    prevInit.current = init;

    fetch(process.env.REACT_APP_API_BASE_URL + url, init)
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [init, url]);

  return { data, loading, error };
}
