import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
  render () {
    return(
      <div className="Home">
        <h4> This is the Home Component </h4>
        <h4><Link to='/mostActive'>Check out the most active stocks today</Link></h4>
        <h4><Link to='/AllStocks'>Search by company name</Link></h4>
      </div>
    )
  }
}

export default Home;
