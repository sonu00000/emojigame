import './index.css'

const WinOrLoseCard = props => {
  const {won, points, topScore, onReset} = props
  return (
    <div className="game-status-card">
      <div className="game-status-details">
        <h1>You {won === 'yes' ? 'Won' : 'Lose'}</h1>
        <p>Score</p>
        <p>{won === 'yes' ? points : topScore}/12</p>
        <button className="play-btn" onClick={() => onReset()}>
          Play Again
        </button>
      </div>
      {won === 'yes' && (
        <img
          className="status-img"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won game"
        />
      )}
      {won === 'no' && (
        <img
          className="status-img"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="lose game"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
