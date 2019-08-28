import React from 'react';
import {Link} from 'react-router-dom'
import '../CSS/Home.css'

function Home() {
    return(
      <div className="Home">
        <div className= "HRow">

          <div className= "halfPage1">
            <h4> <Link to='/mostActive'>Check out the most active stocks today</Link></h4>
          </div>

          <div className= "halfPage2">
            <h4><Link to='/AllStocks'>Search by company name</Link></h4>
          </div>

        </div>
      </div>
    )
}

export default Home;
