import Newsfeed from "./components/Newsfeed";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="app">
      <CurrencyConverter />
      <Newsfeed />
    </div>
  );
}

export default App;
