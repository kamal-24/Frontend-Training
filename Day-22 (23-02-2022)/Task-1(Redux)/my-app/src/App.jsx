import './App.css';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';
import TotalCalories from './components/TotalCalories';
import { useSelector } from 'react-redux'


function App() {

  return (
    
    <div className="container">
     <TotalCalories />
     <AddEntry/>
     <Entries/>
    </div>
  );
}

export default App;
