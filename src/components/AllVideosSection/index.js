import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoSearchSharp} from 'react-icons/io5'

import VideosContext from '../../context/VideosContext'
import HomeVideoCard from '../HomeVideoCard'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllVideosSection extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getAllVideos()
    }
  }

  onSearchButtonClick = () => {
    this.getAllVideos()
  }

  onClickRetryButton = () => {
    this.setState({searchInput: ''}, this.getAllVideos)
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

  renderVideosListView = () => {
    const {videosList, searchInput} = this.state
    const shouldShowVideosList = videosList.length > 0

    return shouldShowVideosList ? (
      <div className="all-videos-container">
        <div>
          <input
            type="search"
            value={searchInput}
            placeholder="Search"
            onChange={this.changeSearchInput}
            onKeyPress={this.onEnterSearchInput}
          />
          <button
            type="button"
            onClick={this.onSearchButtonClick}
            data-testid="searchButton"
          >
            <IoSearchSharp />
          </button>
        </div>
        <ul className="videos-list">
          {videosList.map(eachVideo => (
            <HomeVideoCard videoData={eachVideo} key={eachVideo.id} />
          ))}
        </ul>
      </div>
    ) : (
      <div className="no-videos-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          className="no-videos-img"
          alt="no videos"
        />
        <h1 className="no-products-heading">No Search results found</h1>
        <p className="no-products-description">
          Try different key words or remove search filter
        </p>
        <button type="button" onClick={this.onClickRetryButton}>
          Retry
        </button>
      </div>
    )
  }

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div className="all-videos-section">{this.renderAllVideos()}</div>
  }
}

export default AllVideosSection
