import VideosContext from '../../context/VideosContext'

import {
  GamingLinkItem,
  VideoItem,
  GamingVideoItemImg,
  GamingVideoTitle,
  GamingVideoViewCount,
} from '../styledComponents'

const GamingVideoCard = props => (
  <VideosContext.Consumer>
    {value => {
      const {darkTheme} = value
      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails

      return (
        <VideoItem>
          <GamingLinkItem to={`/videos/${id}`} className="link-item">
            <GamingVideoItemImg
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail"
            />
            <div className="video-content">
              <GamingVideoTitle color={darkTheme}>{title}</GamingVideoTitle>
              <GamingVideoViewCount color={darkTheme}>
                {viewCount} Watching Worldwide
              </GamingVideoViewCount>
            </div>
          </GamingLinkItem>
        </VideoItem>
      )
    }}
  </VideosContext.Consumer>
)

export default GamingVideoCard
