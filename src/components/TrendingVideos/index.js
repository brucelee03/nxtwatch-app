import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import SavedAndTrendingVideoCard from '../SavedAndTrendingVideoCard'
import Header from '../Header'
import MenuItem from '../MenuItem'
import VideosContext from '../../context/VideosContext'

import {TrendingVideoSection} from '../styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllTrendingVideos()
  }

  getAllTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        publishedAt: video.published_at,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetryButton = () => {
    this.getAllTrendingVideos()
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
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderTrendingVideosListView = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {trendingVideosList} = this.state

        return (
          <TrendingVideoSection bgColor={darkTheme} data-testid="trending">
            <div className="savedVideosHeader">
              <div className="savedVideosLogoCard">
                <HiFire />
              </div>
              <h2>Trending</h2>
            </div>
            <ul className="videos-list">
              {trendingVideosList.map(eachVideo => (
                <SavedAndTrendingVideoCard
                  videoDetails={eachVideo}
                  key={eachVideo.id}
                />
              ))}
            </ul>
          </TrendingVideoSection>
        )
      }}
    </VideosContext.Consumer>
  )

  renderAllTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosListView()
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
      <div>
        <Header />
        <div>
          <MenuItem />
          {this.renderAllTrendingVideos()}
        </div>
      </div>
    )
  }
}

export default TrendingVideos
