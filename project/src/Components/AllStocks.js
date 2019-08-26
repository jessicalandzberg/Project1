import React from 'react';
import AllStockSingleStockInfo from "./AllStockSingleStockInfo"
import '../CSS/AllStocks.css'



class AllStocks extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      value: "",
      activeStock: []
    }
  }

  handleChange =(e) => {
    e.preventDefault()
    const searchedStock= e.target.value
    this.setState(prevState => ({
      value: searchedStock
    }))
  }

  handleClick= (d) => {
    const activeStock = d
    this.setState(prevState => ({
      activeStock: activeStock
    }))
  }

  render () {
    let matched = this.props.allStocks.filter((d,i) => {
      return d.name.toLocaleLowerCase().includes(this.state.value.toLocaleLowerCase())
    })

    const matchedRender = matched.map((d,i) => {
      return <div
                key = {i}
                onClick = {()=> this.handleClick(d)}
                > {d.name} </div>
    })

    return(
      <div className="AllStocks">

        <h3 className="header"> Search by company name ... </h3>

        <div className="ASRow">

          <div className="allStockList">
            <input
              type="text"
              placeholder="start typing stock name..."
              onChange={this.handleChange}
              value={this.state.value} />

            <div> {matchedRender} </div>
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

export default AllStocks;
