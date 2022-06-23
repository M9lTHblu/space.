import {useEffect, useState} from 'react';

const useFetchData = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
        setData(await response.json())
        setError(null)
      } catch (e) {
        setError(e)
        setData(null)
      }

    })()
  }, [])

  return {
    loading: !data & !error,
    data,
    error
  }
}

export default useFetchData
