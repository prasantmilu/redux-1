import logo from './logo.svg';
import './App.css';
import Receiver from './components/Receiver';
import Sender from './components/Sender';

function App() {
  return (
    <div className="App">
      <Sender/>
      <Receiver/>
    </div>
  );
}

export default App;
