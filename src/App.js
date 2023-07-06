import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="bg-black h-14">
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
