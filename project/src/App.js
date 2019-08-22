import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  makeApiCallActive = async () => {
    let source = "https://financialmodelingprep.com/api/v3/stock/actives"
    const response = await axios.get(source)
    console.log("this is active stock info from active api", response.data.mostActiveStock)
  }
  makeApiCallAll = async () => {
    let sourceAll = "https://financialmodelingprep.com/api/v3/company/stock/list"
    const responseAll = await axios.get(sourceAll)
    console.log("this is all stock info from all api", responseAll.data.symbolsList)
  }
  componentDidMount() {
    this.makeApiCallActive()
    this.makeApiCallAll()
  }
  render () {
    return(
      <div className="App">
        <h1> This is the test </h1>
      </div>
    )
  }
}

export default App;
