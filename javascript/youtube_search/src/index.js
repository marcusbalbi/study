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
      videos: [],
      selected: null
    }
    this.SearchVideos()
  }
  render () {
    if (this.state.videos.length <= 0) {
      return <h3>Loading...</h3>
    }
    return (
      <div>
        <SearchBar />
        <VideoDetail selected={this.state.selected} />
        <VideoList onVideoSelected={(video) => { this.changeVideo(video) }} list={this.state.videos} />
      </div>
    )
  }
  SearchVideos () {
    search('MBL', { key: window.YOUTUBE_KEY, maxResults: 5 }, (err, res) => {
      const videos = res.filter((item) => {
        item.link = item.link.replace('watch?v=', 'embed/')
        return item.kind.includes('video')
      }) || []
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
