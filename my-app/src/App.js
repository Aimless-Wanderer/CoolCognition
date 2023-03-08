import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      <Route>
        <Route path="/" component={Home} />
        <Route path='/Inventory' component = {<Inventory/>} />
      </Route>
    </Router>
  );
}

export default App;