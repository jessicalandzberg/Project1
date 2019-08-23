import React from 'react';
import MARow from "./MARow"

class MostActive extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log("this is MostActive props", this.props)
    return(
      <div className="MostActive">
        <h4> This is the MostActive Component </h4>
        <MARow />
      </div>
    )
  }
}

export default MostActive;
