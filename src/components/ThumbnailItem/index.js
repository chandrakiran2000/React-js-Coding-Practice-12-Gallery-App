// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachList, updatingState, checkingIds} = props
  const {id, imageUrl, thumbnailUrl, thumbnailAltText} = eachList // id, imageUrl,
  // console.log(checkingIds)
  const classImg = checkingIds ? 'opacity' : ''

  const sendingUrl = () => {
    updatingState(imageUrl, id)
  }

  return (
    <li className="item-card">
      <button
        className="item-btn"
        onClick={sendingUrl}
        type="button"
        aria-label="Save"
      >
        <img
          className={`item-img ${classImg}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
