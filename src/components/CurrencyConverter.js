import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
    return (

      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div>
            <table>
                <body>
                    <tr>Primary Currency:</tr>
                    <td>
                        <input 
                            type="number"
                            name="currency-amount-1"
                            value={""} 
                        />                
                    </td>
                    <td>
                        <select value={""} name="currency-option-1" className="currency-options">
                            <option name="currency-option-1">Bitcoin</option>
                        </select>
                    </td>
                </body>
            </table>
        </div>
        
        <ExchangeRate />
      </div>
    );
  }
  
  export default CurrencyConverter;
  