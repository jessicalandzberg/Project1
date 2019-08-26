import React from 'react';
import MARow from "./MARow"
import '../CSS/MostActive.css'

class MostActive extends React.Component {

  render () {
    console.log("this is MostActive props", this.props)
    const mostActiveRender = this.props.mostActive.map((d,i) => {
      return <MARow key= {i} mostActive= {d} number={i+1}/>
    })

    return(
      <div className="MostActive">
        <h3 className="header"> The 10 most active stocks of the day ... </h3>

        <div className= "MAChart">
          <div className="MARow">
            <h4 className="MAName"> Company Name </h4>
            <h4 className="MATicker"> Ticker Symbol </h4>
            <h4 className="MAPrice"> Stock Price </h4>
            <h4 className="MADollarChange"> $ change in price </h4>
            <h4 className="MAPercentChange"> % change in price </h4>
          </div>
          {mostActiveRender}
        </div>

      </div>
    )

  }
}

export default MostActive;
