import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import GamingVideoCard from '../GamingVideoCard'
import Header from '../Header'
import MenuItem from '../MenuItem'
import VideosContext from '../../context/VideosContext'

import {GamingVideoSection} from '../styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllGamingVideos()
  }

  getAllGamingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetryButton = () => {
    this.getAllGamingVideos()
  }

  renderFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <div className="videos-error-view-container">
            <img
              src={
                darkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
              className="videos-failure-img"
            />
            <h1 className="video-failure-heading-text">
              Oops! Something Went Wrong
            </h1>
            <p className="videos-failure-description">
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button" onClick={this.onClickRetryButton}>
              Retry
            </button>
          </div>
        )
      }}
    </VideosContext.Consumer>
  )

  renderLoadingView = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <div className="products-loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </div>
        )
      }}
    </VideosContext.Consumer>
  )

  renderGamingVideosListView = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {gamingVideosList} = this.state

        return (
          <GamingVideoSection data-testid="gaming" bgColor={darkTheme}>
            <div className="gamingVideosHeader">
              <div className="gamingVideosHeadingCard">
                <SiYoutubegaming />
              </div>
              <h2>Trending</h2>
            </div>
            <ul className="gaming-videos-list">
              {gamingVideosList.map(eachVideo => (
                <GamingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
              ))}
            </ul>
          </GamingVideoSection>
        )
      }}
    </VideosContext.Consumer>
  )

  renderAllGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="Gaming-video-section">
        <Header />
        <div>
          <MenuItem />
          {this.renderAllGamingVideos()}
        </div>
      </div>
    )
  }
}

export default GamingVideos
