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
  VideoItemDetailsLoaderContainer,
  VideoItemDetailsHeading,
  VideoElementCard,
  VideoItemDetailsViewAndDateTime,
  VideoItemViewAndPublishedTime,
  HorizontalLine,
  VideoItemContent,
  VideoItemImg,
  VideoItemDetailsButton,
  VideoItemDetailsButtonCard,
  VideoItemName,
  VideoItemSubscriberCount,
  VideoItemDescription,
  FailureViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewDescription,
  RetryBtn,
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
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <VideoItemDetailsLoaderContainer
            bgColor={darkTheme}
            data-testid="loader"
          >
            <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
          </VideoItemDetailsLoaderContainer>
        )
      }}
    </VideosContext.Consumer>
  )

  renderFailureView = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <>
            <FailureViewContainer bgColor={darkTheme}>
              <FailureViewImg
                src={
                  darkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureViewHeading color={darkTheme}>
                Oops! Something Went Wrong
              </FailureViewHeading>
              <FailureViewDescription>
                We are having some trouble to complete your request.
              </FailureViewDescription>
              <RetryBtn type="button" onClick={this.onClickRetryButton}>
                Retry
              </RetryBtn>
            </FailureViewContainer>
          </>
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
        const {videoData, isLiked, isDisliked} = this.state
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
          } else {
            addSavedVideoItem(videoData)
          }
        }

        const date = new Date(publishedAt)
        const dateAndTimeOfVideo = formatDistanceToNow(date, {addSuffix: true})

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
                height="446px"
              />
            </div>
            <VideoItemDetailsHeading color={darkTheme}>
              {title}
            </VideoItemDetailsHeading>
            <VideoElementCard>
              <VideoItemDetailsViewAndDateTime>
                <VideoItemViewAndPublishedTime>
                  {viewCount} views
                </VideoItemViewAndPublishedTime>
                <BsDot style={{color: '#94a3b8', marginTop: '3px'}} />
                <VideoItemViewAndPublishedTime>
                  {dateAndTimeOfVideo}
                </VideoItemViewAndPublishedTime>
              </VideoItemDetailsViewAndDateTime>
              <VideoItemDetailsButtonCard>
                <VideoItemDetailsButton
                  type="button"
                  onClick={this.handleLikeButtonClick}
                  color={isLiked}
                >
                  <BiLike
                    style={{
                      fontSize: '17px',
                      color: isLiked ? '#3b82f6' : '#94a3b8',
                    }}
                  />
                  Like
                </VideoItemDetailsButton>
                <VideoItemDetailsButton
                  type="button"
                  onClick={this.handleDislikeButtonClick}
                  color={isDisliked}
                >
                  <BiDislike
                    style={{
                      fontSize: '19px',
                      color: isDisliked ? '#3b82f6' : '#94a3b8',
                    }}
                  />
                  Dislike
                </VideoItemDetailsButton>
                <VideoItemDetailsButton
                  type="button"
                  onClick={handleSaveButtonClick}
                  color={isVideoSaved}
                >
                  <MdOutlinePlaylistAdd
                    style={{
                      fontSize: '19px',
                      color: isVideoSaved ? '#3b82f6' : '#94a3b8',
                    }}
                  />
                  {isVideoSaved ? 'Saved' : 'Save'}
                </VideoItemDetailsButton>
              </VideoItemDetailsButtonCard>
            </VideoElementCard>
            <HorizontalLine borderColor={darkTheme} />
            <VideoItemContent>
              <VideoItemImg src={channel.profileImageUrl} alt="channel logo" />
              <div>
                <VideoItemName color={darkTheme}>{channel.name}</VideoItemName>
                <VideoItemSubscriberCount>
                  {channel.subscriberCount} subscribers
                </VideoItemSubscriberCount>
                <VideoItemDescription color={darkTheme}>
                  {description}
                </VideoItemDescription>
              </div>
            </VideoItemContent>
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
