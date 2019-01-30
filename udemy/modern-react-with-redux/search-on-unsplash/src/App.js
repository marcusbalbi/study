import React, { Component } from 'react';
import SearchBar from './components/common/SearchBar'
import Content from './components/Content'
import axios from 'axios'
import config from './config'

import './App.scss'
class App extends Component {
  state = { result: {} }
  render() {
    return (
      <div className="App">
        <div className="search-bar">
        <SearchBar onSubmit={this.searchPictures.bind(this)} />
        </div>
        <div className="content">
          <Content result={this.state.result} />
        </div>
      </div>
    );
  }
  async searchPictures (query) {
    let result = await axios.get(`https://api.unsplash.com/search/photos/`, {
      params: {
        query,
        client_id: config.unsplashKey
      }
    })
    this.setState({ result: result.data })
  }
}

export default App;
