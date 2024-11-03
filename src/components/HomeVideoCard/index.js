import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import VideosContext from '../../context/VideosContext'

const HomeVideoCard = props => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {videoData} = props
      const {
        id,
        title,
        thumbnailUrl,
        viewCount,
        publishedAt,
        channel,
      } = videoData
      const {name, profileImageUrl} = channel

      const date = new Date(publishedAt)
      const newDate = `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}`
      const dateAndTimeOfVideo = formatDistanceToNow(new Date(newDate))

      return (
        <li className="video-item">
          <Link to={`/videos/${id}`} className="link-item">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail"
            />
            <div className="video-content">
              <img src={profileImageUrl} alt="channel logo" />
              <div>
                <h2>{title}</h2>
                <p>{name}</p>
                <div>
                  <p>{viewCount} views</p>
                  <BsDot />
                  <p>{dateAndTimeOfVideo}</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      )
    }}
  </VideosContext.Consumer>
)

export default HomeVideoCard