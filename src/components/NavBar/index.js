const Navbar = ({points, topScore}) => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="nav-content">
        <p className="score">Score: {points}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default Navbar
