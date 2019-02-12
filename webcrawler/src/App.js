import React, { Component } from 'react'
import './App.css'
import Search from './Component/Search'

class App extends Component {
  state = {
    URL: ''
  }
  render () {
    return (
      <div className='App'>
        <header>Webcrawler</header>
        <br />
        <Search updateURL={this.updateURL} />
      </div>
    )
  }
  updateURL = newURL => {
    console.log()
    this.setState({ URL: newURL })
  }
}

export default App
