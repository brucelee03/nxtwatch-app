import {HiFire} from 'react-icons/hi'

import SavedAndTrendingVideoCard from '../SavedAndTrendingVideoCard'
import Header from '../Header'
import MenuItem from '../MenuItem'
import VideosContext from '../../context/VideosContext'

import {
  SavedVideosSection,
  Banner,
  BannerLogoCard,
  BannerHeading,
  SavedVideosList,
  NoSavedVideosSection,
  NoSavedVideosImg,
  NoSavedVideosHeading,
  NoSavedVideosTxt,
} from '../styledComponents'

const SavedVideos = () => (
  <VideosContext.Consumer>
    {value => {
      const {savedVideosList, darkTheme} = value

      return (
        <div>
          <Header />
          <SavedVideosSection bgColor={darkTheme} data-testid="savedVideos">
            <MenuItem />
            {savedVideosList.length > 0 ? (
              <div>
                <Banner bgColor={darkTheme} data-testid="banner">
                  <BannerLogoCard bgColor={darkTheme}>
                    <HiFire style={{color: '#ff0b37', fontSize: '30px'}} />
                  </BannerLogoCard>
                  <BannerHeading color={darkTheme}>Saved Videos</BannerHeading>
                </Banner>
                <SavedVideosList className="savedVideoslist">
                  {savedVideosList.map(eachVideo => (
                    <SavedAndTrendingVideoCard
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </SavedVideosList>
              </div>
            ) : (
              <div>
                <MenuItem />
                <NoSavedVideosSection bgColor={darkTheme}>
                  <NoSavedVideosImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideosHeading color={darkTheme}>
                    No saved videos found
                  </NoSavedVideosHeading>
                  <NoSavedVideosTxt color={darkTheme}>
                    Save your videos by clicking a button
                  </NoSavedVideosTxt>
                </NoSavedVideosSection>
              </div>
            )}
          </SavedVideosSection>
        </div>
      )
    }}
  </VideosContext.Consumer>
)

export default SavedVideos
