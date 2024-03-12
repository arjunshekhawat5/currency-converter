import { useId } from 'react'
import PropTypes from 'prop-types'

const CurrencyInput = ({
  label,
  amount,
  onAmountChange,
  currency = 'usd',
  onCurrencyChange,
  allCurrencies = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = ''
}) => {

  const amountId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >

          {allCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  )
}

CurrencyInput.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func.isRequired,
  currency: PropTypes.string,
  onCurrencyChange: PropTypes.func.isRequired,
  allCurrencies: PropTypes.array,
  amountDisabled: PropTypes.bool,
  currencyDisabled: PropTypes.bool,
  className: PropTypes.string
}

export default CurrencyInput