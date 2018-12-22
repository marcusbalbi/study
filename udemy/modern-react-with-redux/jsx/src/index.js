import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class CurrentTime extends Component {
  constructor (props) {
    super(props)
    this.startCountTime()
  }
  state = {
    time: '',
    timeList: [],
    colors: ['red', 'blue', 'green', 'pink', 'orange', '#c4c4c4']
  }
  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
        {this.state.timeList}
      </div>
    )
  }
  renderTime () {
    return this.state.timeList
  }
  startCountTime () {
    setInterval(() => {
      const {timeList} = this.state
      this.setState({ timeList: [<h3 style={{ color: this.state.colors[Math.floor(Math.random() * this.state.colors.length)] }} key={this.state.time} >{this.state.time}</h3>].concat(timeList), time: new Date().toString()})
    }, 1000)
  }
}

ReactDOM.render(<CurrentTime />, document.querySelector('#root'))