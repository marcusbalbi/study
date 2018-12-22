import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class CurrentTime extends Component {
  state = {
    time: new Date.now()
  }
  render () {
    return (
      <div>
        {this.state.time}
      </div>
    )
  }
}

ReactDOM.render(<CurrentTime />, document.querySelector('#root'))