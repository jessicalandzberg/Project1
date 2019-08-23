import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  let navStyles = {
    height:'50px',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px',
    background: "#E8C6B3",
  }

  let ulStyles = {
    display:'flex',
    listStyle: 'none',
    padding: '0px',
    margin: '0px',
  }

  let aStyles = {
    paddingLeft: '10px',
    paddingRight: '10px'
  }

    return(
      <nav style={navStyles}>
       <ul style={ulStyles}>
         <li style={aStyles}><Link to='/'>Home</Link></li>
         <li style={aStyles}><Link to='/mostActive'>Most Active Stocks</Link></li>
         <li style={aStyles}><Link to='/allStocks'>All Stocks</Link></li>
       </ul>
     </nav>
    )
}

export default Nav;
