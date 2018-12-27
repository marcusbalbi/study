import './SeasonDisplay.css'
import React,{Component} from 'react'

const seasonConfig = {
  winter: {
    text: 'Its cold here!',
    icon: 'snowflake blue icon massive'
  },
  summer: {
    text: 'Lets go to the beach',
    icon: 'sun red icon massive'
  }
}

class SeasonDisplay extends Component {
  render () {
    const season = this.getSeason(this.props.lat, new Date().getMonth())
    const {icon, text} = seasonConfig[season]
    return (
      <div className={`season-display ${season}`}>
        <i className={`${icon} icon-left`} />
        <h1>{text}</h1>
        <i className={`${icon} icon-right`} />
      </div>
    )
  }
  getSeason (lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter'
    } else {
      return lat > 0 ? 'winter' : 'summer'
    }
  }
}

export default SeasonDisplay