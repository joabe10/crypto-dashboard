import {useState} from 'react'
import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')

    return (

      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div>
            <table>
                <tbody>
                    <tr>Primary Currency:
                        <td>
                            <input 
                                type="number"
                                name="currency-amount-1"
                                value={""} 
                            />                
                        </td>
                        <td>
                            <select 
                                value={chosenPrimaryCurrency} 
                                name="currency-option-1" 
                                className="currency-options"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    <tr>Secondary Currency:
                        <td>
                            <input 
                                type="number"
                                name="currency-amount-2"
                                value={""} 
                            />                
                        </td>
                        <td>
                            <select 
                                value={chosenSecondaryCurrency} 
                                name="currency-option-2" className="currency-options"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency) => (<option>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <ExchangeRate />
      </div>
    );
  }
  
  export default CurrencyConverter;
  