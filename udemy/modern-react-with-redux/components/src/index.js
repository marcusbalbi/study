import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
const App = () => {
  return (
    <div className="ui container comments" >
      <div className="comment" >
        <a className="avatar" href="/">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a className="author" href="/">
            {faker.name.lastName()}
          </a>
          <div className="metadata" >
            <span className="date" > Today at 06:00 PM</span>
          </div>
        <div className="text" >Nice blog POst!</div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))