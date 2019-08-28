import React from 'react';

class AllStockSingleStockInfo extends React.Component {
  render () {
    return(
      <div className="AllStockSingleStockInfo">
          <h4> Selected Stock: </h4>
          <p className="ASName"> Stock Name: {this.props.activeStock.name} </p>
          <p className="ASTicker"> Stock Symbol: {this.props.activeStock.symbol}  </p>
          <p className="ASPrice"> Price: {this.props.activeStock.price} </p>
      </div>
    )
  }
}

export default AllStockSingleStockInfo;
