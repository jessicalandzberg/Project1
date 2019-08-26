import React from 'react';
import axios from 'axios'
import {Route , Switch} from "react-router-dom"
import Home from "./Home"
import MostActive from "./MostActive"
import AllStocks from "./AllStocks"
import MyList from "./MyList"
import '../CSS/general.css'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      mostActive: [],
      allStocks: []
    }
  }
  makeApiCallActive = async () => {
    let source = "https://financialmodelingprep.com/api/v3/stock/actives"
    const response = await axios.get(source)
    console.log("this is active stock info from active api", response.data.mostActiveStock)
    this.setState({
        mostActive: response.data.mostActiveStock
      }
    )
  }
  makeApiCallAll = async () => {
    let sourceAll = "https://financialmodelingprep.com/api/v3/company/stock/list"
    const responseAll = await axios.get(sourceAll)
    console.log("this is all stock info from all api", responseAll.data.symbolsList)
    this.setState({
        allStocks: responseAll.data.symbolsList
      }
    )
  }
  componentDidMount() {
    this.makeApiCallActive()
    this.makeApiCallAll()
  }
  render () {
    console.log("Main: this is state", this.state)
    return(
      <div className="Main">
        <Switch>
          <Route path= "/mostActive"
          render = {() => <MostActive mostActive= {this.state.mostActive}/> } />
          <Route path= "/allStocks"
          render = {() => <AllStocks allStocks= {this.state.allStocks}/> } />
          <Route path= "/myList"
          render = {() => <MyList/>} />
          <Route path= "/" component= {Home} />
        </Switch>
      </div>
    )
  }
}

export default Main;
