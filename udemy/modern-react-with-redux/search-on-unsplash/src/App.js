import React, { Component } from 'react';
import SearchBar from './components/common/SearchBar'
import Content from './components/common/Content'
import axios from 'axios'
import config from './config'

import './App.scss'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="search-bar">
        <SearchBar onSubmit={this.searchPictures} />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
  searchPictures (query) {
    axios.get(`https://api.unsplash.com/search/photos/?client_id=${config.unsplashKey}&query=${query}`)
      .then(console.log)
  }
}

export default App;
