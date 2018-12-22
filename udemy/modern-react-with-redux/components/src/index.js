import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
const App = () => {
  return (
    <div className="ui container comments" >
      <CommentDetail author={faker.name.lastName()}
        avatar={faker.image.avatar()}
        content={faker.random.words(5)}
        timeAgo={faker.date.recent(20).toLocaleTimeString()}
      />
      <CommentDetail author={faker.name.lastName()}
        avatar={faker.image.avatar()}
        content={faker.random.words(5)}
        timeAgo={faker.date.recent(20).toLocaleTimeString()}
      />
      <CommentDetail author={faker.name.lastName()}
        avatar={faker.image.avatar()}
        content={faker.random.words(5)}
        timeAgo={faker.date.recent(20).toLocaleTimeString()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))