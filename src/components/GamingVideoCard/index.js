import {Link} from 'react-router-dom'
import VideosContext from '../../context/VideosContext'

const GamingVideoCard = props => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails

      return (
        <li className="video-item">
          <Link to={`/videos/${id}`} className="link-item">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail"
            />
            <div className="video-content">
              <h2>{title}</h2>
              <p>{viewCount} Watching Worldwide</p>
            </div>
          </Link>
        </li>
      )
    }}
  </VideosContext.Consumer>
)

export default GamingVideoCard
