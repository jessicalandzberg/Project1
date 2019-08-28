import React from 'react';
import {Link} from 'react-router-dom'
import '../CSS/general.css'
import '../CSS/Nav.css'

function Nav() {


    return(
      <nav className="NavComponent">
        <h3 className = "logoStyles"> <a href="/"> Stock Market </a> </h3>
        <ul className="ulStyles">
          <li className="aStyles"><Link to='/'>Home</Link></li>
          <li className="aStyles"><Link to='/mostActive'>Most Active Stocks</Link></li>
          <li className="aStyles"><Link to='/allStocks'>All Stocks</Link></li>
          <li className="aStyles"><Link to='/myList'>My List</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;
