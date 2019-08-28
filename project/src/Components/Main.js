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
      allStocks: [],
      list: []
    }
  }

  //API CALL FOR ACTIVE STOCKS
  makeApiCallActive = async () => {
    let source = "https://financialmodelingprep.com/api/v3/stock/actives"
    const response = await axios.get(source)
    console.log("this is active stock info from active api", response.data.mostActiveStock)
    this.setState({
        mostActive: response.data.mostActiveStock
    })
  }

  //API CALL FOR ALL STOCKS
  makeApiCallAll = async () => {
    let sourceAll = "https://financialmodelingprep.com/api/v3/company/stock/list"
    const responseAll = await axios.get(sourceAll)
    let responseAddedProperties = responseAll.data.symbolsList.map((d,i) => {
        d.isFave=false
        d.id = i
        return d
    })
    console.log("this is all stock info from all api", responseAll.data.symbolsList)
    this.setState({
        allStocks: responseAddedProperties
    })
  }

  //COMPONENT DID MOUNT
  componentDidMount() {
    this.makeApiCallActive()
    this.makeApiCallAll()
  }

  //ADD TO LIST FUNCTION
  addToList = (item) => {
      item.isFave=true
      this.setState(prevState => ({
        list:[...prevState.list, item]
      }), () => {
        console.log("this is addToList: list state", this.state.list)
      })
    }

  //REMOVE FROM LIST FUNCTION
  removeFromList = (id) => {
    this.state.allStocks[id].isFave = false
    let removal = this.state.list.filter((d) => {
      return d.id !== id
    })
    this.setState(prevState => ({
        list: removal
      }), () => {
        console.log("this is removeFromList: list state", this.state.list)
      })
    }

  render () {
    return(
      <div className="Main">
        <Switch>
          <Route path= "/mostActive"
          render = {() => <MostActive
                          mostActive= {this.state.mostActive}
                          /> } />
          <Route path= "/allStocks"
          render = {() => <AllStocks
                          allStocks= {this.state.allStocks}
                          addToList= {this.addToList}
                          removeFromList= {this.removeFromList}
                          /> } />
          <Route path= "/myList"
          render = {() => <MyList
                          myList = {this.state.list}
                          removeFromList= {this.removeFromList}
                          />} />
          <Route path= "/" component= {Home} />
        </Switch>
      </div>
    )
  }
}

export default Main;
