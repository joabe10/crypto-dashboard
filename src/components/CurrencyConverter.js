import {useState} from 'react'
import ExchangeRate from "./ExchangeRate"
import axios from 'axios'

function CurrencyConverter() {
    const currencies = ['BTC', 'ETH', 'USD', 'APE', 'BRL', 'ADA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult] = useState(0)
    
    const convert = () => { 

        const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            from_currency: chosenPrimaryCurrency,
            function: 'CURRENCY_EXCHANGE_RATE',
            to_currency: chosenSecondaryCurrency
        },
        headers: {
            'X-RapidAPI-Key': 'c7ff28fcb7msh976522891f3c1e0p14b690jsn3dcbe1dec320',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
        };
          
        axios.request(options).then((response) => {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        }).catch((error)=> {
            console.error(error)
        })
    }

   
    console.log(exchangeRate)
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
                                value={amount} 
                                onChange={(e)=> setAmount(e.target.value)}
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
                                value={result} 
                                disabled={true} //não poderei inserir dados, apenas visualizar o {result}
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

            <button id='convert-button' onClick={convert}>Convert</button>

        </div>
        
        <ExchangeRate 
            exchangeRate={exchangeRate}
            chosenPrimaryCurrency={chosenPrimaryCurrency}
            chosenSecondaryCurrency={chosenSecondaryCurrency}
        />
      </div>
    );
  }
  
  export default CurrencyConverter;
  