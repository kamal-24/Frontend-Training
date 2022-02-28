import './App.css';
import { BankProvider } from './bank-context';
import Banking from './Banking';

function App() {
  return (
    <BankProvider>
    <div className="App">
      <Banking/>
    </div>
    </BankProvider>
  );
}

export default App;
