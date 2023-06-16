import {useState} from 'react'
import ExchangeRate from "./ExchangeRate"
import axios from 'axios'

function CurrencyConverter() {
    const currencies = ['BTC', 'ETH', 'USD', 'APE', 'BRL', 'ADA']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)

    const [exchangeData, setExchangeData] = useState({
        primaryCurrency: 'BTC',
        secondaryCurrency: 'BTC',
        exchangeRate: 0 
    })
    const [result, setResult] = useState(0)

    console.log(exchangeData)
    
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
                //process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        }
          
        axios.request(options).then((response) => {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])

            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        
            setExchangeData({
                primaryCurrancy: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                exchangeRate: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
            })
        
        }).catch((error)=> {
            console.error(error)
        })
    }

   
    return (

      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div>
            <table>
                <tbody>
                    <tr><span class="table__title">Primary Currency:</span>
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
                    <tr><span class="table__title">Secondary Currency:</span>
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
            <div className='box-button'>
                <button id='convert-button' onClick={convert}>Convert</button>
            </div>
        </div>
        <hr></hr>
        <ExchangeRate 
            exchangeData={exchangeData}
           
        />
        
      </div>

    );
  }
  
  export default CurrencyConverter;
  