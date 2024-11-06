import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoSearchSharp} from 'react-icons/io5'

import VideosContext from '../../context/VideosContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  AllVideosContainer,
  SearchInputFeild,
  SearchButton,
  LoaderContainer,
  VideosList,
  VideosErrorViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewDescription,
  RetryBtn,
  NoSearchViewResultView,
  NoSearchViewResultImg,
  NoSearchViewResultHeading,
  NoSearchViewResultText,
} from '../styledComponents'

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
    this.getAllVideos()
  }

  renderSearchInputField = () => (
    <VideosContext.Consumer>
      {value => {
        const {darkTheme} = value
        const {searchInput} = this.state

        return (
          <div>
            <SearchInputFeild
              type="search"
              value={searchInput}
              placeholder="Search"
              onChange={this.changeSearchInput}
              onKeyPress={this.onEnterSearchInput}
              borderColor={darkTheme}
              color={darkTheme}
            />
            <SearchButton
              type="button"
              onClick={this.onSearchButtonClick}
              data-testid="searchButton"
              borderColor={darkTheme}
              bgColor={darkTheme}
            >
              <IoSearchSharp style={{color: '#606060'}} />
            </SearchButton>
          </div>
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
            {this.renderSearchInputField()}
            <VideosErrorViewContainer>
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
            </VideosErrorViewContainer>
          </>
        )
      }}
    </VideosContext.Consumer>
  )

  renderLoadingView = () => (
    <>
      {this.renderSearchInputField()}
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </LoaderContainer>
    </>
  )

  renderVideosListView = () => {
    const {videosList} = this.state
    const shouldShowVideosList = videosList.length > 0

    return shouldShowVideosList ? (
      <>
        {this.renderSearchInputField()}
        <VideosList>
          {videosList.map(eachVideo => (
            <HomeVideoCard videoData={eachVideo} key={eachVideo.id} />
          ))}
        </VideosList>
      </>
    ) : (
      <VideosContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              {this.renderSearchInputField()}
              <NoSearchViewResultView>
                <NoSearchViewResultImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  className="no-videos-img"
                  alt="no videos"
                />
                <NoSearchViewResultHeading color={darkTheme}>
                  No Search results found
                </NoSearchViewResultHeading>
                <NoSearchViewResultText>
                  Try different key words or remove search filter
                </NoSearchViewResultText>
                <RetryBtn type="button" onClick={this.onClickRetryButton}>
                  Retry
                </RetryBtn>
              </NoSearchViewResultView>
            </>
          )
        }}
      </VideosContext.Consumer>
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
    return <AllVideosContainer>{this.renderAllVideos()}</AllVideosContainer>
  }
}

export default AllVideosSection
