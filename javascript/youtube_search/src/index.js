import React from 'react'
import ReactDOM from 'react-dom'
import './config.js'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import search from 'youtube-search'
class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: []
    }

    search('MBL', { key: window.YOUTUBE_KEY, maxResults: 5 }, (err, res) => {
      console.log(res)
       this.setState({ videos: res || [] })
    })
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail />
        <VideoList list={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'))
