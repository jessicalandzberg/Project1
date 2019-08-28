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
        const symbol = (d.isFave) ?
          <div
            onClick = {()=> this.props.removeFromList(d.id)}>
            - </div>
            :
          <div
              onClick = {()=> this.props.addToList(d)}>
              + </div>
        return <div
                className = "ASSearchRow"
                key = {i}>
                    <div
                      onClick = {()=> this.handleClick(d)}
                      > {d.name} </div>
                    {symbol}
                </div>
      })

      console.log("this is allstocks: props", this.props)

    return(
      <div className="AllStocks">

        <h3 className="header"> Search by company name ... </h3>

        <div className="ASRow">

          <div className="allStockList">
            <h4> List of stocks </h4>
            <input
              type="text"
              placeholder="search all stocks..."
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
