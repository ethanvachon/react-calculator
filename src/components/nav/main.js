import React from 'react';
import './style.css';

import { Link } from "react-router-dom";

class Nav extends React.Component {
  render (){
    return (
      <nav className="flex items-center justify-around bg-gray-300 w-screen h-10 text-xl">
          <Link to="/calculator">Calculator</Link>
          <Link to="/game">Tic-Tac-Toe</Link>
      </nav>
    )

  }
}

export default Nav