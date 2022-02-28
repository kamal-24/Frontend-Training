import './App.css';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';
import Summary from './components/Summary';
import TotalBal from './components/TotalBal';
import { ExpenseProvider } from './expense-context';

function App() {
  return (
    <ExpenseProvider>
    <div className="container ">
      <TotalBal/>
      <Summary/>
      <AddEntry/>
      <Entries/>
    </div>
    </ExpenseProvider>
  );
}

export default App;
