import './App.css';
import Calculator from './components/calculator/main'
import Game from "./components/tic-tac-toe/main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>

      <nav>
        <Link to="/calculator">Calculator</Link>
        <Link to="/game">Tic-Tac-Toe</Link>
      </nav>
      <Switch>
        <Route path="/calculator">
        <div className="App bg-gray-900">
          <Calculator />
        </div>
        </Route>
      </Switch>
      <Switch>
        <Game />
      </Switch>
      <Switch>
        
      </Switch>
     </Router>
  );
}

export default App;
