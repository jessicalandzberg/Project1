import React from 'react';
import '../CSS/MyList.css'
import AllStockSingleStockInfo from "./AllStockSingleStockInfo"


class MyList extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      activeStock: []
    }
  }
  handleClick= (d) => {
    const activeStock = d
    this.setState(prevState => ({
      activeStock: activeStock
    }))
  }

  render () {
    const favesRender = this.props.myList.map((d,i) => {
      return <div
              className = "FavRowList"
              key = {i}>
              <div
                onClick = {()=> this.handleClick(d)}
                > {d.name} </div>
              </div>
    })
    return (
      <div className="MyList">
          <h3 className="header"> My List </h3>

          <div className="FavRow">

            <div className="FavList">
              <h4> My saved stocks </h4>
               {favesRender}
            </div>

            <div className="singleStock">
              <AllStockSingleStockInfo
              activeStock= {this.state.activeStock} />
            </div>
        </div>
      </div>
    )
  }
}

export default MyList;
