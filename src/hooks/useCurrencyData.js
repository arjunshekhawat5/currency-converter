import { useEffect, useState } from "react"
import axios from 'axios'

const useCurrencyData = (currency) => {
  const [currencyData, setCurrencyData] = useState([])


  useEffect(() => {
    
    const getCurrencyData = async () => {
      const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

      try {
        const response = await axios.get(url)
        setCurrencyData(response.data[currency])
      }
      catch (exception) {
        console.log('Error while fetching currency', exception)
      }
    }
    
    getCurrencyData()
  }, [currency])

  return (currencyData)
}

export default useCurrencyData