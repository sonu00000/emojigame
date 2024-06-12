/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    topScore: 0,
    points: 0,
    won: null,
  }
  getshuffledEmojisList = emojisList => {
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = currId => {
    const emojiListLength = this.props.emojisList.length
    console.log(emojiListLength)
    const {clickedEmojis, points, topScore, won} = this.state
    const isPresent = clickedEmojis.find(eachId => eachId === currId)
    console.log(isPresent)
    if (isPresent) {
      console.log('You lose')
      this.setState({
        won: 'no',
        topScore: points > topScore ? points : topScore,
      })
    } else {
      this.setState({
        clickedEmojis: [...clickedEmojis, currId],
        points: this.state.points + 1,
      })
      if (points === emojiListLength) {
        this.setState({
          won: this.state.points === emojiListLength ? 'yes' : null,
          topScore: points > topScore ? points : topScore,
        })
      }
    }
  }

  onReset = () => {
    this.setState({clickedEmojis: [], points: 0, won: null})
  }

  render() {
    const {emojisList} = this.props
    const {won, points, topScore} = this.state
    const shuffledEmojisList = this.getshuffledEmojisList(emojisList)
    return (
      <div className="container">
        <div className="app-container">
          <NavBar points={points} topScore={topScore} />
          <div className="game-container">
            {won && (
              <WinOrLoseCard
                won={won}
                points={points}
                topScore={topScore}
                onReset={this.onReset}
              />
            )}
            {!won && (
              <ul className="emojis-list">
                {shuffledEmojisList.map(eachEmoji => (
                  <EmojiCard
                    emojiDetails={eachEmoji}
                    key={eachEmoji.id}
                    onClickEmoji={this.onClickEmoji}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
