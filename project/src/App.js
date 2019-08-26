import React from 'react';
import './CSS/general.css'
import Main from "./Components/Main"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

class App extends React.Component {
  render () {
    return(
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
