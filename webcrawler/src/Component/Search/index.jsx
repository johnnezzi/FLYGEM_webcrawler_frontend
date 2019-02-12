import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
  state = {
    inputValue: ''
  }
  render () {
    // const { inputValue } = this.state
    return (
      <form className='form_layout' onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} />
        <button className='search_button'>Submit</button>
      </form>
    )
  }
  handleChange = e => {
    const { value } = e.target
    this.setState({ inputValue: value })
  }

  handleSubmit = e => {
    const { inputValue } = this.state
    e.preventDefault()
    this.props.updateURL(inputValue)
    this.setState({ inputValue: '' })
  }
}

export default Search
