import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Inventory from './pages/Inventory';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Inventory" component={Inventory} />
      </Switch>
    </Router>
  );
}

export default App;