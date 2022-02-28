import './App.css';
import Card from './components/Card';
import Tweets from './components/Twitter/Tweets'

function App() {
  return (
    <div className="App">
      <Tweets/>
    </div>
  );
}

export default App;
/*
<Card title="Today's Money" num1="$53,000" num2="+55%" logo="$"></Card>
<Card title="Today's Users" num1="2,300" num2="+3%" logo="$"></Card>
<Card title="New Clients" num1="+3,462" num2="-2%" logo="$"></Card>
<Card title="Sales" num1="$103,000" num2="+5%" logo="$"></Card>
*/