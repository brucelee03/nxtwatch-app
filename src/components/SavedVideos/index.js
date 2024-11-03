import {HiFire} from 'react-icons/hi'

import SavedAndTrendingVideoCard from '../SavedAndTrendingVideoCard'
import Header from '../Header'
import MenuItem from '../MenuItem'
import VideosContext from '../../context/VideosContext'

import {SavedVideosSection} from '../styledComponents'

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
                <div className="savedVideosHeader">
                  <div className="savedVideosLogoCard">
                    <HiFire />
                  </div>
                  <h2>Saved Videos</h2>
                </div>
                <ul className="savedVideoslist">
                  {savedVideosList.map(eachVideo => (
                    <SavedAndTrendingVideoCard
                      key={eachVideo.id}
                      videoDetails={eachVideo}
                    />
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <MenuItem />
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h2>No saved videos found</h2>
                  <p>You can save your videos while watching them</p>
                </div>
              </div>
            )}
          </SavedVideosSection>
        </div>
      )
    }}
  </VideosContext.Consumer>
)

export default SavedVideos
