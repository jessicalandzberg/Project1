import React from 'react';
import AllStockSingleStockInfo from "./AllStockSingleStockInfo"

class AllStocks extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log("this is AllStocks props", this.props)
    return(
      <div className="AllStocks">
        <h4> This is the All Stocks Component </h4>
        <AllStockSingleStockInfo />
      </div>
    )
  }
}

export default AllStocks;
