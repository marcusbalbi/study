import React, { Component } from 'react';
import SearchBar from './components/common/SearchBar'
import Content from './components/common/Content'
import './App.scss'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.searchPictures} />
        <Content />
      </div>
    );
  }
  searchPictures (query) {
    console.log('searching...', query)
  }
}

export default App;
