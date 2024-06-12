import './index.css'

const EmojiCard = props => {
  const {onClickEmoji} = props
  const {id, emojiName, emojiUrl} = props.emojiDetails
  return (
    <li className="emoji-card">
      <button className="emoji-btn" onClick={() => onClickEmoji(id)}>
        <img className="logo-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
