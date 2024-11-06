import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import VideosContext from '../../context/VideosContext'

import {
  VideoLinkItem,
  VideoItem,
  VideoCardThumbnailImg,
  VideoCardContent,
  VideoCardTitle,
  VideoCardName,
  VideoViewsDateTimeCard,
  VideoViewsDateTime,
} from '../styledComponents'

const SavedVideoCard = props => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {videoDetails} = props
      const {
        id,
        title,
        thumbnailUrl,
        viewCount,
        publishedAt,
        channel,
      } = videoDetails

      const date = new Date(publishedAt)
      const newDate = `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}`
      const dateAndTimeOfVideo = formatDistanceToNow(new Date(newDate))

      return (
        <VideoItem>
          <VideoLinkItem to={`/videos/${id}`}>
            <VideoCardThumbnailImg
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail"
            />
            <VideoCardContent>
              <VideoCardTitle color={darkTheme}>{title}</VideoCardTitle>
              <VideoCardName>{channel.name}</VideoCardName>
              <VideoViewsDateTimeCard>
                <VideoViewsDateTime>{viewCount} views</VideoViewsDateTime>
                <BsDot style={{color: '#94a3b8', marginTop: '3px'}} />
                <VideoViewsDateTime>{dateAndTimeOfVideo}</VideoViewsDateTime>
              </VideoViewsDateTimeCard>
            </VideoCardContent>
          </VideoLinkItem>
        </VideoItem>
      )
    }}
  </VideosContext.Consumer>
)

export default SavedVideoCard
