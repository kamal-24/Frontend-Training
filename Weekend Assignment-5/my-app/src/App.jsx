import { createStore } from 'redux';
import './App.css';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';
import TotalCalories from './components/TotalCalories';

function App() {
  return (
    <div className="container" style={{width:'80%',backgroundColor:'#095256',padding:'30px', margin:'30px auto',borderRadius:'7px',color:'white'}}>
     <TotalCalories/>
     <AddEntry/>
     <Entries/>
    </div>
  );
}

export default App;
