import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'

import VideosContext from '../../context/VideosContext'

import {
  LinkItem,
  HomeCardListItem,
  HomeCardThumbnailImg,
  HomeCardVideoContent,
  HomeCardChannelImg,
  HomeCardVideoAbout,
  HomeCardTitle,
  HomeCardChannelName,
  VideoViewAndPublishedTime,
  HomeCardVideoViewAndPublishedTime,
} from '../styledComponents'

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
        <HomeCardListItem>
          <LinkItem to={`/videos/${id}`} className="link-item">
            <HomeCardThumbnailImg
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail"
            />
            <HomeCardVideoContent>
              <HomeCardChannelImg src={profileImageUrl} alt="channel logo" />
              <HomeCardVideoAbout>
                <HomeCardTitle color={darkTheme}>{title}</HomeCardTitle>
                <HomeCardChannelName>{name}</HomeCardChannelName>
                <HomeCardVideoViewAndPublishedTime>
                  <VideoViewAndPublishedTime>
                    {viewCount} views
                  </VideoViewAndPublishedTime>
                  <BsDot style={{color: '#475569', marginTop: '3px'}} />
                  <VideoViewAndPublishedTime>
                    {dateAndTimeOfVideo}
                  </VideoViewAndPublishedTime>
                </HomeCardVideoViewAndPublishedTime>
              </HomeCardVideoAbout>
            </HomeCardVideoContent>
          </LinkItem>
        </HomeCardListItem>
      )
    }}
  </VideosContext.Consumer>
)

export default HomeVideoCard
