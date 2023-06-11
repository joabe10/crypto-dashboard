import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

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
                            <select value={""} name="currency-option-1" className="currency-options">
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
                            <select value={""} name="currency-option-2" className="currency-options">
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
  