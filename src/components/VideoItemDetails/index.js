import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'

import {MdOutlinePlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'

import Header from '../Header'
import MenuItem from '../MenuItem'
import VideosContext from '../../context/VideosContext'

import {
  VideoItemDetailsSection,
  VideoItemDetailsButton,
  VideoItemDetailsBtnText,
} from '../styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: null,
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    const {match} = this.props
    const videoId = match.params.id
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${videoId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.getVideoItemDetails()
  }

  handleLikeButtonClick = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false, // Reset dislike when like is clicked
    }))
  }

  handleDislikeButtonClick = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false, // Reset like when dislike is clicked
    }))
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="job-details-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <div className="video-item-error-view-container">
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

  renderVideoItemDetails = () => (
    <VideosContext.Consumer>
      {value => {
        const {
          darkTheme,
          addSavedVideoItem,
          removeSavedVideos,
          savedVideosList,
        } = value
        const {videoData, isLiked, isDisliked, isSaved} = this.state
        const {
          id,
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = videoData

        const isVideoSaved = savedVideosList.some(video => video.id === id) // Iterate savedVideosList to check whether video is in the list
        const handleSaveButtonClick = () => {
          if (isVideoSaved) {
            removeSavedVideos(id)
            this.setState({isSaved: false})
          } else {
            addSavedVideoItem(videoData)
            this.setState({isSaved: true})
          }
        }

        const date = new Date(publishedAt)
        const newDate = `${date.getFullYear()}, ${date.getMonth()}, ${date.getDate()}`
        const dateAndTimeOfVideo = formatDistanceToNow(new Date(newDate))

        return (
          <VideoItemDetailsSection
            data-testid="videoItemDetails"
            bgColor={darkTheme}
          >
            <div>
              <ReactPlayer
                url={videoUrl}
                controls
                className="video-player"
                width="100%"
              />
            </div>
            <h2>{title}</h2>
            <div className="video-element-card">
              <div>
                <p>{viewCount} views</p>
                <BsDot />
                <p>{dateAndTimeOfVideo}</p>
              </div>
              <div>
                <VideoItemDetailsButton
                  type="button"
                  className={isLiked ? 'active' : ''}
                >
                  <BiLike style={{fontSize: '19px'}} />
                  <VideoItemDetailsBtnText>Like</VideoItemDetailsBtnText>
                </VideoItemDetailsButton>
                <VideoItemDetailsButton
                  type="button"
                  className={isDisliked ? 'active' : ''}
                >
                  <BiDislike style={{fontSize: '19px'}} />
                  <VideoItemDetailsBtnText>Dislike</VideoItemDetailsBtnText>
                </VideoItemDetailsButton>
                <VideoItemDetailsButton
                  type="button"
                  onClick={handleSaveButtonClick}
                  className={isSaved ? 'active' : ''}
                >
                  <MdOutlinePlaylistAdd style={{fontSize: '19px'}} />
                  <VideoItemDetailsBtnText>Save</VideoItemDetailsBtnText>
                </VideoItemDetailsButton>
              </div>
            </div>
            <hr />
            <div className="video-item-content">
              <img src={channel.profileImageUrl} alt={channel.name} />
              <div>
                <h2>{channel.name}</h2>
                <p>{channel.subscriberCount} subscribers</p>
                <p>{description}</p>
              </div>
            </div>
          </VideoItemDetailsSection>
        )
      }}
    </VideosContext.Consumer>
  )

  renderVideoItemData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
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
          {this.renderVideoItemData()}
        </div>
      </div>
    )
  }
}

export default withRouter(VideoItemDetails)
