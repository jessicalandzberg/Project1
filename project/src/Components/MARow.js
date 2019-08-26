import React from 'react';

class MARow extends React.Component {
  render () {
    return(
        <div className="MARow">
          <p className="MAName"> {this.props.mostActive.companyName} </p>
          <p className="MATicker"> {this.props.mostActive.ticker} </p>
          <p className="MAPrice"> ${this.props.mostActive.price} </p>
          <p className="MADollarChange"> ${this.props.mostActive.changes} </p>
          <p className="MAPercentChange"> {this.props.mostActive.changesPercentage} </p>
        </div>
    )
  }
}

export default MARow;
