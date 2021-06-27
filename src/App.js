import './App.css';
import Calculator from './components/calculator/main'
import Game from "./components/tic-tac-toe/main"
import Nav from "./components/nav/main"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Nav />
      {/* <nav>
        <Link to="/">Calculator</Link>
        <Link to="/game">Tic-Tac-Toe</Link>
      </nav> */}
      <Switch>
        <Redirect exact from="/" to="/calculator" />
        <Route path="/" >
        </Route>
      </Switch>
      <Switch>
        <Route path="/calculator" component={Calculator}>
          {/* <Calculator /> */}
        </Route>
      </Switch>
      <Switch>
        <Route path="/game" component={Game}>
          {/* <Game /> */}
        </Route>
      </Switch>
     </Router>
  );
}

export default App;
