import { useState } from 'react'
import { CurrencyInput } from './components'
import useCurrencyData from './hooks/useCurrencyData'

const App = () => {
  const [amount, setAmount] = useState()
  const [convertedAmount, setConvertedAmount] = useState()
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')

  const currencyData = useCurrencyData(fromCurrency)

  const allCurrencies = Object.keys(currencyData)

  const swap = () => {
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    console.log(`converting from ${fromCurrency} to ${toCurrency}`)
    const calculatedAmount = amount * currencyData[toCurrency]
    setConvertedAmount(parseFloat(calculatedAmount.toFixed(2)))
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1623106405790-0ed93dd15bab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <CurrencyInput
                  label='From'
                  amount={amount}
                  onAmountChange={(a) => setAmount(a)}
                  currency={fromCurrency}
                  onCurrencyChange={(c) => setFromCurrency(c)}
                  allCurrencies={allCurrencies}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <CurrencyInput
                  label='To'
                  amount={convertedAmount}
                  currency={toCurrency}
                  onCurrencyChange={(c) => setToCurrency(c)}
                  allCurrencies={allCurrencies}
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
