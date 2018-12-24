import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {lat: null, errorMessage: null}
    window.navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        this.setState({lat: coords.latitude})
      },
      ({message}) => { 
        this.setState({errorMessage: message}) 
      }
    )
  }
  render () {
    if (this.state.lat) {
      return (
        <div>
          latitude: {this.state.lat}
        </div>
      )
    }

    if (this.state.errorMessage) {
      return <div>error: {this.state.errorMessage}</div>
    }

    return <div>Loading...</div>
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'))
