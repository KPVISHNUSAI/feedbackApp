import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedBack: false,
  }

  setFeedbackTrue = () => {
    this.setState({feedBack: true})
  }

  renderFeedbackContainer = () => {
    const {resources} = this.props
    return (
      <div className="selection-container">
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="reaction-container">
          {resources.emojis.map(eachEmoji => (
            <li
              className="list-cont"
              key={eachEmoji.id}
              onClick={this.setFeedbackTrue}
            >
              <img src={eachEmoji.imageUrl} alt={eachEmoji.name} />
              <p>{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankingComponent = () => {
    const {resources} = this.props
    return (
      <div className="selection-container">
        <img src={resources.loveEmojiUrl} alt="love emoji" />
        <h1>Thank You</h1>
        <p>
          We will your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {feedBack} = this.state
    return (
      <div className="feed-back-container">
        {feedBack
          ? this.renderThankingComponent()
          : this.renderFeedbackContainer()}
      </div>
    )
  }
}

export default Feedback
