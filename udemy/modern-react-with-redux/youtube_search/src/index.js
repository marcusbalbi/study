import React from 'react'
import ReactDOM from 'react-dom'
import './config.js'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import search from 'youtube-search'
import _ from 'lodash'

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: [],
      selected: null
    }
  }
  componentDidMount () {
    this.SearchVideos('MBL')
  }
  render () {
    if (this.state.videos.length <= 0) {
      return ( 
        <div>
          <h3>Loading...</h3>
        </div>
      )
    }
    const search = _.debounce((term) => { this.SearchVideos(term) }, 800)
    return (
      <div className="app">
        <SearchBar onSearch={search} />
        <div className="content" >
          <VideoDetail selected={this.state.selected} />
          <VideoList onVideoSelected={(video) => { this.changeVideo(video) }} list={this.state.videos} />
        </div>
      </div>
    )
  }
  SearchVideos (term) {
    search(term, { key: window.YOUTUBE_KEY, maxResults: 10 }, (err, res) => {
      const videos = res.filter((item) => {
        item.link = item.link.replace('watch?v=', 'embed/')
        return item.kind.includes('video')
      })
      this.setState({ videos })
      if (videos[0]) {
        this.setState({ selected: videos[0] })
      }
    })
  }
  changeVideo (video) {
    this.setState({selected: video})
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'))
